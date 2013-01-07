---
comments: true
date: 2009-05-09 18:35:26
layout: post
slug: autocomplete-jquery-plugin
title: Autocomplete - Jquery Plugin
wordpress_id: 140
categories:
- Jquery-Plugins
tags:
- Jquery-Plugins
---

Um recurso muito bom que podemos aplicar em nossos Sistemas é o Autocomplete.
Isso ajuda muito o usuário na hora de selecionar uma opção. Além de ser visualmente mais agradavél, este recurso faz com que apenas apareçam as opções de acordo com o que é digitado no campo.
Imaginei a situação onde o usuário precisa selecionar um determinado valor em um <selectbox>. O porém é que esse campo será populado com centenas de valores. É extremamente ruim ter que ficar procurando a opção correta em uma lista enorme de opções.
O que esse plugin nos proporciona é uma forma simples de implementar um campo do tipo Autocomplete.

O exemplo que preparei é bem simples, mas mostra o poder deste plugin(um dos melhores que já usei).
O que vamos fazer é um script PHP que retorne os Posts aqui do Blog. Segue o código abaixo do arquivo **search.php**:

[php]

<?php
$items = array(
'Text Area Resizer - JQuery Plugin'=>'1',
'Text Limiter - Jquery Plugin'=>'2',
'Plugins Jquery'=>'3',
'theWebMind.org'=>'4',
'Hacks CSS'=>'5',
'Json'=>'6',
'PHP - Problema ao carregar a DLL php_pgsql.dll'=>'7',
'RichBlocks - Um Framework Para Implantar Interfaces RIA em Sistemas Web'=>'8',
'PHP Classes'=>'9',
'RIA - Aplicacoes Ricas para Internet'=>'10',
'Campanha Atualize o seu Navegador'=>'11',
'Internet Explorer 8'=>'12',
'Projeto PHP Counter'=>'13',
'Jquery'=>'14'
);

foreach ($items as $key=>$value){
echo "$key|$valuen";
}
?>

[/php]


Note que neste código eu montei "na mão" um array de Posts. Mas nada me impediria de ter feito uma consulta no banco de dados e ter montado o array dinâmicamente. Isso serve para qualquer situação.
Bom, já temos os dados que precisamos para popular o campo de Autocomplete.
Basta criar um campo do tipo <input> com uma ID especifica. No meu ficou assim:

[html]

<body>
<p>
<label style="font-family:verdana;
font-weight:bold;
font-size:18px;">
Posts Jaydson.org:
</label>
<br>
<input style="width:300px;" type="text" id="posts" />
</p>
</body>


[/html]

Agora que já temos o HTML, vamos implementar o Plugin.
O que deve ser feito é informar qual <input> será capaz de se autocompletar, desta forma:

[javascript]

<script type="text/javascript">
$().ready(function() {

$("#posts").autocomplete("search.php", {
width: 440,
scrollHeight: 220,
selectFirst: true
});
})
</script>


[/javascript]

Desta maneira, o <input id="posts"> receberá o conteúdo da página PHP que criamos anteriormente.

**Nota:** O Plugin ainda possui uma série de opções que podem ser especificadas além de width, scrollHeight e selectFirst .

**Veja o resultado:**



     




**Minha Avaliação: Nota 10.0**
**Compatibilidade: Firefox 2.0+, IE 6+, Safari 3.0+, Chrome 2.0+**

**Site oficial do Plugin:**[ http://docs.jquery.com/Plugins/Autocomplete
](http://docs.jquery.com/Plugins/Autocomplete)

[caption id="attachment_114" align="alignnone" width="60" caption="Download "][![Download Text Limiter](http://jaydson-org.web102.redehost.com.br/assets/hd_download1.jpg)](http://jaydson.org/code/jquery/plugins/jquery.autocomplete/jquery-autocomplete.rar)[/caption]

****
