---
comments: true
date: 2009-05-20 01:47:39
layout: post
slug: gradient-jquery-plugin
title: Gradient - Jquery Plugin
wordpress_id: 159
categories:
- Jquery-Plugins
tags:
- Jquery-Plugins
---

Veja aqui o exemplo: [http://jaydson.org/code/jquery/plugins/gradient/index.html](../code/jquery/plugins/gradient/index.html)

Javascript is a very powerful programming language . Do not say this only because i love the language, but for daily work with Javascript and see its power.
Frameworks help of course, but do not forget that everythingh is all the more pure and beautiful Javascript.
In the list that I participate, I see some people mistakenly confuse it a little, but it's coming the next Post.

Javascript é realmente uma linguagem de programação muito poderosa. Não falo isso só por ser apaixonado pela linguagem, mas sim por diariamente programar Javascript e ver o seu poder.
Frameworks ajudam claro, mas não se esqueçam que no fundo é tudo o mais puro e belo Javascript.
Na lista do Jquery que participo, seguido vejo algumas pessoas equivocadamente confundindo um pouco isso, mas isso fica pra um próximo Post.

<!-- more -->

What I will address in this Post is a very good plugin developed by [Brandon Aaron](http://brandonaaron.net/).
For those who do not know, this guy lives down in Texas and is a leading member of  [jQuery developers team](http://docs.jquery.com/Contributors).

The basic idea of the plugin is creating the effect of Gradient (going from one color to another) in an HTML element. That's right! No more Photoshop.  O /
What we need: obviously the [Jquery](http://docs.jquery.com/Downloading_jQuery), and the [Gradient plugin](http://github.com/brandonaaron/jquery-gradient/tree/master).

But this time go a little further...
The plugin allows us to specify the initial RGB code, RGB code final and even the direction of the gradient (vertical or horizontal).
Let's see the code could understand better:

[javascript]
$('#my_element').gradient({
from:      'ffffff',
to:        '000000',
direction: 'vertical';
});
[/javascript]

In this example the gradient effect will be applied to the element with ID my_element, starting with white and black going to the vertical direction.
Simple!

Good, but as I said above, go a little further. If we pass RGB values for the plugin, so maybe we can use another plugin well known and very good too, the [Color Picker](http://www.eyecon.ro/colorpicker).
I prepared a script where I use the features of the 2 plugins. See below as it was. And again see the power of JavaScript:


See the  example: [http://jaydson.org/code/jquery/plugins/gradient/index.html](../code/jquery/plugins/gradient/index.html)

I hope you enjoyed and that is useful for any application from you.
Any questions Comentt.

**Minha Avaliation: 8.0**
**Compatibilily: Firefox 2.0+, IE 6+, Safari 3.0+, Chrome 2.0+**

**Official website**[: http://brandonaaron.net/code](http://brandonaaron.net/code)

[caption id="attachment_114" align="alignnone" width="60" caption="Download"][![Download](http://jaydson-org.web102.redehost.com.br/assets/hd_download1.jpg)](http://jaydson.org/code/jquery/plugins/gradient/gradient.rar)[/caption]

O que vou abordar neste Post é um plugin muito bom desenvolvido pelo [Brandon Aaron](http://brandonaaron.net/).
Pra quem não conhece, esse cara mora lá pelas bandas do Texas e é um dos principais membros do[ time de desenvolvedores do Jquery](http://docs.jquery.com/Contributors).

A idéia básica do plugin é criar um efeito de Gradient(vai de uma cor para outra) em um elemento HTML. Isso mesmo! Nada de Photoshop. O/
O que precisamos:  obviamente o [Jquery](http://docs.jquery.com/Downloading_jQuery), e o [plugin Gradient](http://github.com/brandonaaron/jquery-gradient/tree/master).

Mas dessa vez vou um pouco mais além...
O plugin nos permite especificar o código RGB inicial, o o código RGB final e ainda a direção do Gradient(vertical ou horizontal).
Vamos ver o código pra entender melhor:

[javascript]
$('#meu_elemento').gradient({
from:      'ffffff',
to:        '000000',
direction: 'vertical';
});
[/javascript]

Neste exemplo o efeito Gradient será aplicado no elemento com o ID meu_elemento, começando de branco e indo até preto com direção vertical.
Simples !

Bom, mas como eu disse acima, vamos um pouco mais além.  Se precisamos passar valores RGB para o plugin, então quem sabe podemos usar um outro plugin bem conhecido e muito bom também, o [Color Picker](http://www.eyecon.ro/colorpicker).
Preparei um script onde uso as funcionalidades dos  2 plugins. Vejam abaixo como ficou. E novamente vejam o poder do Javascript:

Veja aqui o exemplo: [http://jaydson.org/code/jquery/plugins/gradient/index.html](http://jaydson.org/code/jquery/plugins/gradient/index.html)

Espero que tenham gostado e que seja útil para alguma Aplicação de vocês.
Qualquer dúvida comentem ai.
Abraço, e até a próxima.

**Minha Avaliação: Nota 8.0**
**Compatibilidade: Firefox 2.0+, IE 6+, Safari 3.0+, Chrome 2.0+**

**Site oficial do Plugin:**[](http://docs.jquery.com/Plugins/Autocomplete)[ http://brandonaaron.net/code](http://brandonaaron.net/code)

[caption id="attachment_114" align="alignnone" width="60" caption="Download"][![Download](http://jaydson-org.web102.redehost.com.br/assets/hd_download1.jpg)](http://jaydson.org/code/jquery/plugins/gradient/gradient.rar)[/caption]
