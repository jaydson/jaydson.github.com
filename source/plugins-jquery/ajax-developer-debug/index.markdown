---
comments: true
date: 2009-10-03 00:53:06
layout: page
slug: ajax-developer-debug
title: Ajax Developer Debug
wordpress_id: 302
---

## **Description:**


Ajax Developer Debug is a plugin for debugging XMLHttpRequest requests.
The plugin allows you to capture all the errors returned by Ajax on jQuery.
This plugin can be used in a development environment to show errors at runtime, or even enter these errors in an HTML element in your Web Application.


## **Historic:**


I decided to create this plugin, for which the project which I am developer / co-founder ([thewebmind.org](http://thewebmind.org)) we had the need to be able to view all the possible errors returned in Ajax requests.
As TheWebMind is all "Ajax oriented", we create a server-side engine (PHP) that handles the HTTP error codes forcing for each thrown exception on the server (To learn more about this access: [http://felipenascimento.org/triggering-http-errors/](http://felipenascimento.org/triggering-http-errors/)).
With Javascript, using jQuery we've created an engine that captures these errors, and returns in a friendly way.


## ****How to use the Plugin:****


To use the plugin just call AjaxDebug() in the **[error](http://docs.jquery.com/Ajax/jQuery.ajax#options)** event in your jQuery Ajax request.

[javascript]

$.ajax({
type:'POST',
url: 'taeste.php',
success: function(msg){
alert(msg)
},
error: function(XMLHttpRequest, textStatus, errorThrown){
$(XMLHttpRequest).AjaxDebug({
containerId : 'load'
nativeConsole : false
});
}
});

[/javascript]


## ********Docs:********


For each request call AjaxDebug() on error event passing the XMLHttpRequest object.
******** ******** ********
Properties:
**********containerId** - (String) Specifies the id of the element where the error should be returned.
**nativeConsole** - (True|False)  Specifies whether the native console should be displayed.


## ****************Examples:****************


**1. **The Request will generate error, because the php page does not exist.
containerId specifies that the return goes to element with id="load" and nativeConsole=false specifies that will not be a console:

[javascript]
$.ajax({
type: 'POST',
url: 'taeste.php',
success: function(msg){
alert(msg);
},
error: function(XMLHttpRequest, textStatus, errorThrown){
$(XMLHttpRequest).AjaxDebug({
containerId : 'load',
nativeConsole : false
});
}
});

[/javascript]

**2.**The Request will generate error, because the php page does not exist.
nativeConsole=true specifies that the native console must be enabled.

[javascript]

$.ajax({
type: 'POST',
url: 'testea.php',
success: function(msg){
alert(msg);
},
error: function(XMLHttpRequest, textStatus, errorThrown){
$(XMLHttpRequest).AjaxDebug({
nativeConsole : true
});
}
});

[/javascript]

[![example](http://jaydson-org.web102.redehost.com.br/assets/example3.jpg)](http://jaydson.org/code/jquery/plugins/ajax-developer-debug/) [![download](http://jaydson-org.web102.redehost.com.br/assets/download1.png)](http://jaydson.org/code/jquery/plugins/ajax-developer-debug/ajax-developer-debug.rar)

## **Descrição:**


Ajax Developer Debug é um plugin para debugar requisições XMLHttpRequest.
O plugin permite que você capture todos os erros retornados pelo Ajax no jQuery.
Este plugin pode ser utilizado em um ambiente de desenvolvimento para mostar erros em tempo de execução, ou ainda inserir esses erros em um elemento HTML na sua Aplicação Web.


## **Histórico:**


Decidi criar este plugin, pois no projeto cujo qual sou desenvolvedor/co-fundador ([thewebmind.org](http://thewebmind.org)) tinhamos a necessidade de conseguir visualizar todos os possíveis erros retornados em requisições Ajax.
Como o TheWebMind é todo "orientado a Ajax", criamos uma engine server-side([PHP](http://php.net)) que manipula os erros forçando códigos HTTP para cada exceção gerada no servidor(Para saber mais sobre esta técina acesse: [http://felipenascimento.org/triggering-http-errors/](http://felipenascimento.org/triggering-http-errors/)).
Com Javascript, utilizando jQuery criamos uma engine que captura esses erros, e nos devolve de maneira amígavel.


## ****Como usar o Plugin:****


Para usar o plugin basta adicioanar uma chamada a AjaxDebug() no evento **[error](http://docs.jquery.com/Ajax/jQuery.ajax#options)** da requisição Ajax no jQuery:

[javascript]

$.ajax({
type: "POST",
url: "taeste.php",
success: function(msg){
alert(msg)
},
error: function(XMLHttpRequest, textStatus, errorThrown){
$(XMLHttpRequest).AjaxDebug({
containerId : "load",
nativeConsole : false
});
}
});

[/javascript]


## ********Documentação:********


Para cada requisição chame AjaxDebug() no evento error passando o objeto XMLHttpRequest.
******** ******** ********
Propriedades:
**********containerId** - (String) Especifica o id do elemento onde o erro deve ser retornado.
**nativeConsole** - (True|False)  Especifica se deve ser exibido o console nativo para exibição de erros.


## ****************Exemplos:****************


**1. **Requisição gerará erro, pois a página php não existe. 
containerId especifica que o retorno vai para  o elemento com a id="load" e nativeConsole=false especifica que não haverá console:

[javascript]
$.ajax({
type: "POST",
url: "taeste.php",
success: function(msg){
alert(msg);
},
error: function(XMLHttpRequest, textStatus, errorThrown){
$(XMLHttpRequest).AjaxDebug({
containerId : "load",
nativeConsole : false
});
}
});

[/javascript]

**2. **Requisição gerará erro, pois a página php não existe.
nativeConsole=true especifica que  o console nativo deve ser ativado.

[javascript]

$.ajax({
type: "POST",
url: "testea.php",
success: function(msg){
alert(msg);
},
error: function(XMLHttpRequest, textStatus, errorThrown){
$(XMLHttpRequest).AjaxDebug({
nativeConsole : true
});
}
});

[/javascript]

[![exemplo](http://jaydson-org.web102.redehost.com.br/assets/exemplo1.png)](http://jaydson.org/code/jquery/plugins/ajax-developer-debug/) [![download](http://jaydson-org.web102.redehost.com.br/assets/download1.png)](http://jaydson.org/code/jquery/plugins/ajax-developer-debug/ajax-developer-debug.rar)
