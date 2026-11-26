# Guia: pôr a divulgação da PAUTA a publicar sozinha

Este robô já está pronto e vai tentar publicar automaticamente no Facebook e no
Instagram **três vezes por semana** (segunda, quarta e sexta, às 10h). Só falta
dar-lhe autorização para publicar em teu nome — isso faz-se uma única vez,
seguindo os passos abaixo.

Vais precisar de 4 "chaves" (códigos) que o Facebook te dá, e de as colocar no
GitHub. Nada disto aparece em lado nenhum público — ficam guardadas num sítio
secreto do teu repositório.

## Passo 1 — Confirmar que o Instagram é conta Profissional/Empresa

1. No telemóvel, abre o Instagram @pautavaliacao.
2. Vai a **Definições → Conta** e confirma que diz "Conta profissional" (Empresa
   ou Criador de conteúdo). Se ainda não for, há lá a opção para mudar — é
   gratuito.
3. Confirma também que essa conta Instagram está **ligada à Página de Facebook**
   da PAUTA (em Definições → Conta ligada).

## Passo 2 — Criar a app na Meta for Developers

1. Vai a https://developers.facebook.com/ e inicia sessão com a tua conta
   normal do Facebook.
2. Clica em **"Minhas Apps"** (My Apps) → **"Criar App"**.
3. Escolhe o tipo **"Empresa"** (Business).
4. Dá-lhe um nome, por exemplo "PAUTA Divulgação".

## Passo 3 — Adicionar os produtos necessários

Dentro da app que criaste:

1. Procura o produto **"Instagram Graph API"** (ou "Instagram") e clica em
   **Configurar/Set up**.
2. Procura também **"Facebook Login"** ou vê se o **"Graph API Explorer"**
   está acessível (fica no menu Ferramentas/Tools, no topo do site).

## Passo 4 — Gerar o token de acesso (a "chave")

1. Abre o **Graph API Explorer**: https://developers.facebook.com/tools/explorer/
2. No canto superior direito, escolhe a tua app ("PAUTA Divulgação").
3. Em "Utilizador ou Página" escolhe a **Página do Facebook da PAUTA**.
4. Em "Permissões", adiciona estas (escreve/procura cada uma):
   `pages_show_list`, `pages_read_engagement`, `pages_manage_posts`,
   `instagram_basic`, `instagram_content_publish`
5. Clica em **"Gerar Token de Acesso"** e aceita os pedidos que aparecerem.
6. Copia o token que aparece na caixa — isto é um texto comprido, começa
   normalmente por "EAA...". Esse é o teu **token temporário**.

⚠️ Este token expira ao fim de 1-2 horas. Para teres um que dure (recomendado
60 dias, renovável), faz isto:

7. Na mesma página, clica no ícone de informação (ⓘ) ao lado do token e depois
   em **"Abrir no Debugador de Tokens de Acesso"**.
8. Clica em **"Estender Token de Acesso"**. Isso dá-te um token válido por
   ~60 dias. Copia esse token novo — é esse que vais usar.
   (De 60 em 60 dias terás de repetir este Passo 4 e atualizar o segredo no
   GitHub — se quiseres, digo-te mais tarde como automatizar também essa
   renovação.)

## Passo 5 — Descobrir os números de identificação (IDs)

Ainda no Graph API Explorer, com a tua Página escolhida:

1. No campo da query (ao lado do botão "Submeter"), escreve `me?fields=id,name`
   e clica em Submeter. O número que aparece é o teu **FB_PAGE_ID**.
2. Agora escreve `me?fields=instagram_business_account` e Submeter. Vai
   aparecer um número dentro de `instagram_business_account` — é o teu
   **IG_USER_ID**.

## Passo 6 — Guardar tudo no GitHub (os "segredos")

1. Vai ao repositório no GitHub:
   https://github.com/lamancha-dev/lamancha-dev.github.io
2. Clica em **Settings** (separador do repositório, não da tua conta) →
   **Secrets and variables → Actions**.
3. Clica em **"New repository secret"** e cria estes 4, um de cada vez
   (nome exatamente como está, à esquerda; o valor que copiaste, à direita):

   | Nome do segredo         | Valor                                      |
   |--------------------------|---------------------------------------------|
   | `FB_PAGE_ID`             | o número do Passo 5.1                       |
   | `FB_PAGE_ACCESS_TOKEN`   | o token longo do Passo 4                    |
   | `IG_USER_ID`             | o número do Passo 5.2                       |
   | `IG_ACCESS_TOKEN`        | o mesmo token do Passo 4 (serve para ambos) |

## Passo 7 — Testar

1. No repositório, vai ao separador **Actions**.
2. Clica em **"Divulgar PAUTA automaticamente"** na lista à esquerda.
3. Clica em **"Run workflow"** (botão à direita) → **Run workflow** outra vez
   para confirmar.
4. Espera um minuto e atualiza a página — se ficar com um ✅ verde, publicou!
   Vai ver a página de Facebook e o Instagram para confirmar.
   Se ficar com um ❌ vermelho, clica para ver o erro e manda-mo que eu ajudo
   a resolver.

A partir daqui já não precisas de fazer mais nada — ele publica sozinho às
segundas, quartas e sextas, sempre o próximo post da lista.

## Como funciona depois de 31 de dezembro

Há duas listas de posts:

- `posts_promocao.json` — usada até **31 de dezembro de 2026**, com a oferta
  de lançamento (12,50€).
- `posts_evergreen.json` — a partir de **1 de janeiro de 2027**, o robô muda
  sozinho para esta lista (sem promoção), para a divulgação continuar depois
  da oferta terminar.

Cada lista tem o seu próprio "marcador" de onde vai (para não se perder o
lugar ao mudar de lista), e cada uma repete do início quando chega ao fim.
Quando a promoção acabar (ou quiseres lançar outra), diz-me e eu atualizo a
lista `posts_evergreen.json` ou crio uma nova promoção.

## Como editar os textos ou acrescentar testemunhos novos

Os posts estão nos ficheiros `divulgacao-pauta/posts_promocao.json` e
`divulgacao-pauta/posts_evergreen.json`. Diz-me o que queres mudar ou
acrescentar (um testemunho novo, uma promoção, etc.) e eu edito-o por ti —
não precisas de mexer em código.
