/* Exercícios adicionais (estilo exame) — acrescentados ao fim de cada tema.
   Formato curto: mc(enunciado, [opções], índice da certa, critério) · sh(enunciado, [respostas aceites], critério) */
function mc(enun, opcoes, certa, criterio){ return {tipo:"mc", enun, opcoes, certa, criterio}; }
function sh(enun, resposta, criterio){ return {tipo:"short", enun, resposta, criterio}; }

const MAIS = {

"classes-palavras": [
  mc(`Em «Os alunos estudaram <u>muito</u>», a palavra sublinhada é:`, ["Advérbio de quantidade e grau","Quantificador","Adjetivo","Determinante indefinido"], 0,
     `Modifica o verbo «estudaram» e não varia — advérbio de quantidade e grau.`),
  mc(`Em «Comprei <u>muitos</u> livros», a palavra sublinhada é:`, ["Advérbio","Quantificador existencial","Adjetivo","Pronome indefinido"], 1,
     `Indica uma quantidade e acompanha o nome «livros», variando com ele — quantificador existencial.`),
  mc(`Em «<u>Este</u> caderno é meu», a palavra sublinhada é:`, ["Pronome demonstrativo","Determinante demonstrativo","Advérbio de lugar","Quantificador"], 1,
     `Está colada ao nome «caderno» e determina-o — determinante demonstrativo. Se estivesse sozinha («Quero este»), seria pronome.`),
  mc(`Em «Ofereci-<u>lhe</u> flores», a palavra sublinhada é:`, ["Determinante","Pronome pessoal","Conjunção","Preposição"], 1,
     `Substitui a pessoa a quem se oferece — pronome pessoal (forma átona).`),
  mc(`Em «Ela <u>deve</u> chegar cedo», «deve» é:`, ["Verbo principal","Auxiliar temporal","Auxiliar modal","Auxiliar da passiva"], 2,
     `«Dever» + infinitivo exprime probabilidade/obrigação — auxiliar modal.`),
  mc(`Em «A Rita <u>estava</u> a ler», «estava» é:`, ["Auxiliar de aspeto","Verbo copulativo","Auxiliar temporal","Auxiliar modal"], 0,
     `«Estar a» + infinitivo mostra a ação a decorrer — auxiliar de aspeto.`),
  mc(`Em «O João <u>parece</u> cansado», «parece» é:`, ["Verbo transitivo direto","Verbo copulativo","Auxiliar modal","Verbo intransitivo"], 1,
     `Liga o sujeito a uma característica sua (cansado = predicativo do sujeito) — verbo copulativo.`),
  mc(`Em «<u>Embora</u> chova, vou sair», a palavra sublinhada é:`, ["Preposição","Advérbio","Conjunção subordinativa concessiva","Conjunção coordenativa adversativa"], 2,
     `Introduz uma oração que não vive sozinha e exprime concessão — conjunção subordinativa concessiva.`),
  mc(`Em «O autor <u>cujo</u> livro li é português», a palavra sublinhada é:`, ["Pronome relativo","Determinante relativo","Conjunção","Advérbio relativo"], 1,
     `«Cujo» acompanha o nome «livro» e concorda com ele — determinante relativo.`),
  mc(`Em «<u>Oxalá</u> faça sol amanhã!», a palavra sublinhada é:`, ["Advérbio","Conjunção","Interjeição","Verbo"], 2,
     `Exprime um desejo de forma afetiva e não depende de outra palavra — interjeição.`),
  sh(`Classifique a palavra sublinhada: «A casa <u>onde</u> nasci é antiga.»`, ["advérbio relativo"],
     `«Onde» retoma «casa» e indica lugar dentro da oração relativa — advérbio relativo.`)
],

"adjacencia-verbal": [
  mc(`Substitua «o livro» por um pronome: «Ele não leu o livro.»`, ["Ele não leu-o.","Ele não o leu.","Ele não leu-lo.","Ele o não leu."], 1,
     `A negação «não» atrai o pronome para antes do verbo — próclise.`),
  mc(`Substitua «as flores» por um pronome: «Vamos comprar as flores.»`, ["Vamos comprar-as.","Vamos comprá-las.","Vamos as comprar.","Vamos comprar-las."], 1,
     `Verbo terminado em -r: o -r cai e o pronome ganha L → comprá-las.`),
  mc(`Substitua «os trabalhos» por um pronome: «Eles fazem os trabalhos.»`, ["Eles fazem-os.","Eles os fazem.","Eles fazem-nos.","Eles fazem-lhes."], 2,
     `Verbo terminado em -m: o pronome ganha N → fazem-nos.`),
  mc(`Substitua «o bolo» por um pronome: «Eu compraria o bolo.»`, ["Eu compraria-o.","Eu comprá-lo-ia.","Eu o compraria-o.","Eu comprar-o-ia."], 1,
     `Condicional: mesóclise. comprar + ia → o -r cai e o pronome ganha L → comprá-lo-ia.`),
  mc(`Qual é a frase correta?`, ["Já disse-te.","Já te disse.","Te já disse.","Já te disse-te."], 1,
     `O advérbio «já» atrai o pronome para antes do verbo — próclise.`),
  mc(`Em «Espero que <u>me</u> ligues», a próclise justifica-se por:`, ["Haver uma negação","Estar numa oração subordinada","O verbo estar no futuro","Haver um advérbio"], 1,
     `Nas orações subordinadas (introduzidas por «que», «se», «quando»…), o pronome fica antes do verbo.`),
  mc(`Substitua o complemento indireto por um pronome: «Dei o livro à Ana.»`, ["Dei-a o livro.","Dei-lhe o livro.","Lhe dei o livro.","Dei-o à Ana."], 1,
     `«À Ana» responde a «a quem?» e substitui-se por «lhe», depois do verbo (ênclise).`),
  sh(`Reescreva, substituindo «os testes» por um pronome: «Os alunos entregarão os testes amanhã.»`, ["entregá-los-ão"],
     `Futuro: mesóclise. entregar + ão → entregá-los-ão.`)
],

"funcoes-frase": [
  mc(`Em «Os meus primos e a Rita chegaram ontem», o sujeito é:`, ["Simples","Composto","Nulo subentendido","Nulo indeterminado"], 1,
     `Tem dois núcleos («primos» e «Rita») ligados por «e» — sujeito composto.`),
  mc(`Em «Chegámos tarde.», o sujeito é:`, ["Nulo subentendido","Nulo indeterminado","Nulo expletivo","Composto"], 0,
     `Não está escrito, mas a forma verbal mostra que é «nós» — sujeito nulo subentendido.`),
  mc(`Em «Há muitos alunos na sala.», o sujeito é:`, ["Simples («muitos alunos»)","Nulo subentendido","Nulo expletivo","Nulo indeterminado"], 2,
     `«Haver» com o sentido de existir é impessoal: não tem sujeito — nulo expletivo. «Muitos alunos» é complemento direto.`),
  mc(`Em «Telefonaram-te há bocado.», o sujeito é:`, ["Nulo subentendido","Nulo indeterminado","Nulo expletivo","Simples"], 1,
     `Alguém telefonou, mas não se sabe quem — sujeito nulo indeterminado.`),
  mc(`Em «<u>Professora</u>, posso sair?», a expressão sublinhada é:`, ["Sujeito","Vocativo","Modificador da frase","Complemento direto"], 1,
     `Serve para chamar a pessoa a quem se fala e está isolada por vírgula — vocativo.`),
  mc(`Em «<u>Provavelmente</u>, o exame será fácil.», a palavra sublinhada é:`, ["Modificador do grupo verbal","Modificador da frase","Predicativo do sujeito","Complemento oblíquo"], 1,
     `Exprime a avaliação de quem fala sobre a frase inteira e não pode ser focado com «é… que» — modificador da frase.`),
  mc(`Em «Quem estuda passa.», o sujeito de «passa» é:`, ["«Quem estuda» (oração subordinada substantiva relativa)","Sujeito nulo subentendido","Apenas «Quem»","A frase não tem sujeito"], 0,
     `A oração «Quem estuda» desempenha a função de sujeito de «passa».`),
  sh(`Identifique o sujeito: «Agradou-me muito o teu presente.»`, ["o teu presente"],
     `Pergunta: o que é que me agradou? «O teu presente» (sujeito posposto ao verbo).`)
],

"funcoes-gv": [
  mc(`Em «Gosto <u>de música clássica</u>», a expressão sublinhada é:`, ["Complemento direto","Complemento indireto","Complemento oblíquo","Modificador do grupo verbal"], 2,
     `É exigida pelo verbo «gostar (de)», não se substitui por o/a nem por lhe e não pode ser retirada — complemento oblíquo.`),
  mc(`Em «Moro <u>em Lagos</u>», a expressão sublinhada é:`, ["Modificador do grupo verbal","Complemento oblíquo","Complemento indireto","Predicativo do sujeito"], 1,
     `«Morar» exige a indicação do lugar: «Moro.» fica incompleta — complemento oblíquo.`),
  mc(`Em «Estudei <u>em Lagos</u> durante três anos», a expressão sublinhada é:`, ["Complemento oblíquo","Modificador do grupo verbal","Complemento indireto","Complemento do nome"], 1,
     `«Estudar» não exige lugar: «Estudei durante três anos» continua completa — modificador do grupo verbal.`),
  mc(`Em «A Inês parece <u>nervosa</u>», a palavra sublinhada é:`, ["Complemento direto","Predicativo do sujeito","Modificador do nome","Predicativo do complemento direto"], 1,
     `Depois do verbo copulativo «parecer», atribui uma propriedade ao sujeito — predicativo do sujeito.`),
  mc(`Em «Elegeram a Ana <u>delegada de turma</u>», a expressão sublinhada é:`, ["Predicativo do sujeito","Predicativo do complemento direto","Complemento direto","Complemento oblíquo"], 1,
     `Atribui uma propriedade ao complemento direto «a Ana», com o verbo «eleger» — predicativo do complemento direto.`),
  mc(`Em «O bolo foi feito <u>pela avó</u>», a expressão sublinhada é:`, ["Complemento oblíquo","Complemento agente da passiva","Modificador do grupo verbal","Complemento indireto"], 1,
     `Frase passiva: responde a «por quem foi feito?» — complemento agente da passiva.`),
  mc(`Em «Pedi <u>ajuda</u> ao professor», a palavra sublinhada é:`, ["Complemento direto","Complemento indireto","Complemento oblíquo","Sujeito"], 0,
     `Substitui-se por «a»: «Pedi-a ao professor» — complemento direto.`),
  mc(`Em «Telefonei <u>à minha mãe</u>», a expressão sublinhada é:`, ["Complemento direto","Complemento indireto","Complemento oblíquo","Modificador"], 1,
     `Substitui-se por «lhe»: «Telefonei-lhe» — complemento indireto.`),
  mc(`Em «Preciso <u>de ti</u>», a expressão sublinhada é:`, ["Complemento indireto","Complemento oblíquo","Complemento direto","Modificador do grupo verbal"], 1,
     `Exigida pelo verbo «precisar (de)», não se troca por o/a nem lhe — complemento oblíquo.`),
  sh(`Indique a função sintática de «na biblioteca» em: «Li um poema de Pessoa na biblioteca.»`, ["modificador do grupo verbal","modificador do gv"],
     `Pode ser retirada («Li um poema de Pessoa») e focada com «Foi na biblioteca que li…» — modificador do grupo verbal.`)
],

"funcoes-nominal-adjetival": [
  mc(`Em «Lisboa, <u>capital de Portugal</u>, é muito visitada», a expressão sublinhada é:`, ["Modificador restritivo do nome","Modificador apositivo do nome","Complemento do nome","Predicativo do sujeito"], 1,
     `Entre vírgulas, acrescenta informação que pode ser retirada — modificador apositivo do nome.`),
  mc(`Em «Tenho medo <u>de aranhas</u>», a expressão sublinhada é:`, ["Modificador restritivo do nome","Complemento do nome","Complemento oblíquo","Complemento do adjetivo"], 1,
     `É pedida pelo nome «medo» (medo de quê?) — complemento do nome.`),
  mc(`Em «O carro <u>vermelho</u> é do meu pai», a palavra sublinhada é:`, ["Modificador restritivo do nome","Modificador apositivo do nome","Predicativo do sujeito","Complemento do nome"], 0,
     `Sem vírgulas, distingue este carro dos outros — modificador restritivo do nome.`),
  mc(`Em «Ele é fiel <u>aos amigos</u>», a expressão sublinhada é:`, ["Complemento indireto","Complemento do adjetivo","Complemento do nome","Complemento oblíquo"], 1,
     `Completa o adjetivo «fiel» (fiel a quem?) — complemento do adjetivo.`),
  mc(`Em «A escola fica perto <u>da praia</u>», a expressão sublinhada é:`, ["Complemento do advérbio","Complemento do nome","Complemento oblíquo","Modificador do grupo verbal"], 0,
     `Completa o advérbio «perto» (perto de quê?) — complemento do advérbio.`),
  mc(`Em «A destruição <u>da ponte</u> foi inesperada», a expressão sublinhada é:`, ["Modificador restritivo do nome","Complemento do nome","Complemento agente da passiva","Modificador apositivo do nome"], 1,
     `«Destruição» vem de «destruir»; «da ponte» era o que o verbo pedia (destruir a ponte) — complemento do nome.`),
  mc(`Em «O aluno <u>que chegou atrasado</u> pediu desculpa», a oração sublinhada desempenha a função de:`, ["Modificador restritivo do nome","Modificador apositivo do nome","Complemento do nome","Sujeito"], 0,
     `Oração relativa restritiva (sem vírgulas): identifica qual aluno — modificador restritivo do nome.`),
  sh(`Indique a função de «o maior poeta português» em: «Camões, o maior poeta português, escreveu Os Lusíadas.»`, ["apositivo"],
     `Entre vírgulas, dá informação acessória sobre «Camões» — modificador apositivo do nome.`)
],

"frase-complexa": [
  mc(`Classifique a oração sublinhada: «<u>Se estudares</u>, passas.»`, ["Subordinada adverbial condicional","Subordinada adverbial temporal","Coordenada copulativa","Subordinada substantiva completiva"], 0,
     `Apresenta a condição para que a outra se realize — subordinada adverbial condicional.`),
  mc(`Classifique a oração sublinhada: «<u>Embora estivesse cansado</u>, foi treinar.»`, ["Subordinada adverbial causal","Subordinada adverbial concessiva","Coordenada adversativa","Subordinada adverbial consecutiva"], 1,
     `Apresenta um obstáculo que não impede a ação principal — subordinada adverbial concessiva.`),
  mc(`Classifique a oração sublinhada: «Saí cedo <u>para apanhar o comboio</u>.»`, ["Subordinada adverbial final","Subordinada adverbial causal","Subordinada adverbial consecutiva","Coordenada explicativa"], 0,
     `Indica a finalidade (para quê?) — subordinada adverbial final.`),
  mc(`Classifique a oração sublinhada: «<u>Quando cheguei</u>, já tinham jantado.»`, ["Subordinada adverbial temporal","Subordinada adverbial condicional","Subordinada adjetiva relativa","Coordenada copulativa"], 0,
     `Situa a ação no tempo — subordinada adverbial temporal.`),
  mc(`Classifique a oração sublinhada: «Ela estudou muito, <u>mas não passou</u>.»`, ["Subordinada adverbial concessiva","Coordenada adversativa","Coordenada conclusiva","Subordinada adverbial causal"], 1,
     `Introduzida por «mas», exprime contraste e faz sentido sozinha — coordenada adversativa.`),
  mc(`Classifique a oração sublinhada: «Acho <u>que vai chover</u>.»`, ["Subordinada adjetiva relativa restritiva","Subordinada substantiva completiva","Subordinada adverbial causal","Coordenada explicativa"], 1,
     `Completa o verbo «achar» e substitui-se por «isso» (Acho isso) — subordinada substantiva completiva.`),
  mc(`Classifique a oração sublinhada: «A Ana, <u>que é minha vizinha</u>, é médica.»`, ["Subordinada adjetiva relativa restritiva","Subordinada adjetiva relativa explicativa","Subordinada substantiva completiva","Coordenada explicativa"], 1,
     `Entre vírgulas, acrescenta informação acessória sobre «a Ana» — relativa explicativa.`),
  mc(`Classifique a oração sublinhada: «<u>Ou estudas</u>, ou vais trabalhar.»`, ["Coordenada copulativa","Coordenada disjuntiva","Coordenada adversativa","Subordinada adverbial condicional"], 1,
     `«Ou… ou» apresenta alternativas — coordenada disjuntiva.`),
  mc(`Classifique a oração sublinhada: «Ele correu tanto <u>que ficou exausto</u>.»`, ["Subordinada adverbial causal","Subordinada adverbial consecutiva","Subordinada substantiva completiva","Subordinada adverbial final"], 1,
     `«Tanto… que» introduz a consequência — subordinada adverbial consecutiva.`),
  mc(`Quantas orações tem a frase «Disse-me que viria quando pudesse»?`, ["Uma","Duas","Três","Quatro"], 2,
     `Há três formas verbais (disse, viria, pudesse), logo três orações.`),
  mc(`Classifique a oração sublinhada: «Penso, <u>logo existo</u>.»`, ["Coordenada explicativa","Coordenada conclusiva","Subordinada adverbial consecutiva","Coordenada copulativa"], 1,
     `«Logo» introduz uma conclusão — coordenada conclusiva.`),
  sh(`Classifique a oração sublinhada: «Faltou <u>porque estava doente</u>.»`, ["subordinada adverbial causal","adverbial causal"],
     `Indica a causa (porquê?) — subordinada adverbial causal.`)
],

"processos-fonologicos": [
  mc(`SPIRITU- &gt; espírito é um exemplo de:`, ["Prótese","Epêntese","Paragoge","Aférese"], 0, `Acrescentou-se um som no início da palavra (e-) — prótese.`),
  mc(`ROSAM &gt; rosa é um exemplo de:`, ["Síncope","Apócope","Aférese","Crase"], 1, `Caiu um som no fim da palavra (-m) — apócope.`),
  mc(`EPISCOPU- &gt; bispo é um exemplo, no início da palavra, de:`, ["Prótese","Aférese","Apócope","Metátese"], 1, `Caiu o som inicial (e-) — aférese.`),
  mc(`RIVU- &gt; rio é um exemplo de:`, ["Síncope","Apócope","Epêntese","Vocalização"], 0, `Caiu um som no meio da palavra (-v-) — síncope.`),
  mc(`FILIU- &gt; filho é um exemplo de:`, ["Assimilação","Palatalização","Sonorização","Dissimilação"], 1, `Surgiu o som palatal «lh» — palatalização.`),
  mc(`ACTU- &gt; auto é um exemplo de:`, ["Vocalização","Sonorização","Síncope","Metátese"], 0, `A consoante «c» transformou-se na vogal «u» — vocalização.`),
  mc(`PERSONA- &gt; pessoa é um exemplo de:`, ["Dissimilação","Assimilação","Metátese","Crase"], 1, `O «r» tornou-se igual ao «s» vizinho (rs > ss) — assimilação.`),
  mc(`LILIU- &gt; lírio é um exemplo de:`, ["Assimilação","Dissimilação","Palatalização","Paragoge"], 1, `Um dos «l» tornou-se diferente do vizinho (l > r) — dissimilação.`),
  mc(`lee &gt; lei é um exemplo de:`, ["Crase","Sinérese","Síncope","Epêntese"], 1, `Duas vogais juntaram-se num ditongo — sinérese.`),
  mc(`leer &gt; ler é um exemplo de:`, ["Crase","Sinérese","Apócope","Aférese"], 0, `Duas vogais iguais fundiram-se numa só — crase.`),
  sh(`Que processo fonológico explica ANTE &gt; antes?`, ["paragoge"], `Acrescentou-se um som no fim da palavra (-s) — paragoge.`)
],

"formacao-palavras": [
  mc(`A palavra «felizmente» formou-se por:`, ["Prefixação","Sufixação","Parassíntese","Composição"], 1, `feliz + -mente (sufixo) — derivação por sufixação.`),
  mc(`A palavra «infelizmente» formou-se por:`, ["Parassíntese","Prefixação e sufixação","Composição morfológica","Sufixação"], 1,
     `Existe «infeliz» e existe «felizmente»: os afixos não entraram ao mesmo tempo — prefixação e sufixação.`),
  mc(`A palavra «entristecer» formou-se por:`, ["Prefixação e sufixação","Parassíntese","Sufixação","Derivação não afixal"], 1,
     `Não existe «entriste» nem «tristecer»: prefixo e sufixo juntaram-se ao mesmo tempo — parassíntese.`),
  mc(`A palavra «guarda-chuva» formou-se por:`, ["Composição morfológica","Composição morfossintática","Amálgama","Prefixação"], 1, `Duas palavras que existem sozinhas, ligadas por hífen — composição morfossintática.`),
  mc(`A palavra «agricultura» formou-se por:`, ["Composição morfológica","Composição morfossintática","Sufixação","Amálgama"], 0, `Junção de radicais (agri + cultura) — composição morfológica.`),
  mc(`«PSP» é um exemplo de:`, ["Acrónimo","Sigla","Truncação","Amálgama"], 1, `Lê-se letra a letra — sigla.`),
  mc(`«foto» (de «fotografia») é um exemplo de:`, ["Truncação","Sigla","Derivação não afixal","Extensão semântica"], 0, `A palavra foi cortada — truncação.`),
  mc(`«abraço» (de «abraçar») é um exemplo de:`, ["Sufixação","Conversão","Derivação não afixal","Truncação"], 2, `Nome formado a partir do verbo, sem acrescentar afixos — derivação não afixal.`),
  mc(`«portunhol» (português + espanhol) é um exemplo de:`, ["Composição morfossintática","Amálgama","Acrónimo","Empréstimo"], 1, `Duas palavras fundidas numa, cada uma perdendo uma parte — amálgama.`),
  mc(`«rato» (o do computador) é um exemplo de:`, ["Empréstimo","Extensão semântica","Conversão","Onomatopeia"], 1, `A mesma palavra ganhou um novo significado — extensão semântica.`),
  mc(`«futebol» (do inglês «football») é um exemplo de:`, ["Empréstimo","Composição","Truncação","Amálgama"], 0, `Palavra vinda de outra língua e adaptada — empréstimo.`),
  sh(`Que processo de formação deu origem a «tic-tac»?`, ["onomatopeia"], `Reproduz um som — onomatopeia.`)
],

"atos-ilocutorios": [
  mc(`«Fecha a janela, por favor.» é um ato ilocutório:`, ["Assertivo","Diretivo","Compromissivo","Expressivo"], 1, `Quer levar o outro a fazer algo (pedido) — diretivo.`),
  mc(`«Juro que não fui eu.» é um ato ilocutório:`, ["Compromissivo","Assertivo","Declarativo","Expressivo"], 0, `Quem fala compromete-se com a verdade do que diz através de um juramento — compromissivo.`),
  mc(`«Obrigada pela ajuda.» é um ato ilocutório:`, ["Diretivo","Assertivo","Expressivo","Compromissivo"], 2, `Exprime um sentimento (gratidão) — expressivo.`),
  mc(`«Lisboa é a capital de Portugal.» é um ato ilocutório:`, ["Assertivo","Declarativo","Diretivo","Expressivo"], 0, `Afirma algo que pode ser verdadeiro ou falso — assertivo.`),
  mc(`«Declaro aberta a sessão.», dito pelo presidente da assembleia, é um ato ilocutório:`, ["Assertivo","Declarativo","Compromissivo","Diretivo"], 1, `Cria uma nova realidade, dito por quem tem autoridade — declarativo.`),
  mc(`«Aconselho-te a descansar.» é um ato ilocutório:`, ["Compromissivo","Expressivo","Diretivo","Assertivo"], 2, `Pretende influenciar o comportamento do outro (conselho) — diretivo.`),
  mc(`«Se voltares a fazer isso, castigo-te.» é um ato ilocutório:`, ["Diretivo","Compromissivo","Expressivo","Declarativo"], 1, `Quem fala compromete-se com uma ação futura (ameaça) — compromissivo.`),
  mc(`«Parabéns pelo teu aniversário!» é um ato ilocutório:`, ["Expressivo","Assertivo","Diretivo","Declarativo"], 0, `Exprime um sentimento (felicitação) — expressivo.`),
  sh(`Classifique o ato ilocutório: «Que horas são?»`, ["diretivo"], `Uma pergunta pede ao outro que responda — diretivo.`)
],

"modalidade-deixis": [
  mc(`Em «Deve estar a chover lá fora», o valor modal é:`, ["Deôntico de obrigação","Epistémico de probabilidade","Apreciativo","Epistémico de certeza"], 1,
     `«Deve estar» = é provável que esteja — epistémico de probabilidade.`),
  mc(`Em «Deves pedir desculpa», o valor modal é:`, ["Deôntico de obrigação","Epistémico de probabilidade","Deôntico de permissão","Apreciativo"], 0,
     `Exprime um dever — deôntico de obrigação.`),
  mc(`Em «Podes usar o dicionário no teste», o valor modal é:`, ["Epistémico de probabilidade","Deôntico de permissão","Deôntico de obrigação","Apreciativo"], 1,
     `Autoriza alguém a fazer algo — deôntico de permissão.`),
  mc(`Em «Infelizmente, perdemos o jogo», o valor modal é:`, ["Apreciativo","Epistémico de certeza","Deôntico de obrigação","Epistémico de probabilidade"], 0,
     `«Infelizmente» exprime um juízo de valor do locutor — apreciativo.`),
  mc(`Em «<u>Amanhã</u> vou a Faro», a palavra sublinhada é um deítico:`, ["Pessoal","Espacial","Temporal","Social"], 2, `Só se sabe que dia é se soubermos quando foi dito — dêixis temporal.`),
  mc(`Em «<u>Nós</u> vamos contigo», a palavra sublinhada é um deítico:`, ["Pessoal","Espacial","Temporal","Social"], 0, `Refere os participantes na conversa — dêixis pessoal.`),
  mc(`Em «Põe a mochila <u>ali</u>», a palavra sublinhada é um deítico:`, ["Pessoal","Espacial","Temporal","Social"], 1, `Só se percebe o lugar se soubermos onde está quem fala — dêixis espacial.`),
  sh(`Indique o valor modal de: «É obrigatório usar capacete.»`, ["deôntico","deôntica"], `Exprime uma obrigação imposta por uma regra — modalidade deôntica (obrigação).`)
],

"coerencia-coesao": [
  mc(`«Comprei rosas e tulipas. Adoro flores.» — «flores» em relação a «rosas» é:`, ["Sinónimo","Hiperónimo","Hipónimo","Merónimo"], 1, `«Flor» é o termo geral que inclui «rosa» — hiperónimo.`),
  mc(`«O carro avariou. O motor deitava fumo.» — a relação entre «carro» e «motor» é de:`, ["Sinonímia","Hiperonímia/hiponímia","Holonímia/meronímia","Antonímia"], 2, `O motor é uma parte do carro — holonímia (carro) / meronímia (motor).`),
  mc(`«O João entrou e [—] sentou-se.» — o mecanismo de coesão é:`, ["Anáfora","Catáfora","Elipse","Reiteração"], 2, `O sujeito «o João» foi omitido, mas recupera-se pelo contexto — elipse.`),
  mc(`O conector «no entanto» é um mecanismo de coesão:`, ["Lexical","Interfrásica","Temporal","Referencial"], 1, `Liga frases, exprimindo oposição — coesão interfrásica.`),
  mc(`«O dia estava lindo. Contudo, ninguém saiu.» — «contudo» exprime:`, ["Causa","Conclusão","Oposição","Adição"], 2, `Introduz algo contrário ao esperado — oposição/contraste.`),
  mc(`Um texto diz «O João nunca saiu de Lagos» e, mais à frente, «O João viveu dez anos em Paris». O texto falha em:`, ["Coesão lexical","Coerência (não contradição)","Coesão temporal","Coesão frásica"], 1,
     `As duas afirmações contradizem-se — falha de coerência.`),
  mc(`«A Rita passou no exame. A Rita estava muito contente.» — a repetição de «a Rita» é um caso de:`, ["Reiteração","Sinonímia","Elipse","Catáfora"], 0, `Repete-se a mesma expressão — reiteração (coesão lexical).`),
  sh(`«O cão ladrava. O animal estava assustado.» Que relação há entre «animal» e «cão»?`, ["hiperonímia","hiperónimo"], `«Animal» é o termo mais geral que inclui «cão» — hiperonímia.`)
],

"valor-aspetual": [
  mc(`«Ontem li o livro todo.» tem valor aspetual:`, ["Perfetivo","Imperfetivo","Habitual","Genérico"], 0, `A ação está concluída — perfetivo.`),
  mc(`«Quando era pequeno, ia à praia todos os verões.» tem valor aspetual:`, ["Perfetivo","Habitual","Genérico","Iterativo"], 1, `Situação repetida como hábito («todos os verões») — habitual.`),
  mc(`«Tenho estudado muito ultimamente.» tem valor aspetual:`, ["Perfetivo","Genérico","Iterativo","Imperfetivo"], 2, `Pretérito perfeito composto: ação repetida num período até agora — iterativo.`),
  mc(`«A água ferve a 100 °C.» tem valor aspetual:`, ["Habitual","Genérico","Perfetivo","Iterativo"], 1, `Verdade científica, sempre válida — genérico.`),
  mc(`Em «Eu lia quando tocou o telefone», «lia» tem valor aspetual:`, ["Perfetivo","Imperfetivo","Habitual","Genérico"], 1, `A ação estava a decorrer, sem fim à vista — imperfetivo.`),
  mc(`«Ele costuma correr de manhã.» tem valor aspetual:`, ["Habitual","Iterativo","Genérico","Perfetivo"], 0, `«Costumar» indica um hábito — habitual.`),
  mc(`«Quem tudo quer tudo perde.» tem valor aspetual:`, ["Habitual","Genérico","Imperfetivo","Perfetivo"], 1, `Provérbio: verdade geral e atemporal — genérico.`),
  mc(`«Está a chover.» tem valor aspetual:`, ["Perfetivo","Imperfetivo","Genérico","Habitual"], 1, `Ação em curso — imperfetivo.`),
  sh(`Indique o valor aspetual de: «O vizinho tem batido à porta várias vezes.»`, ["iterativo"], `Ação repetida num período, sem ser hábito — iterativo.`)
]

};

/* Acrescenta as novas perguntas ao fim de cada tema (as antigas mantêm a numeração) */
TOPICS.forEach(t => { if (MAIS[t.id]) t.exercicios.push(...MAIS[t.id]); });
