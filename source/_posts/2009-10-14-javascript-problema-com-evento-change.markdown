---
comments: true
date: 2009-10-14 01:58:42
layout: post
slug: javascript-problema-com-evento-change
title: Javascript - Problema com Evento Change
wordpress_id: 319
categories:
- Browsers
tags:
- Browsers
---

Last week I encountered a problem in Internet Explorer **_(Déjà vu)_**.
The functionality we needed was very simple to implement:
**Check if the form was changed**. That is, if the User is on the page and decides to just go out and form has changed, we needed to alert him.
What I thought then was to use the event [change](http://www.quirksmode.org/dom/events/change.html) of the <form>.
Semana passada deparei-me com um problema no Internet Explorer **_(Déjà vu)_**.
A funcionalidade que precisavamos implementar era bem simples:
**Verificar se o formulário foi alterado. **Ou seja, se o usuário está na página e resolve simplesmente sair e o formulário foi alterado, precisavamos alerta-lo.
O que me ocorreu na hora foi utilizar o Evento [change](http://www.quirksmode.org/dom/events/change.html) do <form>.
<!-- more -->
I did the test in Firefox and everything went as planned. By changing the value of any element within the form the change event is fired.
But... in our "friend" Internet Explorer?
Surprise!
It did not work. So I went searching to see why the problem.
In this link  [http://www.quirksmode.org/dom/events/change.html](http://www.quirksmode.org/dom/events/change.html) of QuirksMode is quite easy to understand.
In Internet Explorer the change event is not fired when the form is changed.

**Note:** Realize that it is only in IE it happens. Below is a list of browsers that support the change event in the form:







FF 2.0
FF 3.0
FF 3.1b2
Saf 3.0 Win
Saf 3.1 Win
iPhone 3G
Chrome 1.0
Opera 9.62
Opera 10a
Konqueror 3.5.7


Font: QuirksMode. **Another Note:** In IE the change event is not fired in the window and document objects. In all the above list does.
For Internet Explorer the only element that triggers the change event properly is the <input>.

**Solution****:**
As the project was using jQuery was simple to solve another problem in IE. Follow the code below:

[javascript]

$(&quot;form *&quot;).bind(&quot;change&quot;, function(){ /* Code here*/});

[/javascript]

The above code loops over all elements of form and atach the change event for each of them.

Well, that's it.
Working and learning.

**** 










FF 2.0
FF 3.0
FF 3.1b2
Saf 3.0 Win
Saf 3.1 Win
iPhone 3G
Chrome 1.0
Opera 9.62
Opera 10a
Konqueror 3.5.7





Fiz o teste no Firefox e tudo ocorreu como o previsto. Ao alterar o valor de qualquer elemento dentro do formulário o evento change é disparado.
Mas... e no nosso "amigo" Internet Explorer?
Surpresa!
Não funcionou. Então fui pesquisar para ver o porque do problema.
Neste link  [http://www.quirksmode.org/dom/events/change.html](http://www.quirksmode.org/dom/events/change.html) do QuirksMode fica bem fácil de entender.
O que acontece é que no Internet Explorer o evento change não é disparado ao alterar um formulário.

**Nota:** Percebam que é somente no IE que isso acontece. Abaixo segue a lista de Browsers que suportam o evento change no Formulário:







FF 2.0
FF 3.0
FF 3.1b2
Saf 3.0 Win
Saf 3.1 Win
iPhone 3G
Chrome 1.0
Opera 9.62
Opera 10a
Konqueror 3.5.7


Fonte: QuirksMode. **Outra Nota:** No IE o evento change também não é disparado nos objetos window e document. Em todos da lista acima sim.
Para o Internet Explorer o único elemento que dispara o evento change corretamente  é o <input>.

**Solução:**
Como o projeto estava utilizando jQuery foi simples resolver mais um problema no IE. Segue o código abaixo:

[javascript]

$("form *").bind("change", function(){ /* Código aqui*/});

[/javascript]

O código acima varre todos elementos do formulário e "atacha" o evento change para cada um deles.

Bom, é isso.
Trabalhando e aprendendo.

**** 










FF 2.0
FF 3.0
FF 3.1b2
Saf 3.0 Win
Saf 3.1 Win
iPhone 3G
Chrome 1.0
Opera 9.62
Opera 10a
Konqueror 3.5.7



