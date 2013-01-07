---
comments: true
date: 2012-06-04 19:15:08
layout: post
slug: jsconf-argentina-resumo
title: JSConf Argentina - Resumo
wordpress_id: 1269
categories:
- Eventos
- JavaScript
---

Antes tarde do que nunca, finalmente parei para fazer o review da [JSConf Argentina](http://jsconf.com.ar).  
Como um todo, conferência, Hostel, Argentina, etc, uma palavra resume tudo:  
**Épico!**  

Me aventurei a ir de ônibus, pois deixei para comprar as passagens na última hora, e estava muito caro!  
A viagem de Porto Alegre até a Argentina leva em torno de 15 horas.  
Foi bem tranquilo. Li bastante(Biografia do Ozzy!), escutei música e dormi.  
Pronto, cheguei na Argentina.

A viagem foi solitária, mas lá na Argentina estavamos entre 5 amigos:[ Zeno Rocha](https://twitter.com/#!/zenorocha), [Giovani Keppelen](https://twitter.com/#!/keppelen), [Flávio Silva](https://twitter.com/#!/flaviosil), [Helder Santana](https://twitter.com/#!/helder) e [eu](http://twitter.com/jaydson).  

Já na chegada, percebi que seria um grande evento. Tudo estava muito organizado e o local do evento era muito bacana.

[![Chegada na JSConf](http://jaydson.org/wp-content/uploads/35514_3772929997596_433336741_n.jpg)](http://jaydson.org/wp-content/uploads/35514_3772929997596_433336741_n.jpg)  

### _**Mike Taylor abre o evento**_  
A primeira palestra foi do amigo [Mike Taylor](http://twitter.com/miketaylr), da Opera.  
As palestras do Mike são sempre muito engraçadas e repletas de sarcasmos. 
Simplesmente muito boa, como sempre.  
Ele falou sobre o objeto [Navigator](https://developer.mozilla.org/en/DOM/window.navigator), contando um pouco do histórico e coisas novas introduzidas no _pacote_ [HTML5](https://developer.mozilla.org/en/HTML/HTML5).  
Uma curiosidade que eu tinha era porque o UserAgent do navegadores sempre contém Mozilla, mesmo sendo o Chrome por exemplo.  
Conversando com o Mike após a palestra, ele me explicou que isso é para manter compatibilidade, pois existe muito código legado que utiliza o _indexOf_, por exemplo, procurando pela string Mozilla, e se os navegadores não tiverem esta string no UserAgent, a aplicação pode não funcionar. Bizarro não?  
Outro fato interessante é o UserAgent do Opera, que mesmo estando na versão 12, retorna **_Opera/9.80_**.  
Motivo? Falha no IIS.  
Segundo o Mike, o IIS tem uma falha(básica) que não identifica versões maiores que 10, porque encontra o número 1 na string logo após o version, e acaba achando que a versão é Opera 1.  
Mais bizarro ainda não? Coisas de Microsoft.  

### _**ChicoUI**_  
A segunda palestra que cosegui assistir foi do Guillermo Paz, que trabalha no [Mercado Livre](http://www.mercadolibre.com.ar/) da Argentina.  
A palestra foi boa, ele mostrou como o Mercado Livre funcionava antes, em relação ao código front-end, e como eles decidiram criar um projeto open-source para melhorar o desenvolvimento interno.  
Assim nasceu o [ChicoUI](http://chico-ui.com.ar/), um projeto bem interessante que engloba um misto de componentes e boas práticas para o desenvolvimento web.  
Ele se assemelha um pouco ao [jQueryUI](http://jqueryui.com/) e ao [Bootstrap](http://twitter.github.com/bootstrap/), vale dar uma olhada.  
Achei legal pela iniciativa de tornar o projeto open-source, é bom ver empresas grandes valorizando e entendendo os benefícios que um projeto assim agrega a empresa e a comunidade.  

### _**Comida!**_  
Comida, muita comida!  
O pessoal da organização está de parabéns. Nunca comi tanto em evento de Tecnologia.  
Tinha muita comida, o tempo inteiro.  
A cada intervalo de palestras tinha mais e mais comida, e coisas muito boas!  
Não sei o nome de nenhuma delas, mas estava muito bom mesmo.  

### _**WebGL**_  
A próxima palestra que assisti foi da [Luz Caballero](https://twitter.com/#!/gerbille) da Opera, sobre [WebGL](https://developer.mozilla.org/en/WebGL).  
Ela mostrou vários exemplos impressionantes de uso de WebGL.  
Alguns usando a [ThreeJS](https://github.com/mrdoob/three.js/), outros usando o [PhiloGL](http://www.senchalabs.org/philogl/).  
Uma coisa legal foi ver os demos rodando no Opera. Eu não sabia que já havia suporte no Opera para WebGL.  
Para testar WebGL no Opera, creio que seja necessário usar a versão nova: [Opera.Next](http://www.opera.com/browser/next/).  
Depois da Luz, ainda assisti a excelente palestra do [Nicolás García Belmonte](https://twitter.com/#!/philogb).  
O Nicolás é criador de projetos muito interessantes, entre eles o próprio PhiloGL citado pela Luz.  
Outro projeto dele é o [JavaScript InfoVis Toolkit](http://thejit.org/), uma excelente biblioteca para visualização de dados.  

### _**Party**_  
Depois de um ótimo dia de palestras e conversas, ainda rolou uma festa no mesmo local do evento.  
Mais comida, e boas bebidas...  
Bom, algumas nem tão boas assim.  
Na fila para pegar uma bebida, pergunetei ao [Guillermo](https://twitter.com/#!/rauchg)(organizador do evento) qual seria a melhor bebida típica da Argentina para eu provar.  
Ele prontamente me aconselhou a pegar o _Fernet_.  
Ainda não sei se ele estava brincando, ou se realmente tomam essa coisa na Argentina.  

[![Party JSConfAR](http://jaydson.org/wp-content/uploads/546746_3772936957770_1923106332_n.jpg)](http://jaydson.org/wp-content/uploads/546746_3772936957770_1923106332_n.jpg)  

Depois ainda arriscamos procurar algum lugar legal pra ir, já que estávamos em Buenos Aires.  
Acabamos em Pub muito bom, muita gente, altas conversas em Portunhol e Spanglish.  
O som do lugar era sensacional, só música boa.  
Nesta noite, passei a respeitar o Flávio Silva.  
Mas quem se deu bem mesmo foi o Zeno.  

[![zeno e o urso](http://jaydson.org/wp-content/uploads/556720_3772937957795_1217810346_n.jpg)](http://jaydson.org/wp-content/uploads/556720_3772937957795_1217810346_n.jpg)  

### _**Segundo dia**_  
O segundo dia já começou muito bem com a palestra do [Jacob Thornton](http://twitter.com/fat).  
As palestras do Jacob são sempre engraçadas. Ele é engraçado.  
Ele falou sobre acessbilidade de uma maneira bem diferente. De fato, uma das melhores palestras do evento.  

Voltando a falar no Zeno, ele foi o representante brasileiro na JSConfAR.  
A palestra do Zeno com certeza ficou entre as melhores, e me arrisco a dizer que para muitos foi a melhor.  
Acompanhando os tweets deu para perceber que todos que estavam assistindo gostaram muito.  
A palestra do Zeno foi engraçada na medida certa, fazendo piadas com Pelé e Maradona, além de ser bem técnica e com um conteúdo que agradou a todos.  
O Zeno é o exemplo de que temos um potencial enorme no Brasil. Temos capacidade de exportar conhecimento e não apenas consumir o que é gringo.  

[![Palestra do Zeno](http://jaydson.org/wp-content/uploads/536665_3772951958145_1192200538_n.jpg)](http://jaydson.org/wp-content/uploads/536665_3772951958145_1192200538_n.jpg)  

Resumindamente, o evento foi isso.  
Hoveram várias outras palestras muito boas que não comentei aqui, e algumas nem tão boas, mas o evento foi show.  
A organização esta de parabéns, com certeza a JSConfAR está na minha lista de melhores eventos.  
Para finalizar, caímos em uma festa, que não vou comentar muito, vou apenas mostrar em uma imagem.  

[![Festa Loka](http://jaydson.org/wp-content/uploads/536104_3772955758240_1107157477_3457616_1803728076_n.jpg)](http://jaydson.org/wp-content/uploads/536104_3772955758240_1107157477_3457616_1803728076_n.jpg)

### _**Bônus**_  
Ainda conseguimos fazer uma entrevista exclusiva com uma galera de peso que estava no evento.  
Aproveitem!  
{% youtube wxDBF3OOaRA %}