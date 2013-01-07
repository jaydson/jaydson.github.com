---
comments: true
date: 2009-07-12 22:04:10
layout: post
slug: json-nativo-firefox-3-5
title: JSON nativo Firefox 3.5
wordpress_id: 224
categories:
- Firefox
- JSON
tags:
- Firefox
- JSON
---

Much news and useful things for us developers in Firefox 3.5.
New Javascript engine, HTML 5 support among many others. [Click here ](https://developer.mozilla.org/En/Firefox_3.5_for_developers)in case you have not seen (you should if you are developer).

Although the native JSON already be since version 3.1, now it become clear.

Well, i will not comment on what is JSON, because I have done this in another post, so if you do not know what is JSON (should if you are a developer) see my [old post](http://jaydson.org/json/), or better yet, access the [official page](http://json.org/).

Muita coisa nova e útil para nós desenvolvedores no Firefox 3.5.
Novo motor Javascript, suporte HTML 5 entre várias outras. [Acessem aqui ](https://developer.mozilla.org/En/Firefox_3.5_for_developers)caso ainda não tenham visto(deveriam caso sejam desenvolvedores).

Apesar de o JSON já ser nativo desde a versão 3.1, agora é que isso ficou bem evidenciado.

Bom, não vou comentar o que é JSON, até porque já fiz isto em outro post, então caso não saiba o que é JSON(deveria se é desenvolvedor) veja o meu [post antigo](http://jaydson.org/json/), ou melhor ainda, acesse a [página oficial](http://json.org/).

<!-- more -->

**What is native JSON in the browser?**
Well, it means that the developer does not need to use any extra library to parse a JSON object, and also do not need to use the native Javascript  [eval()](http://www.w3schools.com/jsref/jsref_eval.asp) function to do that, what is desirable for insecurity of this function.

**Benefits**:
Several.
Firstly the ability to parse a JSON without using eval (). That's extremely useful because the eval () performs all the received string without doing any analysis, ie, if the string contains functions, these will be implemented.
Therefore use native JSON is much safer, because functions are not supported. Is made an analyze in the string received and then the conversion is made only of the properties of the object.
Another feature is this analysis in the string, if JSON is malformatted generate a parse error.
And the benefit I like the most: **Speed!**
Yes, JSON parse natively is very fast, even!
How to prove it?
Simple... Code!

First I created a JSON file that I got the sample from the Mozilla blog where they explain about the use of the native JSON.
This file is pretty large, has an array of **2918 objects.
**I will not put the code here for obvious reasons ... but follow the link for those who have curiosity to see him: [http://graphs-stage.mozilla.org/api/test](http://graphs-stage.mozilla.org/api/test)

Now for the javascript code using jQuery to do an Ajax request and get the contents of this file.

[javascript]

var json = $.ajax({
url: "test.json",
async: false
}).responseText;

[/javascript]

This snippet of code shows that the variable json now has the contents of the file (the one with 2918 and large objects).

Now we have the big String let transforms it into a JSON object.
First using **eval()**:

[javascript]

var obj = eval('(' + json + ')');

[/javascript]

And now using native parser!!! O/

[javascript]

var obj = JSON.parse(json);

[/javascript]

For those who have used the JS library available in [json.org](http://json.org) can see that the syntax is the same, the difference associated here is that we are working natively.
Well, we know that native parser is more safe than eval(), but how to know about the speed?
The [Firebug](http://getfirebug.com/) hepl us.
Lets see the code, first we measure the time in miliseconds with eval():

[javascript]

console.time("Eval");
var obj = eval('(' + json + ')');
console.timeEnd("Eval");

[/javascript]

For those who do not know (if you are a developer should), Firebug has an API that helps developers in several ways, discussed here is the function console.time (), which can measure time in milliseconds for a given instruction.

**Result with eval():** 4004ms to execute the parse.

Now with native parser:

[javascript]

console.time("JSON.parse");
var obj = JSON.parse(json);
console.timeEnd("JSON.parse");

[/javascript]

**Result with JSON.parse:** 50ms to execute the parse.

Well, do not need comment, the results speak for themselves.

You may be thinking now that all that is beautiful, but that only works in Firefox...   :(
But as JSON is increasingly used throughout the world in various types of applications, not just Mozilla that implements this solution natively.
Believe, the IE 8 too has native JSON support. See with your eyes: [http://blogs.msdn.com/ie/archive/2008/09/10/native-json-in-ie8.aspx](http://blogs.msdn.com/ie/archive/2008/09/10/native-json-in-ie8.aspx)

But of course we can not count on the support of all browsers, and we can use any library that plays this role. I nominate that in site json.org: [http://www.json.org/json2.js](http://www.json.org/json2.js)

In the examples above showed how to parse a string into a JSON object, but we can also do the reverse:

[javascript]

var Person = {};
Person.name = "Jaydson&quot";
Pessoa.idade = "25";

var jsonString = JSON.stringify(Person);
console.log(jsonString);

[/javascript]

In the example we create a JavaScript object, and then turn it into a JSON:

[javascript]

{"name":"Jaydson","idade":"25"}

[/javascript]

References:
[http://blog.mozilla.com/webdev/2009/02/12/native-json-in-firefox-31/](http://blog.mozilla.com/webdev/2009/02/12/native-json-in-firefox-31/)
[https://developer.mozilla.org/en/Using_JSON_in_Firefox](https://developer.mozilla.org/en/Using_JSON_in_Firefox)
[http://www.json.org/](http://www.json.org/)
[http://blogs.msdn.com/ie/archive/2008/09/10/native-json-in-ie8.aspx](http://blogs.msdn.com/ie/archive/2008/09/10/native-json-in-ie8.aspx)
[http://starkravingfinkle.org/blog/2008/02/extension-developers-native-json-parsing/](http://starkravingfinkle.org/blog/2008/02/extension-developers-native-json-parsing/)

**O que significa JSON nativo no browser?**
Bom, isso significa que o desenvolvedor não precisará usar nenhuma biblioteca extra para fazer o parse de um objeto JSON, e também não será necessário usar a função [eval()](http://www.w3schools.com/jsref/jsref_eval.asp) nativa no Javascript para fazer isso, o que é bem aconselhável pela insegurança desta função.

**Benefícios**:
Vários.
Em primeiro lugar a possibilidade de parsear um objeto JSON sem o uso do eval(). Isso é extramamente útil pois o eval() executa toda a string recebida sem fazer nenhuma análise, ou seja, se a string contiver funções, estas serão executadas.
Por esse motivo usar JSON nativo é muito mais seguro, pois não são suportadas funções. É feita uma análise na string recebida e então a conversão é feita apenas das propriedades do objeto.
Outra funcionalidade é esta análise feita na string, se o JSON estiver mal formatado será gerado um parse error.
E o benefício que mais me agrada: **Rapidez**!
Sim, o parse de um objeto JSON nativamente é muito rápido, mesmo!
Como provar isso?
Simples... Código!

Primeiro criei um arquivo JSON que peguei de exemplo no blog da [Mozilla](http://blog.mozilla.com/webdev/2009/02/12/native-json-in-firefox-31/) onde eles explicam sobre o uso do JSON nativo.
Este arquivo é consideravelmente grande, possui um array com **2918 objetos.
**Não vou colocar o código aqui por razões óbvias...mas segue o link pra quem tiver curiosidade de ve-lo: [http://graphs-stage.mozilla.org/api/test](http://graphs-stage.mozilla.org/api/test)

Agora vamos ao código javascript usando jQuery para fazer uma requisição Ajax e buscar o conteúdo desse arquivo.

[javascript]

var json = $.ajax({
url: "test.json",
async: false
}).responseText;

[/javascript]

Este pequeno trecho do código mostra que a variável **json **agora possui o conteudo do arquivo(aquele bem grande com 2918 objetos).

Agora que temos uma "Stringona" vamos tranforma-la em um objeto JSON.
Primeiro usando o **eval()**:

[javascript]

var obj = eval('(' + json + ')');

[/javascript]

E agora usando o parser nativo !!! O/

[javascript]

var obj = JSON.parse(json);

[/javascript]

Para quem já usou  a biblioteca JS disponível no [json.org](http://json.org) pode notar que a sintaxe é a mesma, a direrença aqui é que estamos trabalhando nativamente.
Bom, sabemos que o parser nativo é mais seguro que o eval(), mas como saber se é mais rápido?
O [Firebug](http://getfirebug.com/) nos ajuda a medir isso.
Vamos ver o código, primeiro medindo o tempo em milisegundos com o eval():

[javascript]

console.time("Eval");
var obj = eval('(' + json + ')');
console.timeEnd("Eval");

[/javascript]

Para quem não sabe (se é desenvolvedor deveria ), o Firebug possui uma API que ajuda os desenolvedores de várias maneiras, a abordada aqui  é a função console.time(), que consegue medir o tempo em milisegundos de uma determinada instrução.

**Resultado com eval():** 4004ms para executar o parse.

Agora com parser nativo:

[javascript]

console.time("JSON.parse");
var obj = JSON.parse(json);
console.timeEnd("JSON.parse");

[/javascript]

**Resultado com JSON.parse:** 50ms para executar o parse.

Bom, nem preciso comentar, os resultados falam por si só.

Voces devem estar pensando agora que tudo isso é lindo, mas que  só funciona no Firefox...   :(
Mas como JSON é cada vez mais usado por todo o mundo em diversos tipos de aplicações, não é apenas a Mozilla que implementa esta solução nativa.
Acreditem, o IE 8 também possui suporte nativo a JSON. Veja com seus próprios olhos: [http://blogs.msdn.com/ie/archive/2008/09/10/native-json-in-ie8.aspx](http://blogs.msdn.com/ie/archive/2008/09/10/native-json-in-ie8.aspx)

Mas claro que ainda não podemos contar com o suporte de todos os Browsers, e para isso podemos usar alguma biblioteca que desempenhe este papel. Eu indico a própria do site json.org: [http://www.json.org/json2.js](http://www.json.org/json2.js)

Nos exemplos acima mostrei como parsear uma string em um objeto JSON, mas podemos fazer o inverso também:

[javascript]

var Pessoa = {};
Pessoa.nome = "Joaozinho";
Pessoa.idade = "30";

var jsonString = JSON.stringify(Pessoa);
console.log(jsonString);

[/javascript]

No exemplo criamos um objeto Javascript, e em seguida o transformamos em um JSON:

[javascript]

{"nome":"Joaozinho","idade":"30"}

[/javascript]

Buenas pessoal, por hora é isso.

Referências:
[http://blog.mozilla.com/webdev/2009/02/12/native-json-in-firefox-31/](http://blog.mozilla.com/webdev/2009/02/12/native-json-in-firefox-31/)
[https://developer.mozilla.org/en/Using_JSON_in_Firefox](https://developer.mozilla.org/en/Using_JSON_in_Firefox)
[http://www.json.org/](http://www.json.org/)
[http://blogs.msdn.com/ie/archive/2008/09/10/native-json-in-ie8.aspx](http://blogs.msdn.com/ie/archive/2008/09/10/native-json-in-ie8.aspx)
[http://starkravingfinkle.org/blog/2008/02/extension-developers-native-json-parsing/
](http://starkravingfinkle.org/blog/2008/02/extension-developers-native-json-parsing/)

Sintam-se a vontade para comentar, criticar, perguntar, etc.
