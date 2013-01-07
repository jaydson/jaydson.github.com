---
comments: true
date: 2009-06-14 04:21:38
layout: post
slug: serializando-um-formulario-com-jquery
title: Serializando um formulário com jQuery
wordpress_id: 186
---

Today I came to talk about one of the methods that I find very interesting in Jquery, the [serialize()](http://docs.jquery.com/Ajax/serialize).
As its name implies, this method serializes a set of inputs of a form on a string.
This string is standardized and compatible with most server-side language.
This is very useful for example when we want to send a series of data to the server with Ajax.

**How?**

Well, start creating the form:

Buenas pessoal!

Hoje vim falar sobre um dos métodos que acho bem interessante no Jquery, o [serialize()](http://docs.jquery.com/Ajax/serialize).
Como o próprio nome já diz, esse método serializa um conjunto de inputs de um formulário em uma string.
Essa string é padronizada e compatível com  a maioria das linguagens server-side.
Isso é muito útil por exemplo quando queremos enviar uma série de dados para o servidor com Ajax.

**Como fazer?**

Bom, começamos criando o formulário:

<!-- more -->

[html]
<form action='page.php' id='my_form'>
<input type='text' name='input_1'>
<input type='text' name='input_2'>
<input type='text' name='input_3'>
</form>
[/html]

Note that we have created a form of traditional way, but omit the method attribute in the tag <form>, because this will be addressed later.

**How to Serialize?**

With a line the Jquery lets you do this, let the example:

[javascript]

var formdata = $('#my_form').serialize();

[/javascript]

Now the formdata variable is a string serialized like:

input_1=valor1&input_2=valor2&input_3=valor3

The string is in this format key/value concatenated with "&".
Now that we have the string, just pass it to the server. How? Quite simply with the jQuery [Ajax()](http://docs.jquery.com/Ajax/jQuery.ajax#options) method:

[javascript]

$.ajax({
type: 'POST';,
url: form.attr('action'),
data: formdata,
success: function(msg){
alert('Sucesso!');
}
});

[/javascript]

Remember that we omit the method attribute of the form?
We did this because we are making an Ajax request using the POST method, anyway it would be ignored in our example.

Ajax:
**type - **Specify the method how data will be sent to the server. In our example we're using POST.
**url **-  Specifies the page to which the data will be submitted. In our example I'm taking the action attribute of the form, which will cause the data to be submitted to the file page.php.
**data** - The data to be submitted. The serialized string is passed here.
**success** - Function to perform when we are successful. In the example, an alert.

Done!

We have created a form, all inputs serialized in a string, send all data to a PHP page via Ajax.
Simple.

Any doubt please comment.


<input type="text" name="input_1">



[html]
<form action="minha_pagina.php" id="meu_formulario">
<input type="text" name="input_1">
<input type="text" name="input_2">
<input type="text" name="input_3">
</form>
[/html]

Note que criamos um formulário de maneira tradicional, porém omitimos o atributo method na tag <form>, pois esse será tratado mais adiante.

**Bom, e agora como Serializar?**

Com uma linha o Jquery permite que façamos isso, vamos ao exemplo:

[javascript]

var formdata = $("#meu_formulario").serialize();

[/javascript]

Agora a variável formdata é uma string serializada mais ou menos como essa:

input_1=valor1&input_2=valor2&input_3=valor3

A string fica com esse formato de chave/valor concatenadas com "&".
Agora que temos a string, basta passa-la para o servidor. Como fazer isso? De maneira bem simples com o método [Ajax()](http://docs.jquery.com/Ajax/jQuery.ajax#options) do Jquery:

[javascript]

$.ajax({
type: "POST",
url: form.attr('action'),
data: formdata,
success: function(msg){
alert('Sucesso!');
}
});

[/javascript]

Lembram que omitimos o atributo method do form?
Fizemos isso porque estamos fazendo um requisição Ajax usando o método Post, de qualquer maneira ele seria ignorado em nosso exemplo.

Vamos ao Ajax:
**type - **Especifica o método de como os dados serão enviados ao servidor. Em nosso exemplo estamos usando POST.
**url **-  Especifica para qual a página os dados serão submetidos. No nosso exemplo estou pegando o atributo action do formulario, o que fará com que os dados sejam submetidos para o arquivo minha_pagina.php.
**data** - Os dados que serão submetidos. A string serializada é passada aqui.
**success** - Função que será executada quando obtivermos sucesso. No exemplo, um alerta.

Pronto!

Criamos um formulário, serializamos todos os inputs em uma string, enviamos todos os dados para um página PHP via Ajax.
Simples não?

Por hoje é isso.

Qualquer dúvida postem ai.


<input type="text" name="input_1">
