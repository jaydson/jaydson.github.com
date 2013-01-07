---
comments: true
date: 2012-06-19 04:58:43
layout: post
slug: web-scraping-para-criancas-com-nodejs
title: Web Scraping para crianças com nodeJS
wordpress_id: 1292
categories:
- JavaScript
- nodeJS
tags:
- JavaScript
- nodeJS
---

[![](http://jaydson.org/wp-content/uploads/scraper.jpg)](http://jaydson.org/wp-content/uploads/scraper.jpg)  
Bom, resolvi fazer este post para deixar registrado o quanto é fácil fazer [Web Scraping](http://en.wikipedia.org/wiki/Web_scraping) com [nodeJS](http://nodejs.org/).  
Para quem não sabe, Web Scraping é uma técnica para extrair dados de páginas web.  
Surgiu a necessidade de fazer algo do tipo no trabalho, e resolvi fazer uns testes.  
É possível fazer isso com qualquer linguagem, mas pensei, porque não fazer com JavaScript? Ai pensei no node.  
Me preparei para um desafio legal, mas me frustrei muito :(  
Isso porque Web Scraping com node é ridiculamente simples de fazer, e é isso que vou mostrar :)  

**Node Scraper**  
Uma googleada rápida, e achei este projeto: [https://github.com/mape/node-scraper](https://github.com/mape/node-scraper)  
O node-scraper é um modulo que facilita o scraping.  
Obviamente, é preciso ter o node rodando e o [npm](http://npmjs.org/).  
Via npm instale o node-scraper:  

	npm install scraper  

O node-scraper expõe um objeto jQuery do lado do servidor com a página _scrapeada_ como se fosse o _body_.
Bizarro, mas é bem simples de entender, olhem o código:  

	var scraper = require('scraper');
	scraper('http://www.jaydson.org', function(err, jQuery) {
		if (err) {throw err}
		
		jQuery('a').each(function() {
			console.log(jQuery(this).text()+'\n');
		});
	});  

Neste exemplo, o que fiz foi buscar todos os links dentro da página jaydson.org, e logo após isso joguei no console o conteúdo de cada link.  
Fácil né?  

Bom, agora é só usar a criatividade ;)  
