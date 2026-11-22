/* Conteúdos: Resumo da Gramática — Prof.ª Antónia Mancha */
const TOPICS = [

{id:"classes-palavras", grupo:"Morfologia", titulo:"Classes de palavras",
teoria:`
<h3>O que é uma classe de palavras?</h3>
<p>Cada palavra pertence a uma <b>classe</b> — um grupo de palavras com o mesmo tipo de comportamento na frase. Dividem-se em <b>classes abertas</b> (admitem palavras novas) e <b>classes fechadas</b> (número fixo de elementos).</p>

<h3>Classes abertas — definições</h3>
<div class="def"><b>Nome (substantivo).</b> Designa seres, objetos, lugares, qualidades ou ações tratadas como "coisas" (cadeira, Pedro, alegria, corrida). Varia em género e número.</div>
<div class="def"><b>Verbo.</b> Exprime uma ação, um estado ou um processo, situando-o no tempo e atribuindo-lhe um sujeito. É a única classe com flexão de tempo e modo.</div>
<div class="def"><b>Adjetivo.</b> Atribui uma propriedade a um nome, concordando com ele em género e número.</div>
<div class="def"><b>Advérbio.</b> Palavra invariável que modifica um verbo, um adjetivo, outro advérbio ou uma frase inteira.</div>

<table>
<tr><th>Classe</th><th>Subclasses</th><th>Exemplo</th></tr>
<tr><td>Nome</td><td>comum, próprio, coletivo</td><td class="ex">rapariga, Lisboa, cardume</td></tr>
<tr><td>Verbo</td><td>principal (regular/irregular), auxiliar</td><td class="ex">correr; ter corrido; deve correr</td></tr>
<tr><td>Adjetivo</td><td>qualificativo, relacional, numeral</td><td class="ex">simpático; escolar; terceiro</td></tr>
<tr><td>Advérbio</td><td>negação, afirmação, quantidade, modo, tempo, lugar</td><td class="ex">não, muito, assim, depois, aqui</td></tr>
</table>

<h3>Classes fechadas — definições</h3>
<div class="def"><b>Determinante.</b> Antecede o nome e particulariza-o (o, um, meu, este, cujo).</div>
<div class="def"><b>Pronome.</b> Substitui ou remete para um nome já referido (ele, se, seu, isto, quem).</div>
<div class="def"><b>Quantificador.</b> Indica quantidade (dois, algum, todo).</div>
<div class="def"><b>Preposição.</b> Liga dois elementos da frase (de, para, em frente de).</div>
<div class="def"><b>Conjunção.</b> Liga orações ou elementos, com relação lógica (e, mas, ou, porque, se).</div>
<div class="def"><b>Interjeição.</b> Exprime uma emoção, funcionando por si só (ah!, oxalá!).</div>

<h3>O verbo em detalhe</h3>
<table>
<tr><th>Tipo de verbo</th><th>Nota</th></tr>
<tr><td>Principal regular</td><td>segue o paradigma da sua conjugação (falar, comer, partir)</td></tr>
<tr><td>Principal irregular</td><td>desvia-se do paradigma (fazer, ir, ser, poder)</td></tr>
<tr><td>Auxiliar temporal</td><td>forma tempos compostos: ter/haver + particípio (tinha falado)</td></tr>
<tr><td>Auxiliar de aspeto</td><td>marca o desenrolar da ação: estar a + infinitivo, começar a, acabar de</td></tr>
<tr><td>Auxiliar modal</td><td>exprime necessidade/possibilidade: dever, poder + infinitivo</td></tr>
<tr><td>Auxiliar de passiva</td><td>ser/estar + particípio (foi escrito)</td></tr>
<tr><td>Copulativo</td><td>liga o sujeito ao predicativo: ser, estar, parecer, ficar, tornar-se, permanecer, continuar, revelar-se</td></tr>
<tr><td>Transitivo predicativo</td><td>pede predicativo do complemento direto: achar, considerar, eleger, nomear, julgar, tornar, designar, declarar</td></tr>
</table>
<div class="destaque">Cuidado com a <b>conversão de classe</b>: "que" pode ser pronome relativo, conjunção subordinativa completiva ou determinante interrogativo.</div>
`,
exercicios:[
 {tipo:"mc",enun:'Classifique a palavra sublinhada: "Espero <u>que</u> venhas depressa."',opcoes:["Pronome relativo","Conjunção subordinativa completiva","Determinante interrogativo","Conjunção coordenativa"],certa:1,
 criterio:'"que" introduz uma subordinada substantiva completiva, sem substituir nenhum antecedente nominal — por isso é conjunção, não pronome.'},
 {tipo:"mc",enun:'Classifique a palavra sublinhada: "O livro <u>que</u> li era interessante."',opcoes:["Conjunção subordinativa completiva","Pronome relativo","Advérbio relativo","Determinante demonstrativo"],certa:1,
 criterio:'Aqui "que" substitui "livro" e é complemento direto de "li" — pronome relativo.'},
 {tipo:"mc",enun:'Em "Ela tinha falado com o diretor", "tinha" é:',opcoes:["Verbo principal","Auxiliar temporal","Auxiliar modal","Auxiliar de passiva"],certa:1,
 criterio:'"tinha" + particípio forma um tempo composto (pretérito mais-que-perfeito composto) — auxiliar temporal.'},
 {tipo:"short",enun:'Identifique a classe e subclasse da palavra sublinhada: "Chegou <u>ontem</u> à noite."',resposta:["advérbio de tempo"],
 criterio:'"Ontem" modifica o verbo, situando o evento no tempo — advérbio de tempo.'}
]},

{id:"adjacencia-verbal", grupo:"Morfologia", titulo:"Colocação dos pronomes em adjacência verbal",
teoria:`
<h3>1. Ênclise — regra geral</h3>
<p>Geralmente, os pronomes pessoais átonos surgem à <b>direita</b> do verbo (ênclise).</p>
<p class="ex">Desço a rua. → Desço-a.</p>
<h4>Alterações na forma dos pronomes à direita do verbo</h4>
<ul>
<li>Se a forma verbal terminar em -r, -s, -z: estas caem e o pronome passa a -lo(s), -la(s). <span class="ex">Costumo escolher as latas. → Costumo escolhê-las.</span></li>
<li>Se a forma verbal terminar em -m ou ditongo nasal: o pronome passa a -no(s), -na(s). <span class="ex">As máquinas recebem as notas. → As máquinas recebem-nas.</span></li>
</ul>

<h3>2. Próclise — pronome antes do verbo</h3>
<ul>
<li>Com palavras de valor negativo: <span class="ex">Eu não quero ver o João. → Eu não o quero ver.</span></li>
<li>Em frases iniciadas por pronomes/advérbios interrogativos (que, quem, onde, como, porquê): <span class="ex">Quem vos visitou? Onde os arrumaste?</span></li>
<li>Com certos advérbios (bem, mal, ainda, já, sempre, só, talvez...): <span class="ex">Talvez o ajude. Já vos avisei. Só lhes deu uma lembrança.</span></li>
<li>Em orações subordinadas: <span class="ex">Ela disse que trouxe o casaco. → Ela disse que o trouxe.</span></li>
</ul>

<h3>3. Mesóclise — pronome no meio da forma verbal</h3>
<ul>
<li>No <b>condicional</b>: o pronome insere-se entre o infinitivo e as terminações (-ia, -ias...); se o infinitivo terminar em -r, este cai e o pronome ganha um L. <span class="ex">Eu levaria a bicicleta. → Eu levá-la-ia.</span></li>
<li>No <b>futuro</b>: mesma regra. <span class="ex">Ele entregará a encomenda. → Ele entregá-la-á.</span></li>
</ul>
`,
exercicios:[
 {tipo:"short",enun:'Reescreva substituindo o complemento sublinhado por um pronome: "Ela trará <u>o bolo</u> para a festa." (futuro)',resposta:["ela trá-lo-á para a festa"],
 criterio:'No futuro, o pronome insere-se por mesóclise; "trazer" perde o -r e o pronome ganha L: trá-lo-á.'},
 {tipo:"mc",enun:'Em "Nunca a vi tão feliz", a colocação do pronome chama-se:',opcoes:["Ênclise","Próclise","Mesóclise","Ênclise com alteração"],certa:1,
 criterio:'O advérbio de negação "nunca" obriga à colocação do pronome antes do verbo — próclise.'}
]},

{id:"funcoes-frase", grupo:"Sintaxe", titulo:"Funções sintáticas a nível da frase",
teoria:`
<h3>Sujeito</h3>
<p><b>Pergunta-chave: quem?</b> Pode surgir como oração subordinada substantiva relativa ou completiva. Permite substituição por pronomes pessoais ou por "isso" antes do verbo.</p>
<table>
<tr><th>Tipo</th><th>Definição</th><th>Exemplo</th></tr>
<tr><td>Simples</td><td>um só grupo nominal ou pronome</td><td class="ex">O João sai da escola.</td></tr>
<tr><td>Composto</td><td>mais do que um grupo nominal ou pronome</td><td class="ex">Eu e a Alice vamos à escola.</td></tr>
<tr><td>Nulo subentendido</td><td>não está expresso, mas é identificável</td><td class="ex">Bati à janela. (eu)</td></tr>
<tr><td>Nulo indeterminado</td><td>não está expresso nem é identificável</td><td class="ex">Diz-se que está feliz.</td></tr>
<tr><td>Nulo expletivo</td><td>sem interpretação, com verbos impessoais</td><td class="ex">Choveu muito.</td></tr>
</table>

<h3>Predicado</h3>
<p>Verbo + complementos (direto, indireto, oblíquo, agente da passiva) + predicativo do sujeito + predicativo do complemento direto + modificadores do grupo verbal.</p>
<table>
<tr><th>Exemplo</th><th>Composição do predicado</th></tr>
<tr><td>A Maria acordou.</td><td>só o verbo</td></tr>
<tr><td>A Maria leu o livro.</td><td>verbo + CD</td></tr>
<tr><td>Ela escreveu um postal aos pais.</td><td>verbo + CD + CI</td></tr>
<tr><td>Ontem, ela veio de Lisboa.</td><td>modificador do GV + verbo + c. oblíquo</td></tr>
<tr><td>O postal foi escrito pela Maria.</td><td>verbo (passiva) + c. agente da passiva</td></tr>
<tr><td>A Maria está feliz.</td><td>verbo + predicativo do sujeito</td></tr>
<tr><td>A Maria considera o livro interessante.</td><td>verbo + CD + predicativo do CD</td></tr>
</table>

<h3>Modificador da frase</h3>
<p>Pode sair da frase. Distingue-se do modificador do grupo verbal porque <b>não permite ser negado nem interrogado com o verbo ser</b>.</p>
<p class="ex">Naturalmente, tudo está bem. (*Não é naturalmente que tudo está bem — agramatical)</p>

<h3>Vocativo</h3>
<p>Chama, implora. Está sempre isolado por vírgulas.</p>
<p class="ex">Miguel, dás-me a bola? / Ó Cristiano, não me diga que se enganou outra vez.</p>
`,
exercicios:[
 {tipo:"mc",enun:'Em "Choveu muito ontem", o sujeito é:',opcoes:["Simples","Composto","Nulo subentendido","Nulo expletivo"],certa:3,
 criterio:'"Chover" é um verbo impessoal, sem sujeito interpretável — sujeito nulo expletivo.'},
 {tipo:"mc",enun:'Em "Diz-se que o exame foi difícil", o sujeito de "diz-se" é:',opcoes:["Nulo subentendido","Nulo indeterminado","Nulo expletivo","Simples"],certa:1,
 criterio:'Não está expresso e não é possível identificar quem o disse — nulo indeterminado.'},
 {tipo:"short",enun:'Identifique a função sintática de "Infelizmente," em: "Infelizmente, o concerto foi cancelado."',resposta:["modificador da frase","modificador de frase"],
 criterio:'Incide sobre toda a frase, desloca-se livremente e isola-se por vírgula, e não é negável com "não é que" — modificador da frase.'}
]},

{id:"funcoes-gv", grupo:"Sintaxe", titulo:"Funções sintáticas internas ao grupo verbal",
teoria:`
<table>
<tr><th>Função</th><th>Pergunta-chave / teste</th><th>Exemplo</th></tr>
<tr><td>Complemento direto</td><td>"o quê?"/"quem?"; substitui-se por o/a/os/as</td><td class="ex">Ela escreveu uma carta aos pais.</td></tr>
<tr><td>Complemento indireto</td><td>"a quem?"; substitui-se por lhe</td><td class="ex">Ela escreveu uma carta aos pais.</td></tr>
<tr><td>Complemento agente da passiva</td><td>"por quem?"</td><td class="ex">O assaltante foi preso pela polícia.</td></tr>
<tr><td>Predicativo do sujeito</td><td>atribui propriedades ao sujeito; ocorre com verbos copulativos</td><td class="ex">Estou em Faro.</td></tr>
<tr><td>Complemento oblíquo</td><td>não sai da frase; não é substituível por o/a/os/as nem lhe; regido de preposição</td><td class="ex">Discordo da tua decisão. / Gosto de chocolate.</td></tr>
<tr><td>Predicativo do complemento direto</td><td>dupla pergunta "o quê?"; com verbos transitivos predicativos</td><td class="ex">A Maria considera o livro interessante.</td></tr>
<tr><td>Modificador do grupo verbal</td><td>pode sair da frase; permite ser negado e interrogado com o verbo ser</td><td class="ex">Fomos ao museu no sábado. → Foi no sábado que fomos ao museu?</td></tr>
</table>
<h3>Verbos copulativos mais comuns</h3>
<p>ser, parecer, tornar-se, estar, permanecer, revelar-se, ficar, continuar</p>
<h3>Verbos transitivos predicativos mais comuns</h3>
<p>achar, julgar, considerar, nomear, eleger, designar, tornar, declarar</p>
<h3>Verbos que pedem complemento oblíquo (exemplos)</h3>
<p>acabar (com), beneficiar (de), brindar (a), candidatar-se (a), colocar (em), concordar (com), destinar-se (a), discordar (de), enamorar-se (de), encarregar-se (de), encher-se (de), entender (de), enveredar (por), falar (de), gostar (de), guardar (em), interessar-se (por), ir (a), ocupar-se (de), opor-se (a), pactuar (com), participar (em), pensar (em).</p>
`,
exercicios:[
 {tipo:"mc",enun:'Identifique a função de "ao professor" em: "A aluna entregou o trabalho ao professor."',opcoes:["Complemento direto","Complemento indireto","Complemento oblíquo","Modificador"],certa:1,
 criterio:'Responde a "a quem?" e substitui-se por "lhe" — complemento indireto.'},
 {tipo:"mc",enun:'Em "Discordo da tua decisão", "da tua decisão" é:',opcoes:["Complemento direto","Complemento indireto","Complemento oblíquo","Predicativo do sujeito"],certa:2,
 criterio:'Não é substituível por o/a nem por lhe, é regido de preposição exigida pelo verbo "discordar (de)" e não sai da frase — complemento oblíquo.'},
 {tipo:"mc",enun:'Em "Consideraram o exame difícil", "difícil" é:',opcoes:["Predicativo do sujeito","Predicativo do complemento direto","Modificador do nome","Complemento direto"],certa:1,
 criterio:'Atribui uma propriedade ao complemento direto "o exame", com o verbo transitivo predicativo "considerar" — predicativo do complemento direto.'},
 {tipo:"short",enun:'Em "Fomos ao museu no sábado", qual a função de "no sábado" e porquê (teste)?',resposta:["modificador do grupo verbal","modificador do gv"],
 criterio:'Permite ser negado e interrogado com o verbo ser ("Foi no sábado que fomos ao museu?") — modificador do grupo verbal, distinto do modificador da frase.'}
]},

{id:"funcoes-nominal-adjetival", grupo:"Sintaxe", titulo:"Funções sintáticas internas ao grupo nominal, adjetival e adverbial",
teoria:`
<h3>Modificador do nome restritivo</h3>
<p>Limita a abrangência do nome. Saindo da frase, altera-lhe o sentido.</p>
<p class="ex">As rosas amarelas são muito raras. / O livro que comprei ontem é cativante.</p>

<h3>Modificador do nome apositivo</h3>
<p>Fornece uma informação adicional, sempre entre vírgulas. Pode ser retirado da frase sem alterar o sentido essencial.</p>
<p class="ex">D. Afonso Henriques, "o conquistador", foi o primeiro rei português.</p>

<h3>Complemento do nome</h3>
<p>Introduzido por preposição (de, do, dos...), a seguir ao nome. Para o distinguir do modificador, tenta transformá-lo numa oração relativa restritiva: se não for possível, é complemento do nome.</p>
<p class="ex">A cidade de Lagos fica no Algarve. (*A cidade que é de Lagos fica no Algarve — agramatical, logo é complemento do nome)</p>

<h3>Complemento do adjetivo</h3>
<p>Expressão introduzida por preposição simples ou contraída a seguir a um adjetivo; a sua presença é facultativa.</p>
<p class="ex">Este problema é difícil de resolver.</p>

<h3>Complemento do advérbio</h3>
<p>Alguns advérbios precisam de um constituinte que complete o seu sentido.</p>
<p class="ex">Encontrei a caneta dentro da caixa.</p>
<p>Advérbios que pedem complemento: dentro (de), fora (de), longe (de), perto (de), diante (de), independentemente (de), contrariamente (a), relativamente (a).</p>
`,
exercicios:[
 {tipo:"mc",enun:'Em "As rosas amarelas são muito raras", "amarelas" é:',opcoes:["Modificador do nome restritivo","Modificador do nome apositivo","Complemento do nome","Predicativo do sujeito"],certa:0,
 criterio:'Sem vírgulas, limita quais rosas e altera o sentido se for retirado — modificador restritivo do nome.'},
 {tipo:"mc",enun:'Em "A cidade de Lagos fica no Algarve", "de Lagos" é:',opcoes:["Modificador do nome restritivo","Modificador do nome apositivo","Complemento do nome","Complemento do adjetivo"],certa:2,
 criterio:'Não pode converter-se em relativa restritiva (*a cidade que é de Lagos) — é complemento do nome.'},
 {tipo:"short",enun:'Em "Este problema é difícil de resolver", identifique a função de "de resolver".',resposta:["complemento do adjetivo"],
 criterio:'Completa o sentido do adjetivo "difícil", de presença facultativa — complemento do adjetivo.'}
]},

{id:"frase-complexa", grupo:"Sintaxe", titulo:"Frase complexa: coordenação e subordinação",
teoria:`
<p>Frase constituída por duas ou mais orações. <b>O número de orações é dado pelo número de formas verbais.</b> Há dois mecanismos de formação de frases complexas: <b>coordenação</b> (orações independentes) e <b>subordinação</b> (uma oração subordinante da qual depende uma ou mais subordinadas).</p>

<h3>Orações coordenadas</h3>
<table>
<tr><th>Tipo</th><th>Conetores</th><th>Exemplo</th></tr>
<tr><td>Assindética</td><td>ligada por vírgulas</td><td class="ex">Levantei-me, comi, saí.</td></tr>
<tr><td>Copulativas</td><td>e, nem, não só... mas também</td><td class="ex">Nós fomos passear e fomos ao cinema.</td></tr>
<tr><td>Adversativas</td><td>mas, porém, todavia, contudo</td><td class="ex">Eu comprei o jornal, mas não o li.</td></tr>
<tr><td>Explicativas</td><td>pois (= porque)</td><td class="ex">Estuda, pois vais ter teste.</td></tr>
<tr><td>Disjuntivas</td><td>ou, ora...ora, quer...quer, seja...seja</td><td class="ex">Ou comes, ou vês televisão.</td></tr>
<tr><td>Conclusivas</td><td>portanto, logo</td><td class="ex">Compraste o jornal, portanto, lê-o.</td></tr>
</table>

<h3>Orações subordinadas adverbiais</h3>
<table>
<tr><th>Tipo</th><th>Conetores</th><th>Exemplo</th></tr>
<tr><td>Temporais</td><td>quando, enquanto, apenas, mal, antes que</td><td class="ex">Quando acabar o trabalho, vou ao cinema.</td></tr>
<tr><td>Causais</td><td>que, porque, uma vez que, já que, visto que</td><td class="ex">Como a Maria estava doente, o João não quis sair.</td></tr>
<tr><td>Finais</td><td>para, para que, a fim de que</td><td class="ex">Para que ficasse contente, convidei o Pedro.</td></tr>
<tr><td>Condicionais</td><td>se, desde que, a não ser que, salvo se</td><td class="ex">A Teresa perde outro ano, se não estudar.</td></tr>
<tr><td>Concessivas</td><td>embora, ainda que, apesar de</td><td class="ex">A Teresa consegue passar, embora não estude.</td></tr>
<tr><td>Comparativas</td><td>como, conforme, assim como, (do) que</td><td class="ex">O meu bolo é mais doce do que o teu.</td></tr>
<tr><td>Consecutivas</td><td>tão... que, tanto... que, de tal forma/modo</td><td class="ex">Ele é tão gordo que partiu a cadeira.</td></tr>
</table>
<p class="ex">N.B. Comparativas e consecutivas não têm, geralmente, muita mobilidade na frase.</p>

<h3>Orações subordinadas adjetivas relativas</h3>
<table>
<tr><th>Tipo</th><th>Nota</th><th>Exemplo</th></tr>
<tr><td>Restritivas</td><td>sem vírgulas; se saírem, alteram o sentido; têm sempre a função de modificador restritivo do nome</td><td class="ex">O menino que está doente tem olhos azuis.</td></tr>
<tr><td>Explicativas</td><td>entre vírgulas; podem sair da frase (informação acessória)</td><td class="ex">A Ana, que é minha amiga, vive nesta casa.</td></tr>
</table>
<p>Introdutores: pronomes relativos (que, o qual), determinantes relativos (cujo), advérbio relativo (onde), quantificador relativo (quanto).</p>

<h3>Orações subordinadas substantivas</h3>
<table>
<tr><th>Tipo</th><th>Nota</th><th>Exemplo</th></tr>
<tr><td>Completivas</td><td>completam o sentido do verbo; conjunções que, se, para; função de CD, sujeito ou c. oblíquo</td><td class="ex">O Luís disse que desejava cantar. (CD)</td></tr>
<tr><td>Relativas sem antecedente</td><td>introduzidas por o que, quem, onde, quanto; função nominal</td><td class="ex">Quem vai ao mar perde o lugar. (sujeito)</td></tr>
</table>
`,
exercicios:[
 {tipo:"mc",enun:'Classifique a oração sublinhada: "Chegou atrasado <u>porque perdeu o autocarro</u>."',opcoes:["Subordinada causal","Coordenada explicativa","Subordinada consecutiva","Subordinada condicional"],certa:0,
 criterio:'Indica a causa e pode deslocar-se para o início da frase — subordinada causal.'},
 {tipo:"mc",enun:'Classifique a oração sublinhada: "Estuda, <u>pois vais ter teste</u>."',opcoes:["Subordinada causal","Coordenada explicativa","Subordinada consecutiva","Coordenada conclusiva"],certa:1,
 criterio:'"pois" (=porque) liga duas orações independentes, não deslocável para o início — coordenada explicativa.'},
 {tipo:"mc",enun:'Classifique a oração sublinhada: "O menino <u>que está doente</u> tem olhos azuis."',opcoes:["Subordinada adjetiva relativa restritiva","Subordinada adjetiva relativa explicativa","Subordinada substantiva completiva","Subordinada substantiva relativa"],certa:0,
 criterio:'Sem vírgulas, restringe qual menino — relativa restritiva.'},
 {tipo:"short",enun:'Classifique a oração sublinhada e a sua função: "<u>Quem vai ao mar</u> perde o lugar."',resposta:["subordinada substantiva relativa sem antecedente, sujeito","substantiva relativa, sujeito"],
 criterio:'Introduzida por "quem", sem antecedente expresso, com função de sujeito de "perde" — subordinada substantiva relativa sem antecedente, sujeito.'},
 {tipo:"short",enun:'Classifique a oração sublinhada: "Ele é tão gordo <u>que partiu a cadeira</u>."',resposta:["subordinada adverbial consecutiva","subordinada consecutiva"],
 criterio:'A estrutura correlativa "tão... que" exprime a consequência da intensidade — subordinada adverbial consecutiva.'}
]},

{id:"processos-fonologicos", grupo:"Morfologia", titulo:"Processos fonológicos",
teoria:`
<p>Na sua evolução ao longo dos tempos, as palavras podem sofrer diferentes tipos de alteração a nível fónico, no domínio das unidades sonoras.</p>
<h3>Processos de inserção (adição) de segmentos</h3>
<table>
<tr><th>Processo</th><th>Definição</th><th>Exemplo</th></tr>
<tr><td>Prótese</td><td>inserção de um segmento em início de palavra</td><td class="ex">SPIRITU- &gt; espírito</td></tr>
<tr><td>Epêntese</td><td>inserção de um segmento no meio de palavra</td><td class="ex">UMERU- &gt; ombro</td></tr>
<tr><td>Paragoge</td><td>inserção de um segmento em fim de palavra</td><td class="ex">ANTE &gt; antes</td></tr>
</table>
<h3>Processos de supressão (queda) de segmentos</h3>
<table>
<tr><th>Processo</th><th>Definição</th><th>Exemplo</th></tr>
<tr><td>Aférese</td><td>supressão em início de palavra</td><td class="ex">EPISCOPU- &gt; bispo</td></tr>
<tr><td>Síncope</td><td>supressão no meio de palavra</td><td class="ex">RIVU- &gt; rio</td></tr>
<tr><td>Apócope</td><td>supressão em fim de palavra</td><td class="ex">ROSAM &gt; rosa</td></tr>
</table>
<h3>Principais processos de alteração de segmentos</h3>
<table>
<tr><th>Processo</th><th>Definição</th><th>Exemplo</th></tr>
<tr><td>Metátese</td><td>alteração da posição de um ou mais segmentos</td><td class="ex">SEMPER &gt; sempre; INTER &gt; entre</td></tr>
<tr><td>Assimilação</td><td>uma unidade fónica torna-se igual a outra vizinha</td><td class="ex">PERSONA- &gt; pessoa</td></tr>
<tr><td>Dissimilação</td><td>uma unidade fónica torna-se diferente de outra vizinha</td><td class="ex">LILIU- &gt; lírio</td></tr>
<tr><td>Sonorização</td><td>uma consoante surda torna-se sonora</td><td class="ex">FOCU- &gt; fogo; TOTU- &gt; todo; LUPU- &gt; lobo</td></tr>
<tr><td>Vocalização</td><td>uma consoante transforma-se em vogal</td><td class="ex">ACTU- &gt; auto</td></tr>
<tr><td>Palatalização</td><td>desenvolvimento de uma unidade palatal por influência de som palatal vizinho</td><td class="ex">FILIU- &gt; filho; SENIORE- &gt; senhor</td></tr>
<tr><td>Crase</td><td>contração/fusão de duas vogais numa só</td><td class="ex">legere &gt; leer &gt; ler</td></tr>
<tr><td>Sinérese</td><td>fusão de duas vogais num ditongo</td><td class="ex">lege &gt; lee &gt; lei</td></tr>
<tr><td>Redução vocálica</td><td>enfraquecimento de uma vogal em posição átona</td><td class="ex">medo &gt; medroso; carta &gt; cartinha &gt; carteiro</td></tr>
</table>
`,
exercicios:[
 {tipo:"mc",enun:'A passagem de UMERU- a "ombro" exemplifica:',opcoes:["Prótese","Epêntese","Paragoge","Síncope"],certa:1,
 criterio:'Inserção de um segmento no meio da palavra — epêntese.'},
 {tipo:"mc",enun:'A passagem de FOCU- a "fogo" exemplifica:',opcoes:["Vocalização","Sonorização","Palatalização","Metátese"],certa:1,
 criterio:'A consoante surda "c" torna-se sonora "g" — sonorização.'},
 {tipo:"short",enun:'Que processo fonológico explica SEMPER > sempre?',resposta:["metátese"],criterio:'Alteração da posição dos segmentos -r e -e — metátese.'}
]},

{id:"formacao-palavras", grupo:"Morfologia", titulo:"Processos de formação de palavras",
teoria:`
<h3>Processos regulares</h3>
<h4>Derivação</h4>
<table>
<tr><th>Tipo</th><th>Nota</th><th>Exemplo</th></tr>
<tr><td>Por prefixação</td><td>acrescenta-se um prefixo à forma base</td><td class="ex">infeliz</td></tr>
<tr><td>Por sufixação</td><td>acrescenta-se um sufixo à forma base</td><td class="ex">felizmente</td></tr>
<tr><td>Por prefixação e sufixação</td><td>retirando um ou outro, a palavra continua a fazer sentido</td><td class="ex">infelizmente</td></tr>
<tr><td>Por parassíntese</td><td>não se pode retirar nem o prefixo nem o sufixo</td><td class="ex">amanhecer</td></tr>
</table>
<h4>Composição</h4>
<table>
<tr><th>Tipo</th><th>Nota</th><th>Exemplo</th></tr>
<tr><td>Morfológica</td><td>radical + radical</td><td class="ex">agro + cultura = agricultura</td></tr>
<tr><td>Morfossintática</td><td>palavra + palavra, mantendo autonomia</td><td class="ex">guarda-chuva</td></tr>
</table>
<h4>Conversão</h4>
<p>A mesma palavra passa a pertencer a duas classes diferentes.</p>
<p class="ex">O olhar dele é muito intenso. (olhar — nome) / Gosto de olhar a paisagem. (olhar — verbo)</p>
<h4>Derivação não afixal</h4>
<p>A partir de verbos formam-se nomes sem acrescentar afixos.</p>
<p class="ex">trocar → troca</p>

<h3>Processos irregulares</h3>
<table>
<tr><th>Processo</th><th>Nota</th><th>Exemplo</th></tr>
<tr><td>Extensão semântica</td><td>mesma palavra com diferentes significados, consoante o contexto</td><td class="ex">rato: animal e objeto informático</td></tr>
<tr><td>Empréstimo</td><td>palavra de outra língua</td><td class="ex">lingerie</td></tr>
<tr><td>Amálgama</td><td>junção de palavras</td><td class="ex">informação + automática = informática</td></tr>
<tr><td>Sigla</td><td>lê-se letra a letra</td><td class="ex">PSP</td></tr>
<tr><td>Acrónimo</td><td>lê-se como uma palavra</td><td class="ex">ONU</td></tr>
<tr><td>Truncação</td><td>redução das palavras</td><td class="ex">metro = metropolitano</td></tr>
<tr><td>Onomatopeia</td><td>reprodução dos sons</td><td class="ex">ão-ão</td></tr>
</table>
`,
exercicios:[
 {tipo:"mc",enun:'Classifique o processo de formação de "infeliz":',opcoes:["Sufixação","Prefixação","Parassíntese","Composição morfológica"],certa:1,
 criterio:'O prefixo "in-" junta-se ao radical "feliz" — prefixação.'},
 {tipo:"mc",enun:'Classifique o processo de formação de "amanhecer":',opcoes:["Prefixação","Sufixação","Prefixação e sufixação","Parassíntese"],certa:3,
 criterio:'Não é possível retirar nem o prefixo "a-" nem o sufixo "-ecer" sem destruir a palavra — parassíntese.'},
 {tipo:"mc",enun:'Classifique o processo em "ONU" (lê-se como uma palavra):',opcoes:["Sigla","Acrónimo","Amálgama","Truncação"],certa:1,
 criterio:'Lê-se como uma palavra (e não letra a letra) — acrónimo.'},
 {tipo:"short",enun:'"O olhar dele é intenso" / "Gosto de olhar a paisagem" — que processo de formação está em causa?',resposta:["conversão"],
 criterio:'A mesma forma "olhar" pertence a duas classes diferentes (nome e verbo) — conversão.'}
]},

{id:"atos-ilocutorios", grupo:"Texto e discurso", titulo:"Atos ilocutórios",
teoria:`
<table>
<tr><th>Tipo</th><th>Definição</th><th>Subtipos</th></tr>
<tr><td>Assertivos</td><td>proposição, afirmativa ou negativa, enunciada como verdadeira; demonstram a relação verdade/falsidade</td><td>asserções, explicações, constatações, descrições</td></tr>
<tr><td>Diretivos</td><td>revelam a intenção de influenciar o modo de agir do interlocutor</td><td>pedidos, conselhos, ordens, sugestões</td></tr>
<tr><td>Compromissivos</td><td>exprimem uma intenção do emissor a realizar no futuro</td><td>promessas, juramentos, ameaças</td></tr>
<tr><td>Expressivos</td><td>revelam o estado psicológico do locutor</td><td>agradecimentos, congratulações, lamentos, desculpas</td></tr>
<tr><td>Declarativos</td><td>implicam a criação de uma nova realidade a partir do enunciado de um locutor com posição reconhecida (igreja, tribunal...)</td><td>nomeações, condenações, demissões, casamentos, batizados</td></tr>
</table>
`,
exercicios:[
 {tipo:"mc",enun:'Classifique o ato ilocutório de: "Prometo que te ajudo com o trabalho."',opcoes:["Diretivo","Expressivo","Compromissivo","Assertivo"],certa:2,
 criterio:'O falante compromete-se a uma ação futura — compromissivo.'},
 {tipo:"mc",enun:'Classifique o ato ilocutório de: "Declaro-vos marido e mulher."',opcoes:["Assertivo","Declarativo","Diretivo","Expressivo"],certa:1,
 criterio:'Cria uma nova realidade pelo próprio enunciado de alguém com posição reconhecida — declarativo.'},
 {tipo:"short",enun:'Classifique o ato ilocutório de: "Lamento muito o que aconteceu."',resposta:["expressivo"],criterio:'Revela o estado psicológico do locutor — expressivo.'}
]},

{id:"modalidade-deixis", grupo:"Texto e discurso", titulo:"Modalidade e dêixis",
teoria:`
<h3>Modalidade epistémica</h3>
<table>
<tr><th>Valor</th><th>Exemplo</th></tr>
<tr><td>Certeza</td><td class="ex">Vou ao cinema no sábado.</td></tr>
<tr><td>Probabilidade</td><td class="ex">Talvez consiga ir ao jogo.</td></tr>
</table>
<h3>Modalidade deôntica</h3>
<table>
<tr><th>Valor</th><th>Exemplo</th></tr>
<tr><td>Obrigação</td><td class="ex">Até sábado, tenho de corrigir os testes todos.</td></tr>
<tr><td>Permissão</td><td class="ex">Se já terminaste o teste, podes ir.</td></tr>
</table>
<h3>Modalidade apreciativa</h3>
<p>Juízo de valor positivo ou negativo (opinião).</p>
<p class="ex">Felizmente, cheguei a horas da cerimónia. / O vestido de noiva era magnífico.</p>

<h3>Dêixis</h3>
<p>Conjunto de palavras ou situações que apontam o contexto situacional.</p>
<table>
<tr><th>Tipo</th><th>Marcas</th></tr>
<tr><td>Pessoal</td><td>quem fala e para quem fala: pronomes pessoais, determinantes/pronomes possessivos, vocativo, flexão verbal</td></tr>
<tr><td>Espacial</td><td>o espaço onde se fala: advérbios de lugar (aqui, ali), demonstrativos</td></tr>
<tr><td>Temporal</td><td>o momento da enunciação: advérbios de tempo (hoje, ontem, amanhã), flexão verbal</td></tr>
</table>
`,
exercicios:[
 {tipo:"mc",enun:'Em "Até sábado, tenho de corrigir os testes todos", o valor modal é:',opcoes:["Epistémico de certeza","Epistémico de probabilidade","Deôntico de obrigação","Deôntico de permissão"],certa:2,
 criterio:'"tenho de" exprime uma obrigação — modalidade deôntica de obrigação.'},
 {tipo:"mc",enun:'Em "Talvez consiga ir ao jogo", o valor modal é:',opcoes:["Epistémico de certeza","Epistémico de probabilidade","Deôntico de obrigação","Apreciativo"],certa:1,
 criterio:'"Talvez" indica que não há certeza, apenas possibilidade — epistémico de probabilidade.'},
 {tipo:"short",enun:'Identifique o tipo de dêixis em "aqui": "Vivo aqui desde que nasci."',resposta:["deixis espacial","espacial"],criterio:'"Aqui" remete para o local da enunciação — dêixis espacial.'}
]},

{id:"coerencia-coesao", grupo:"Texto e discurso", titulo:"Coerência e coesão textual",
teoria:`
<h3>Coerência textual</h3>
<p>Resulta da articulação lógica entre as diferentes partes e ideias de um texto.</p>
<ul>
<li>Apresentação de progressão</li>
<li>Respeito pela regra da não contradição</li>
<li>Renovação de informação e supressão de repetição</li>
<li>Privilégio de informações relevantes</li>
<li>Verificação da continuidade do sentido</li>
</ul>

<h3>Coesão lexical</h3>
<p>Repetição da mesma palavra ou substituição por outras que com ela se relacionam em hierarquia, equivalência ou oposição.</p>
<table>
<tr><th>Mecanismo</th><th>Exemplo</th></tr>
<tr><td>Reiteração</td><td class="ex">O André comprou o livro. Era o livro que procurara durante muito tempo.</td></tr>
<tr><td>Sinonímia</td><td class="ex">A Ana veio dar-me a notícia. Gostei de ouvir a novidade.</td></tr>
<tr><td>Antonímia</td><td class="ex">O João queria tudo. Mas a vida não lhe dera nada.</td></tr>
<tr><td>Hiperonímia/hiponímia</td><td class="ex">Encontrei um gato. O animal parece doente.</td></tr>
<tr><td>Holonímia/meronímia</td><td class="ex">A Ana comprou um apartamento. Ficou encantada com a cozinha e a sala!</td></tr>
</table>

<h3>Coesão gramatical</h3>
<table>
<tr><th>Tipo</th><th>Definição</th><th>Exemplo</th></tr>
<tr><td>Frásica</td><td>ligação entre os elementos de uma oração/frase simples: ordenação, concordância, regências, complementos exigidos</td><td class="ex">O meu pai e quem tu sabes já viveram aqui.</td></tr>
<tr><td>Interfrásica</td><td>ligação de frases simples, complexas e parágrafos: conjunções/locuções e conectores de discurso</td><td class="ex">A Joana preparou tudo com atenção. Na verdade, ela é responsável.</td></tr>
<tr><td>Temporal</td><td>organização do texto segundo uma ordenação temporal: correlação de tempos e modos verbais, advérbios</td><td class="ex">Hoje, ficamos por casa. Naquele dia, tínhamos ido à praia.</td></tr>
<tr><td>Referencial</td><td>cadeias de referência: um referente é retomado por correferentes</td><td class="ex">O Rui está triste. Ele recebeu uma notícia desagradável.</td></tr>
</table>

<h3>Tipos de coesão referencial</h3>
<table>
<tr><th>Tipo</th><th>Definição</th><th>Exemplo</th></tr>
<tr><td>Anáfora</td><td>um termo retoma um antecedente já mencionado</td><td class="ex">O Pedro viu a Rita. Ele correu atrás dela.</td></tr>
<tr><td>Catáfora</td><td>processo inverso: o pronome surge antes do termo a que se refere</td><td class="ex">Ele correu atrás dela. Afinal, o Pedro amava-a.</td></tr>
<tr><td>Elipse</td><td>omissão de um termo recuperável pelo contexto</td><td class="ex">Ela conhecia-o bem, mas [-] nunca o vira assim.</td></tr>
<tr><td>Correferência anafórica</td><td>expressões relativas ao mesmo referente, sem que uma dependa da outra</td><td class="ex">A Rita saiu cedo. A escola da filha da Maria fica longe.</td></tr>
</table>
`,
exercicios:[
 {tipo:"mc",enun:'"Comprou um cão. O animal tornou-se o seu melhor amigo." Que mecanismo liga "o animal" a "um cão"?',opcoes:["Repetição lexical","Hiperonímia","Elipse","Conector conclusivo"],certa:1,
 criterio:'"Animal" é uma categoria mais geral que inclui "cão" — hiperonímia (coesão lexical).'},
 {tipo:"mc",enun:'"Ele correu atrás dela. Afinal, o Pedro amava-a." — o pronome "Ele" exemplifica:',opcoes:["Anáfora","Catáfora","Elipse","Correferência anafórica"],certa:1,
 criterio:'O pronome surge antes do termo a que se refere ("o Pedro") — catáfora.'},
 {tipo:"short",enun:'"A Maria chegou tarde. Ela tinha perdido o comboio." Identifique o mecanismo de coesão usado por "Ela".',resposta:["anáfora","coesão referencial"],
 criterio:'"Ela" retoma "a Maria", já mencionada — anáfora (coesão referencial).'}
]},

{id:"valor-aspetual", grupo:"Texto e discurso", titulo:"Valor aspetual",
teoria:`
<h3>O que é o aspeto?</h3>
<p>Categoria gramatical que exprime a <b>estrutura temporal interna</b> de uma situação. As categorias tempo e aspeto são distintas, mas há formas verbais que exprimem os dois valores simultaneamente.</p>
<p class="ex">"Ricardo Araújo Pereira faz críticas destrutivas." → valor temporal de presente + valor aspetual habitual (situação repetida no tempo).</p>

<table>
<tr><th>Valor</th><th>Definição</th><th>Tempo verbal típico</th><th>Exemplo</th></tr>
<tr><td>Perfetivo</td><td>apresenta uma ação como concluída</td><td>pretérito perfeito simples do indicativo</td><td class="ex">Fernando Pessoa criou a teoria do fingimento artístico.</td></tr>
<tr><td>Imperfetivo</td><td>apresenta uma ação não concluída, inacabada ou em curso</td><td>pretérito imperfeito ou presente do indicativo</td><td class="ex">Os alunos escreviam sobre a poesia de Fernando Pessoa.</td></tr>
<tr><td>Genérico</td><td>situação que se acredita verdadeira, atemporal e permanente (provérbios, verdades científicas)</td><td>presente do indicativo</td><td class="ex">A Terra gira em torno do Sol.</td></tr>
<tr><td>Habitual</td><td>situação que se repete com frequência, correspondendo a um hábito</td><td>presente ou pretérito imperfeito, com expressões quantificadoras</td><td class="ex">Estudavam Caeiro depois de Fernando Pessoa ortónimo.</td></tr>
<tr><td>Iterativo</td><td>situação repetida com regularidade durante um intervalo, sem configurar hábito</td><td>pretérito perfeito composto, ou "andar a..."</td><td class="ex">Os alunos do 12.º ano andam a ensaiar a leitura expressiva.</td></tr>
</table>
`,
exercicios:[
 {tipo:"mc",enun:'Identifique o valor aspetual de "Fernando Pessoa criou a teoria do fingimento artístico":',opcoes:["Perfetivo","Imperfetivo","Genérico","Iterativo"],certa:0,
 criterio:'Pretérito perfeito simples, apresenta a ação como concluída — valor perfetivo.'},
 {tipo:"mc",enun:'Identifique o valor aspetual de "A Terra gira em torno do Sol":',opcoes:["Perfetivo","Habitual","Genérico","Iterativo"],certa:2,
 criterio:'Verdade científica, atemporal e permanente — valor genérico.'},
 {tipo:"mc",enun:'Identifique o valor aspetual de "Os alunos do 12.º ano andam a ensaiar a leitura":',opcoes:["Perfetivo","Habitual","Genérico","Iterativo"],certa:3,
 criterio:'"andar a" + situação repetida com regularidade, sem ser propriamente um hábito — valor iterativo.'},
 {tipo:"short",enun:'Que valor aspetual tem "Estudavam Caeiro depois de Fernando Pessoa ortónimo" (habitualmente)?',resposta:["habitual"],
 criterio:'Situação que se repete com frequência, correspondendo a um hábito — valor habitual.'}
]}

];
