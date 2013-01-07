---
comments: true
date: 2009-05-07 01:29:31
layout: post
slug: text-area-resizer-jquery-plugin
title: Text Area Resizer - JQuery Plugin
wordpress_id: 121
categories:
- Jquery-Plugins
tags:
- Jquery-Plugins
---

Seguindo o [Post anterior](http://jaydson.org/text-limiter-jquery-plugin/), vamos continuar com campos de texto.
Quando desenvolvemos um formulário onde existem vários campos a preencher, muitas vezes ocorre de um <textarea> que poderá conter "**N**" caracteres ficar expremido, com um tamanho inferior ao texto que receberá. Por padrão quando isso acontece, o <textarea> cria uma barra de rolagem.
Mas para quem está digitando isso não é muito agradável, pois a medida que se escreve, o texto acima desaparece.
O Google Chrome já implementou uma solução para isso, assim como o Safari.  Por padrão os campos do tipo <textarea> nesses Browsers possuem uma opção de Resize. Desta maneira,  o usuário tem autonomia sobre o <textarea>, podendo redimensiona-lo de forma a ficar do seu gosto.

Mas e quanto ao Firefox e IE?

Bom, esses Browsers ainda não possuem essa funcionalidade, então o que vamos fazer é implementar um Plugin que faz algo semelhante.
Novamente seguindo a filosofia "Write Less, Do More" do Jquery, o necessário para adicionar esta funcionalidade em nossos <textareas> é apenas uma linha:

[javascript]

$('textarea.resizable(.processed)').TextAreaResizer();

[/javascript]

O que esta linha faz?
Bom, bem simples de entender. Todos os <textareas> com a classe "resizable" terão a funcionalidade de redimensão.

**Nota:** O Plugin aplica a funcionalidadede redimensão apenas na altura.

**Vamos ver o Plugin em ação:**



     




**Minha Avaliação: Nota 8.0**
**Compatibilidade: Firefox 2.0+, IE 6+, Safari 3.0+, Chrome 2.0+**

**Obs: **Apesar de funcionar no Safari e no Chrome, não faz sentido algum aplicar isso para estes Browsers, pois como expliquei acima, estes já possuem tal funcionalidade.

[caption id="" align="alignnone" width="60" caption="Download "][![Download ](http://jaydson-org.web102.redehost.com.br/assets/hd_download1.jpg)](http://jaydson.org/code/jquery/plugins/textarea-resizer-1.0.4/TextAreaResizer-1.0.4.rar)[/caption]

**Site oficial do Plugin:**[ http://plugins.jquery.com/project/TextAreaResizer](http://plugins.jquery.com/project/TextAreaResizer)
