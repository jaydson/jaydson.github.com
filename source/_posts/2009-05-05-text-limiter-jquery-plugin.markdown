---
comments: true
date: 2009-05-05 01:18:59
layout: post
slug: text-limiter-jquery-plugin
title: Text Limiter - Jquery Plugin
wordpress_id: 102
categories:
- Jquery-Plugins
- RIA
- TheWebMind
tags:
- Jquery-Plugins
---

O primeiro **Plugin Jquery **da série que selecionei foi o** [Text Limiter - Jquery Plugin](http://www.burobjorn.nl/code/textlimiter/)**.
Como o próprio nome já diz, o que o Plugin faz é limitar um campo de texto a "N" caracteres.
Isso é muito útil, pois em qualquer formulário que fazemos sempre tem algum campo que precisa ser validado desta forma.

Para sua implementação nada mais do que uma linha de código é necessária, veja no exemplo abaixo:

[javascript]

$("textarea[maxlength]").textLimiter();

[/javascript]

Neste exemplo, o que o Plugin faz é varrer todos inputs <textarea> e aplicar a restrição se baseando no atributo "maxlength".

**Nota:** O atributo maxlength não é padrão em um elemento <textarea> assim como em um elemento <input>.
Para mais detalhes sobre o elemento <textarea> acesse [http://www.w3schools.com/TAGS/tag_textarea.asp](http://www.w3schools.com/TAGS/tag_textarea.asp)

Se no seu formulário existem vários elementos <textarea>, mas para cada um deles existe uma validação de tamanho diferente, o que pode ser feito é especificar o ID do elemento, ficando então:

[javascript]

$("#meu_textarea1[maxlength]").textLimiter();
$("#meu_textarea2[maxlength]").textLimiter();
$("#meu_textarea3[maxlength]").textLimiter();

[/javascript]

Neste exemplo o Plugin aplicará a restrição de acordo com o atributo "maxlength" de cada <textarea> identificado pela ID.

Para um elemento do tipo <input>, não há nada de diferente dos exemplos anteriores, basta especificar a ID, ou varrer todos elementos:

[javascript]
$("#meu_input1[maxlength]").textLimiter();
$("#meu_input2[maxlength]").textLimiter();

[/javascript]

O elemento <input> por padrão tem o atributo maxlength. Então se for especificado algum tamanho (Ex: maxlength=10) , mesmo sem utilizar o Plugin, este campo será limitado a este valor.
A vantagem de usar o Plugin é que ele incrementa essa restrição visualmente, mostrando a quantidade de caracteres restantes para tal elemento.

**Exemplo:**



     




**Minha Avaliação: Nota 8.0**
**Compatibilidade: Firefox 2.0+, IE 6+, Safari 3.0+, Chrome 2.0+**

[caption id="attachment_114" align="alignnone" width="65" caption="Download"][![Download Text Limiter](http://jaydson-org.web102.redehost.com.br/assets/hd_download1.jpg)](http://www.burobjorn.nl/code/textlimiter/textcounter_limiter_code_v0.1.zip)[/caption]

**Site oficial do Plugin:**[ http://www.burobjorn.nl/code/textlimiter/](http://www.burobjorn.nl/code/textlimiter/)
