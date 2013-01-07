---
comments: true
date: 2012-02-09 15:12:17
layout: post
slug: como-detectar-o-evento-click-em-um-iframe-crossdomain
title: Como detectar o evento Click em um iframe crossdomain
wordpress_id: 1057
categories:
- JavaScript
---

Situação um pouco estranha não?  
Mas é isso mesmo.  
Nunca tinha me deparado com tal "problema":  
Como saber que o evento Click foi disparado dentro de um iframe _crossdomain_?  
Bom, não existe uma maneira natural de fazer isso.  
O que acontece é que o evento click até acontece no iframe, mas somente no elemento em si.  
Isso quer dizer que, quando o click acontece em um elemento que esta no documento do escopo do iframe, somente este iframe sabe disso.  
Como fazer então?  
Eu não tinha ideia, e aqui vale muito lembrar uma frase que ouvi em um evento certa vez:  
**"Nunca acredite em especialistas!"**  

****No caso, o especialista sou eu, que não tinha até então uma maneira simples de resolver o problema.  
Um amigo/colega aqui do Terra(André Marquardt), que possui **TB's** de experiência, mas não em JavaScript, me sugeriu algo.  
Depois de matutar sobre a ideia, cheguei a conclusão de que _"PQP! Talvez funcione!"_.  

A solução é bem simples:  
1. Crie um placeholder em volta do iframe(iframe dentro de um DIV, por exemplo)  
2. Adicione ao evento de mouseover deste elemento uma função que altere o valor de uma variável, informando que o mouse está ali  
3. Adicione ao evento de mouseout deste elemento uma função que altere o valor da mesma variável, informando que o mouse saiu dali  
4. Adicione ao evento blur do "body" uma função que verifica o valor da variável, e assuma que isso foi o click no iframe ;)  

Porquê isso funciona?  
Quando clicamos em um iframe, estamos selecionando o elemento  "iframe" e neste caso, o evento "blur" do body vai ser disparado.  
[![Mission](http://jaydson.org/wp-content/uploads/6a0120a6abf659970b0162fde3889c970d-800wi.jpg)](http://jaydson.org/wp-content/uploads/6a0120a6abf659970b0162fde3889c970d-800wi.jpg)  
Obviamente, esta solução possui algumas limitações:  
1. Somente 1 "click" será disparado no iframe. Isso porque quando estamos dentro do iframe, não temos mais o blur do body.  
PS: Tentei usar o focus() em algum elemento da página pai, mas sem sucesso.  
2. Qualquer pixel do iframe que for clicado, o blur do body será disparado, ou seja, talvez o click não seja exatamente onde queremos medir.  

Abaixo um código sample da solução:  

	var myConfObj = {
		iframeMouseOver : false
	}
	window.addEventListener('blur',function(){
		if(myConfObj.iframeMouseOver){
			console.log('Wow! Iframe Click!');
		}
	});

	document.getElementById('YOUR_CONTAINER_ID').addEventListener('mouseover',function(){
		myConfObj.iframeMouseOver = true;
	});
	document.getElementById('YOUR_CONTAINER_ID').addEventListener('mouseout',function(){
		myConfObj.iframeMouseOver = false;
	});

Gist: [https://gist.github.com/1780598](https://gist.github.com/1780598)