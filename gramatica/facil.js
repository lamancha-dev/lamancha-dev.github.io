/* Explicações simples e truques — um bloco por tema (chave = id do tema) */
const FACIL = {

"classes-palavras": {
  ideia: `As palavras são como os jogadores de uma equipa: <b>cada uma tem o seu trabalho</b>. O <b>nome</b> diz <i>o que é</i> ou <i>quem é</i>. O <b>verbo</b> diz <i>o que acontece</i>. O <b>adjetivo</b> diz <i>como é</i>. O <b>advérbio</b> diz <i>como, quando ou onde</i> acontece.`,
  truques: [
    ["🏷️","Nome","Consegues pôr <b>o / a / um / uma</b> antes? Então é nome.","o <u>livro</u> · a <u>alegria</u> · um <u>cardume</u>"],
    ["⏰","Verbo","Consegues pô-lo no <b>ontem, hoje e amanhã</b>? Então é verbo.","corro → corri → correrei"],
    ["🎨","Adjetivo","Muda quando o nome muda (masculino/feminino, singular/plural) e quase sempre aceita <b>muito</b> antes.","menino <u>alto</u> / menina <u>alta</u> · muito <u>alto</u>"],
    ["🧱","Advérbio","<b>Nunca muda</b>: não tem feminino nem plural. Responde a <i>como? quando? onde? quanto?</i> As palavras em <b>-mente</b> quase sempre são advérbios.","Chegou <u>ontem</u>. Fala <u>devagar</u>. <u>Felizmente</u>…"],
    ["👆","Determinante ou pronome?","Se está <b>colado a um nome</b>, é determinante. Se está <b>sozinho</b>, no lugar do nome, é pronome.","<u>Este</u> livro (det.) · Quero <u>este</u>. (pron.)"],
    ["🔗","Preposição ou conjunção?","A preposição liga <b>palavras</b> (de, em, para, com, por…). A conjunção liga <b>frases</b>: depois dela aparece quase sempre um <b>verbo</b>.","casa <u>de</u> pedra · Saí <u>porque</u> choveu."],
    ["🕵️","O «que» traiçoeiro","Troca o «que» por <b>o qual / a qual</b>. Se resultar, é <b>pronome relativo</b>. Se não resultar, é <b>conjunção</b>.","O livro <u>que</u> li → o livro o qual li ✔ (pronome) · Espero <u>que</u> venhas → espero o qual venhas ✘ (conjunção)"]
  ]
},

"adjacencia-verbal": {
  ideia: `Os pronomes <b>o, a, lhe, me, te, se…</b> são como um gato: normalmente sentam-se <b>depois</b> do verbo (<i>Vi-o</i>). Mas há palavras-<b>íman</b> que os puxam para <b>antes</b> do verbo (<i>Não o vi</i>).`,
  truques: [
    ["🧲","Palavras-íman (pronome antes)","Negação (não, nunca, ninguém, nada), perguntas (quem, onde, como, porquê), certos advérbios (já, ainda, só, sempre, talvez, também, bem) e conjunções (que, se, quando, porque).","<u>Não</u> o vi. <u>Já</u> te disse. Sei <u>que</u> o fizeste."],
    ["✂️","Futuro e condicional: o pronome entra no meio","Parte o verbo em dois: o infinitivo + a terminação. O pronome fica no meio.","dar + ei → <u>dar-te-ei</u> · levar + ia → <u>levá-la-ia</u>"],
    ["➕","Verbo acaba em -r, -s ou -z","Essa letra cai e o pronome ganha um <b>L</b>.","comprar + o → <u>comprá-lo</u> · fiz + o → <u>fi-lo</u>"],
    ["👃","Verbo acaba em -m ou som nasal (-ão, -õe)","O pronome ganha um <b>N</b>.","dão + o → <u>dão-no</u> · põem + as → <u>põem-nas</u>"]
  ]
},

"funcoes-frase": {
  ideia: `Uma frase é como uma pequena história: o <b>sujeito</b> é a personagem (quem faz ou de quem se fala) e o <b>predicado</b> é tudo o que acontece com ela.`,
  truques: [
    ["❓","Encontrar o sujeito","Pergunta ao verbo <b>«quem é que…?»</b> e troca a resposta por <b>ele / ela / eles / elas</b>. Se o verbo continua certo, encontraste o sujeito.","<u>Os alunos</u> chegaram → <u>Eles</u> chegaram."],
    ["🙈","Sujeito escondido (nulo)","Não se vê, mas o verbo diz quem é → <b>subentendido</b>. É «alguém» que não se sabe quem → <b>indeterminado</b>. Ninguém faz nada (tempo, natureza, «haver») → <b>expletivo</b>.","Cheguei (eu) · Bateram à porta · Choveu"],
    ["📣","Vocativo","É <b>chamar alguém</b>, como gritar o nome. Está sempre separado por vírgula.","<u>Maria</u>, anda cá!"],
    ["💬","Modificador da frase","É a <b>opinião</b> de quem fala sobre a frase toda. Teste: «Não é felizmente que…» soa mal → é modificador da frase.","<u>Felizmente</u>, passei. <u>Sinceramente</u>, não sei."]
  ]
},

"funcoes-gv": {
  ideia: `O verbo é um <b>chefe com exigências</b>. Uns pedem <i>«o quê?»</i>, outros pedem <i>«a quem?»</i>, outros pedem uma <b>preposição agarrada</b>. O que o verbo exige é <b>complemento</b>. O que é só um extra é <b>modificador</b>.`,
  truques: [
    ["🎯","Complemento direto","Troca por <b>o / a / os / as</b>. Se funcionar, é CD.","Comi <u>a sopa</u> → Comi-<u>a</u>."],
    ["🎁","Complemento indireto","Troca por <b>lhe / lhes</b>. Se funcionar, é CI.","Dei o livro <u>ao Rui</u> → Dei-<u>lhe</u> o livro."],
    ["🤝","Complemento oblíquo (o amigo inseparável)","É o que vem <b>de mão dada com uma preposição que o verbo exige</b>: gostar <b>de</b>, precisar <b>de</b>, pensar <b>em</b>, morar <b>em</b>, ir <b>a</b>, concordar <b>com</b>. Se o tirares, a frase fica a coxear. Não troca por o/a nem por lhe.","Eu gosto <u>de chocolate</u>. → «Eu gosto.» De quê?! ✘"],
    ["✅","Truque dos 3 passos para o oblíquo","1. Tem preposição (ou é um «aqui/lá» de lugar)? 2. Não dá para trocar por o/a nem por lhe? 3. Se tirar, a frase fica incompleta? Três «sim» → <b>complemento oblíquo</b>.","Moro <u>em Faro</u> → «Moro.» Onde?! → oblíquo"],
    ["✂️","Oblíquo ou modificador? TIRA!","Tira a expressão. Se a frase fica <b>incompleta</b> → oblíquo. Se fica <b>bem</b> → é só um extra: <b>modificador do grupo verbal</b>.","Vou <u>a Lisboa</u> → «Vou.» ✘ oblíquo · Li <u>em Lisboa</u> → «Li.» ✔ modificador"],
    ["🌉","Predicativo do sujeito","Vem depois de um verbo-ponte (<b>ser, estar, parecer, ficar, continuar, tornar-se</b>) e diz <b>como é o sujeito</b>.","A Ana está <u>cansada</u>."],
    ["🏅","Predicativo do complemento direto","Diz <b>como é o CD</b>, com verbos como <b>achar, considerar, eleger, nomear</b>.","Acho <u>o filme</u> <u>chato</u> → o filme é chato."],
    ["👮","Agente da passiva","Na frase passiva, é o <b>«por quem?»</b>.","O ladrão foi preso <u>pela polícia</u>."]
  ]
},

"funcoes-nominal-adjetival": {
  ideia: `Dentro de um grupo de palavras, o <b>nome é o rei</b> e tem <b>ajudantes</b>. Uns escolhem <i>qual é</i> (restritivo), outros só contam <i>uma curiosidade</i> (apositivo), outros são <i>pedidos pelo próprio nome</i> (complemento).`,
  truques: [
    ["📏","Restritivo ou apositivo? Olha para as vírgulas!","<b>Sem vírgulas</b>: escolhe qual → restritivo. <b>Com vírgulas</b>: é informação extra que podes tirar → apositivo.","As rosas <u>amarelas</u> são raras. · Lisboa<u>, a capital,</u> é linda."],
    ["🔁","Complemento do nome: o teste do «que é»","Tenta pôr <b>«que é»</b> antes. Se fica bem → modificador. Se fica estranho → complemento do nome.","o livro azul → o livro que é azul ✔ · a cidade de Lagos → a cidade que é de Lagos ✘ (complemento)"],
    ["🔄","Nome que vem de um verbo","Se o nome vem de um verbo e o «de…» era o que o verbo pedia, é complemento do nome.","destruir <u>a cidade</u> → a destruição <u>da cidade</u>"],
    ["🧩","Complemento do adjetivo / do advérbio","O adjetivo ou o advérbio <b>pede uma preposição</b> para ficar completo.","capaz <u>de tudo</u> · fiel <u>ao amigo</u> · longe <u>de casa</u>"]
  ]
},

"frase-complexa": {
  ideia: `<b>Conta os verbos</b>: cada verbo conjugado é uma <b>oração</b>, como as carruagens de um comboio. Nas <b>coordenadas</b>, cada carruagem anda sozinha. Na <b>subordinada</b>, a carruagem só anda presa à principal.`,
  truques: [
    ["🚃","Coordenada ou subordinada?","Corta a frase no conector. Se as duas partes fazem sentido sozinhas → <b>coordenada</b>. Se uma fica pendurada → <b>subordinada</b>.","Estudei, <u>mas não passei</u> ✔ · «Porque estava a chover.» ✘ pendurada"],
    ["↔️","Muda de lugar?","As subordinadas adverbiais quase sempre podem ir para o início da frase. As coordenadas não podem.","Telefono <u>quando chegar</u> → <u>Quando chegar</u>, telefono."],
    ["🧲","«Que» com nome antes = relativa","Se antes do «que» há um <b>nome</b> e o «que» se troca por «o qual», é <b>relativa</b> (adjetiva).","O livro <u>que li</u> (o qual li)"],
    ["🗣️","«Que» depois de dizer/pensar/querer = completiva","Se vem depois de um verbo como <b>dizer, achar, querer, saber</b>, troca a oração por <b>«isso»</b>. Se funcionar → <b>completiva</b>.","Disse <u>que vinha</u> → Disse <u>isso</u>."],
    ["🎯","Causal, final ou consecutiva?","<b>Causal</b> responde a «porquê?» (porque, como, visto que). <b>Final</b> responde a «para quê?» (para, para que). <b>Consecutiva</b> mostra o resultado, quase sempre com <b>tão/tanto… que</b>.","Saí <u>porque tinha fome</u> · Estudo <u>para passar</u> · Comi <u>tanto que rebentei</u>"],
    ["🛡️","Concessiva","Diz algo que <b>devia impedir, mas não impede</b>: embora, ainda que, mesmo que, apesar de.","<u>Embora chovesse</u>, fui à praia."]
  ]
},

"processos-fonologicos": {
  ideia: `As palavras vieram do latim e foram <b>mudando de forma</b>, como uma pessoa que cresce. Pelo caminho, umas <b>ganharam</b> sons, outras <b>perderam</b> sons e outras <b>trocaram</b> sons.`,
  truques: [
    ["1️⃣","Primeiro decide: ganhou, perdeu ou trocou?","Compara as duas formas letra a letra. Só depois vês <b>onde</b> foi a mudança: no início, no meio ou no fim.","ANTE → antes: ganhou um -s no fim"],
    ["➕","Ganhou um som","<b>Pró</b>tese = à frente (pró = antes) · <b>Epên</b>tese = no meio · <b>Para</b>goge = no fim.","SPIRITU → <u>e</u>spírito · ANTE → ante<u>s</u>"],
    ["➖","Perdeu um som","<b>Afé</b>rese = no início · <b>Sín</b>cope = no meio · <b>Apó</b>cope = no fim (apó = após).","EPISCOPU → bispo · ROSAM → rosa"],
    ["🔀","Trocou de lugar","Um som mudou de sítio dentro da palavra → <b>metátese</b>.","SEMP<u>ER</u> → semp<u>re</u>"],
    ["🗣️","Ficou «mais forte»","Uma consoante surda passou a sonora (p→b, t→d, c→g) → <b>sonorização</b>. Põe a mão na garganta: o b, o d e o g vibram!","LUPU → lo<u>b</u>o · FOCU → fo<u>g</u>o"],
    ["🔗","Vogais que se juntam","Duas vogais iguais viram uma → <b>crase</b>. Duas vogais viram um ditongo → <b>sinérese</b>. Aparecem <b>lh</b> ou <b>nh</b> → <b>palatalização</b>.","leer → ler · lee → lei · FILIU → fi<u>lh</u>o"]
  ]
},

"formacao-palavras": {
  ideia: `Formar palavras é como brincar com <b>Lego</b>: juntas peças a uma palavra-base. Ou pões peças antes e depois (derivação), ou juntas duas palavras inteiras (composição).`,
  truques: [
    ["🧱","Tira as peças","Se tirares a peça da frente (in-, des-, re-) e ainda há palavra → <b>prefixação</b>. Se tirares a peça de trás (-mente, -ção, -eiro) → <b>sufixação</b>.","<u>in</u>feliz · feliz<u>mente</u>"],
    ["🔒","Parassíntese: as duas peças vieram juntas","Se tirares <b>só</b> o prefixo <b>ou só</b> o sufixo, a palavra deixa de existir.","<u>en</u>trist<u>ecer</u>: *entriste ✘ · *tristecer ✘"],
    ["👯","Composição","Duas palavras com hífen, cada uma vive sozinha → <b>morfossintática</b>. Duas raízes que não vivem sozinhas → <b>morfológica</b>.","guarda-chuva · agricultura (agri + cultura)"],
    ["🎭","Conversão","A palavra <b>não muda nada</b>, só muda de trabalho (de classe).","Vamos <u>jantar</u> (verbo) · O <u>jantar</u> (nome)"],
    ["✂️","Derivação não afixal","O verbo perde a terminação e vira nome. O nome é <b>mais curto</b> do que o verbo.","abraçar → abraço · trocar → troca"],
    ["🔤","Sigla ou acrónimo?","Lês <b>letra a letra</b> → sigla. Lês <b>como uma palavra</b> → acrónimo.","P-S-P (sigla) · ONU, NATO (acrónimos)"],
    ["🥪","Amálgama e truncação","<b>Amálgama</b>: duas palavras espremidas numa. <b>Truncação</b>: palavra cortada.","português + espanhol → portunhol · fotografia → foto"]
  ]
},

"atos-ilocutorios": {
  ideia: `Quando falamos, <b>fazemos coisas com as palavras</b>: informamos, mandamos, prometemos, mostramos sentimentos ou até mudamos a realidade.`,
  truques: [
    ["📰","Assertivo","Dá para responder <b>«é verdade»</b> ou <b>«é mentira»</b>.","A Terra é redonda."],
    ["👉","Diretivo","Quer pôr <b>o outro</b> a fazer algo: pedir, mandar, aconselhar, perguntar.","Fecha a porta. Podes ajudar-me?"],
    ["🤞","Compromissivo","Quem se compromete é <b>quem fala</b>, para o futuro: prometer, jurar, ameaçar.","Prometo que estudo."],
    ["❤️","Expressivo","Mostra <b>sentimentos</b>: agradecer, pedir desculpa, dar os parabéns, lamentar.","Obrigada! Lamento muito."],
    ["⚖️","Declarativo","Ao dizer, a realidade <b>muda logo</b>, e só quem tem autoridade o pode dizer.","Declaro aberta a sessão."],
    ["🔑","Truque final: quem age a seguir?","<b>O outro</b> → diretivo. <b>Eu</b> → compromissivo. <b>Já mudou ao dizer</b> → declarativo.",""]
  ]
},

"modalidade-deixis": {
  ideia: `<b>Modalidade</b> é a «cara» de quem fala: tem a certeza? Acha provável? Está a obrigar? A autorizar? Gosta ou não gosta? <b>Dêixis</b> são as palavras que só percebes se souberes <b>quem</b> fala, <b>onde</b> e <b>quando</b>.`,
  truques: [
    ["🧠","Epistémica = saber","Certeza ou dúvida: <b>talvez, provavelmente, certamente, acho que, deve ser</b>.","<u>Talvez</u> chova amanhã."],
    ["📜","Deôntica = regras","Obrigação ou permissão: <b>tens de, é proibido, podes sair, é obrigatório</b>.","<u>Tens de</u> entregar o trabalho."],
    ["⚠️","«Dever» e «poder» são traiçoeiros","Troca por «é provável que». Se fizer sentido → <b>epistémica</b>. Troca por «é obrigatório/é permitido». Se fizer sentido → <b>deôntica</b>.","Deve estar a chover (provável) · Deves estudar (obrigação)"],
    ["😍","Apreciativa = gosto","Opinião positiva ou negativa: <b>felizmente, infelizmente</b>, adjetivos de opinião.","O filme é <u>fantástico</u>."],
    ["📍","Dêixis: o bilhete no chão","Imagina um papel no chão: «<u>Eu</u> estou <u>aqui hoje</u>». Quem? Onde? Quando? Não sabes! Essas palavras são <b>deíticos</b>: pessoal (eu, tu, meu), espacial (aqui, ali, este) e temporal (hoje, ontem, agora).",""]
  ]
},

"coerencia-coesao": {
  ideia: `<b>Coerência</b> é o texto fazer sentido e não se contradizer. <b>Coesão</b> é a «cola» entre as frases: palavras que ligam e retomam o que já foi dito.`,
  truques: [
    ["🎩","Hiperónimo (a palavra-chapéu)","Pergunta: «Um X é um tipo de Y?». Se sim, Y é o <b>hiperónimo</b> (mais geral) e X o <b>hipónimo</b> (mais específico).","Um cão é um tipo de <u>animal</u> → animal = hiperónimo"],
    ["🚗","Holónimo e merónimo (o todo e a parte)","Pergunta: «X é uma parte de Y?». X é o <b>merónimo</b> (a parte) e Y o <b>holónimo</b> (o todo).","A roda é parte do carro → roda = merónimo, carro = holónimo"],
    ["⬅️","Anáfora","A palavra <b>aponta para trás</b>, para algo que já foi dito.","O Pedro chegou. <u>Ele</u> estava cansado."],
    ["➡️","Catáfora","A palavra <b>aponta para a frente</b>: faz suspense, só depois sabes quem é.","<u>Ele</u> chegou tarde: o Pedro nunca muda."],
    ["👻","Elipse","A palavra <b>desaparece</b>, mas percebes na mesma.","O João chegou e [—] sentou-se."],
    ["🔗","Conectores = coesão interfrásica","mas, porque, portanto, além disso, no entanto… ligam frases e parágrafos.",""]
  ]
},

"valor-aspetual": {
  ideia: `O aspeto <b>não é «quando»</b> (isso é o tempo verbal). É <b>«como»</b> a ação acontece: acabou? Ainda está a decorrer? Repete-se? É sempre assim?`,
  truques: [
    ["🏁","Acabou, ponto final","<b>Perfetivo</b>: a ação está concluída (pretérito perfeito simples).","Ontem <u>li</u> o livro."],
    ["⏳","Está a decorrer","<b>Imperfetivo</b>: não se vê o fim da ação.","Eu <u>lia</u> quando tocou o telefone. <u>Estou a estudar</u>."],
    ["📅","É um hábito","<b>Habitual</b>. Truque: cabe «costumar»?","Ele <u>lê</u> à noite → Ele costuma ler à noite."],
    ["🔁","Repete-se num período, sem ser hábito","<b>Iterativo</b>. Muito comum com <b>tenho feito</b> e <b>andar a</b>.","<u>Tenho ido</u> ao ginásio. <u>Anda a bater</u> à porta."],
    ["🌍","É sempre verdade","<b>Genérico</b>: verdades gerais, ciência, provérbios. Truque: cabe «em geral»?","Os gatos miam. A água ferve a 100 °C."]
  ]
}

};
