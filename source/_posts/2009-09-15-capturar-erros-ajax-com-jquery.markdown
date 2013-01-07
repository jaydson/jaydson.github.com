---
comments: true
date: 2009-09-15 02:15:15
layout: post
slug: capturar-erros-ajax-com-jquery
title: Capturar erros Ajax com jQuery
wordpress_id: 272
categories:
- Jquery-Plugins
tags:
- Jquery-Plugins
---

Catch Ajax errors is a task that jQuery gives us a good help.
What I mean by that is that the library provides us with a lot of useful information that often go unnoticed by developers.
The first thing to note is the **error **event.
In this event we can pass a function (callback) that will be executed when the request fails.
3 parameters are passed to this function: The XMLHttpRequest object, a String that describes the type of error that occurred and an exception object (optional).
A good point is that we will never have the **Success **and **Error **event together in the same request (that means obvious).

Capturar erros Ajax é mais uma tarefa que o jQuery nos da uma boa ajuda.
O que quero dizer com isso é que a biblioteca nos fornece uma série de informações úteis que as vezes passam desapercebidas pelos desenvolvedores.
A primeira coisa a se notar é o evento **error**.
Neste evento podemos passar uma função(_callback_) que será executada quando a requisição falhar. São passados 3 parâmetros para esta função:
O objeto XMLHttpRequest, uma String que descreve o tipo do erro que aconteceu e um objeto exceção(opcional).
Uma boa observação é que nunca teremos o evento **Success **e o evento **Error **juntos na mesma requisição(meio óbvio isso).

<!-- more -->
Let's take a simple example of an Ajax request:

[javascript]

$.ajax({
type: "POST",
url: "teste.php",
success: function(retorno){
alert(retorno);
}
});

[/javascript]

In this example we make an Ajax request and success give a alert of the content returned.
But what if we give some kind of mistake?
If we want to catch the error and get some treatment, or simply display the error.
We will now see an example of capturing the error:

[javascript]

$.ajax({
type: "POST",
url: "teste.php",
success: function(retorno){
alert(retorno);
},
error: function(XMLHttpRequest, textStatus, errorThrown){
alert("Error!");
}
});

[/javascript]

Now grab the error and give an error alert in the event of failed requests.
Now to be more useful, we see the properties and methods of the XMLHttpRequest object.
Just make a "for in" in the object that we get all their properties. Below I list some:
**
dispatchEvent()
removeEventListener()
open()
setRequestHeader()
send()
readyState
status
channel
responseXML
responseText
statusText
abort()
getAllResponseHeaders()
getResponseHeader()**

** **


If you want to do the test and scan the object and see its properties:


[javascript]
for(i in XMLHttpRequest){
if(i!="channel")
document.write(i +" : " + XMLHttpRequest[i] +"<br>")
}
[/javascript]

* This filter testing whether the property is "channel" is necessary because the browser generates an exception permission denied to view this property.

Well, with this you can have a good grasp on how to catch Ajax errors, now what to do with them is with you.
I used this very technique in Ajax handling on project [TheWebMind.org](http://thewebmind.org/), and some other systems.
I am preparing a plugin for jQuery which will help a lot.
Here is a preview of what already implemented below:

[javascript]
error: function(XMLHttpRequest, textStatus, errorThrown){
$(XMLHttpRequest).AjaxDebug({
containerId : "load",
nativeConsole : false
});
}
[/javascript]

The idea is to provide a console that displays this information, or pass the information to a particular element.
Soon post here when you're done!

Of course, let's not forget the [Firebug](http://getfirebug.com/) is an excellent debugger for Ajax too.
Vamos a um exemplo simples de uma requisição Ajax:

[javascript]

$.ajax({
type: "POST",
url: "teste.php",
success: function(retorno){
alert(retorno);
}
});

[/javascript]

Neste exemplo fazemos uma requisição Ajax e no sucesso damos um alerta do conteúdo retornado.
Mas e se der algum tipo de erro?
Vai de aplicação para aplicação, mas dependendo do caso podemos querer capturar o erro e fazer algum tratamento, ou simplesmente mostrar o erro.
Vamos agora ver um exemplo capturando o erro:

[javascript]

$.ajax({
type: "POST",
url: "teste.php",
success: function(retorno){
alert(retorno);
},
error: function(XMLHttpRequest, textStatus, errorThrown){
alert("Erro!");
}
});

[/javascript]

Agora capturamos o erro e damos um alerta de erro caso ocorra falha na requisição.
Agora para ficar pouco mais útil, vamos ver as propriedades e métodos do objeto XMLHttpRequest.
Basta fazer um "for in" no objeto que conseguimos pegar todas suas propriedades. Abaixo listo algumas:
**
dispatchEvent()
removeEventListener()
open()
setRequestHeader()
send()
readyState
status
channel
responseXML
responseText
statusText
abort()
getAllResponseHeaders()
getResponseHeader()
**
Caso queiram fazer o teste e varrer o objeto e ver suas propriedades:

[javascript]
for(i in XMLHttpRequest){
if(i!="channel")
document.write(i +" : " + XMLHttpRequest[i] +"<br>")
}
[/javascript]

OBS:
Este filtro testando se a propriedade é "channel" é necessário, pois o browser gera uma exceção de permissão negada para ler essa propriedade.

Bom, com isso já da pra ter uma boa noção sobre como capturar erros Ajax, agora o que fazer com eles é com vocês.
Usei bastante esta técnica na manipulação de Ajax no projeto [TheWebMind.org](http://thewebmind.org), e em alguns outros sistemas.
Estou preparando um plugin para o jQuery que auxiliará bastante.
Segue uma prévia do que já implementei abaixo:

[javascript]
error: function(XMLHttpRequest, textStatus, errorThrown){
$(XMLHttpRequest).AjaxDebug({
containerId : 'load',
nativeConsole : false
});
}
[/javascript]

A idéia é fornecer um console que mostre estas informações, ou passar as informações para um determinado elemento.
Em breve posto aqui quando estiver pronto!

E claro, não vamos esquecer do [Firebug](http://getfirebug.com) que é um excelente debugador para Ajax também.
