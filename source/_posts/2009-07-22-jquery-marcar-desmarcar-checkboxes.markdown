---
comments: true
date: 2009-07-22 23:23:31
layout: post
slug: jquery-marcar-desmarcar-checkboxes
title: jQuery Marcar / Desmarcar CheckBoxes
wordpress_id: 239
categories:
- JavaScript
- Jquery
tags:
- JavaScript
- Jquery
---

You know when we have a very large list of <inputs> type checkbox, where the user has to select what options does he want?

Example:

Check1

Check2

Check3

Check4

Check5

Check6

Sabem quando temos uma lista bem grande de <inputs> do tipo checkbox, onde o usuário terá de selecionar quais são as opções desejadas?

Exemplo:



Check1

Check2

Check3

Check4

Check5

Check6

<!-- more -->

Well, now imagine that this list is a little bigger. It is extremely unpleasant to have to check or uncheck one by one.
A good practice is to put an option for the User select or clear all.

This is a very easy task to implement in "pure" Javascript , but the jQuery as that's always help.

**Solution:**

[javascript]

// We attribute to the variable ipts all &lt;inputs&gt; found within the element &quot;#checkboxes&quot;
var ipts = $(&quot;#checkboxes&quot;).find(&quot;input&quot;);

function checkAll()
{
// CheckBox that when clicked select or clear all elements
var check = document.getElementById(&quot;checkboxCheckAll&quot;);

// Test the CheckBox to see if must check or uncheck
check.checked ?
jQuery.each(ipts, function(){
// If checked so check all elements
this.checked = true;
}) :
jQuery.each(ipts, function(){
// If not uncheck all elements
this.checked = false;
});
}
[/javascript]

Simple and fast.

Tested with more than 50 elements and the routine did not exceed 2 milliseconds.

Bom, agora imaginem que esta lista é um pouco maior. Fica extremamente desagradável ter que marcar ou desmarcar um a um.
Uma boa prática é colocar uma opção para o usuário marcar ou desmarcar todos.

Isso é uma tarefa bem fácil de se implementar em Javascript "puro", mas o jQuery como sempre nos da aquela ajuda.

**Solução:**

[javascript]

// Atribuímos a variavel ipts todos os inputs encontrados dentro do elemento "#checkboxes"
var ipts = $("#checkboxes").find("input");

function checkAll()
{
// CheckBox que ao ser clicado marca ou desmarca todos elementos
var check = document.getElementById("checkboxCheckAll");

// Testamos o CheckBox para ver se devemos marcar ou desmarcar
check.checked ?
jQuery.each(ipts, function(){
// Se esta "checado" então marcamos todos elementos como checked=true
this.checked = true;
}) :
jQuery.each(ipts, function(){
// Se não esta "checado" então marcamos todos elementos como checked=false
this.checked = false;
});
}
[/javascript]

Simples e rápido.

Testei com mais de 50 elementos e a rotina não ultrapassou 2 milisegundos.
