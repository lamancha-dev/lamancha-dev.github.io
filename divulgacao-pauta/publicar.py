#!/usr/bin/env python3
"""
Publica automaticamente um post da PAUTA no Facebook e no Instagram.

Usa sempre a lista posts.json, uma após a outra, guardando em
estado.json qual foi o último post publicado para continuar dali na
próxima vez.
"""
import json
import os
import sys
from datetime import date
from pathlib import Path

import requests

PASTA = Path(__file__).parent
ESTADO_FICHEIRO = PASTA / "estado.json"
POSTS_FICHEIRO = PASTA / "posts.json"
BASE_IMAGENS = "https://lamancha-dev.github.io/"
GRAPH_API = "https://graph.facebook.com/v21.0"


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

    posts = carregar_json(POSTS_FICHEIRO)
    estado = carregar_json(ESTADO_FICHEIRO)

    indice = estado.get("proximo_indice", 0) % len(posts)
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

    # Avança sempre para o próximo post da próxima vez, mesmo que uma das
    # redes tenha falhado, para não ficar presa a repetir o mesmo post.
    estado["proximo_indice"] = (indice + 1) % len(posts)
    guardar_json(ESTADO_FICHEIRO, estado)

    if erros:
        print("⚠️ Houve problemas:\n" + "\n".join(erros))
        sys.exit(1)

    print("🎉 Post publicado com sucesso em todas as redes.")


if __name__ == "__main__":
    main()
