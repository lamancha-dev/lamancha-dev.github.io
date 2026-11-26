#!/usr/bin/env python3
"""
Publica automaticamente um post da PAUTA no Facebook e no Instagram.

Até 31 de dezembro de 2026, publica a lista de posts "promocao" (com a
oferta de lançamento). A partir de 1 de janeiro de 2027, muda sozinho
para a lista "evergreen" (posts sem promoção, para continuar a
divulgação depois de a oferta acabar).

Cada lista tem o seu próprio contador em estado.json, para que mudar de
lista não "perca o lugar" na outra.
"""
import json
import os
import sys
from datetime import date
from pathlib import Path

import requests

PASTA = Path(__file__).parent
ESTADO_FICHEIRO = PASTA / "estado.json"
BASE_IMAGENS = "https://lamancha-dev.github.io/"
GRAPH_API = "https://graph.facebook.com/v21.0"

FIM_DA_PROMOCAO = date(2026, 12, 31)


def carregar_json(caminho):
    with open(caminho, "r", encoding="utf-8") as f:
        return json.load(f)


def guardar_json(caminho, dados):
    with open(caminho, "w", encoding="utf-8") as f:
        json.dump(dados, f, ensure_ascii=False, indent=2)
        f.write("\n")


def publicar_facebook(page_id, page_token, texto, imagem_url):
    url = f"{GRAPH_API}/{page_id}/photos"
    resposta = requests.post(
        url,
        data={"url": imagem_url, "caption": texto, "access_token": page_token},
        timeout=30,
    )
    resposta.raise_for_status()
    print("✅ Publicado no Facebook:", resposta.json())


def publicar_instagram(ig_user_id, ig_token, texto, imagem_url):
    # Passo 1: criar o "container" com a imagem e a legenda
    url_criar = f"{GRAPH_API}/{ig_user_id}/media"
    resposta = requests.post(
        url_criar,
        data={"image_url": imagem_url, "caption": texto, "access_token": ig_token},
        timeout=30,
    )
    resposta.raise_for_status()
    criacao_id = resposta.json()["id"]

    # Passo 2: publicar o container criado
    url_publicar = f"{GRAPH_API}/{ig_user_id}/media_publish"
    resposta = requests.post(
        url_publicar,
        data={"creation_id": criacao_id, "access_token": ig_token},
        timeout=30,
    )
    resposta.raise_for_status()
    print("✅ Publicado no Instagram:", resposta.json())


def main():
    fb_page_id = os.environ.get("FB_PAGE_ID")
    fb_token = os.environ.get("FB_PAGE_ACCESS_TOKEN")
    ig_user_id = os.environ.get("IG_USER_ID")
    ig_token = os.environ.get("IG_ACCESS_TOKEN")

    if not all([fb_page_id, fb_token, ig_user_id, ig_token]):
        print(
            "❌ Faltam segredos (FB_PAGE_ID, FB_PAGE_ACCESS_TOKEN, "
            "IG_USER_ID, IG_ACCESS_TOKEN). Vê o GUIA.md para os configurar."
        )
        sys.exit(1)

    hoje = date.today()
    em_promocao = hoje <= FIM_DA_PROMOCAO

    if em_promocao:
        lista_nome = "promocao"
        posts_ficheiro = PASTA / "posts_promocao.json"
        chave_indice = "proximo_indice_promocao"
    else:
        lista_nome = "evergreen"
        posts_ficheiro = PASTA / "posts_evergreen.json"
        chave_indice = "proximo_indice_evergreen"

    print(f"📅 Hoje é {hoje.isoformat()} → a usar a lista '{lista_nome}'.")

    posts = carregar_json(posts_ficheiro)
    estado = carregar_json(ESTADO_FICHEIRO)

    indice = estado.get(chave_indice, 0) % len(posts)
    post = posts[indice]
    imagem_url = BASE_IMAGENS + post["imagem"]

    erros = []

    try:
        publicar_facebook(fb_page_id, fb_token, post["texto"], imagem_url)
    except Exception as e:
        erros.append(f"Facebook: {e}")

    try:
        publicar_instagram(ig_user_id, ig_token, post["texto"], imagem_url)
    except Exception as e:
        erros.append(f"Instagram: {e}")

    # Avança sempre para o próximo post desta lista da próxima vez, mesmo
    # que uma das redes tenha falhado, para não ficar presa a repetir o
    # mesmo post. O contador da outra lista fica intocado.
    estado[chave_indice] = (indice + 1) % len(posts)
    guardar_json(ESTADO_FICHEIRO, estado)

    if erros:
        print("⚠️ Houve problemas:\n" + "\n".join(erros))
        sys.exit(1)

    print("🎉 Post publicado com sucesso em todas as redes.")


if __name__ == "__main__":
    main()
