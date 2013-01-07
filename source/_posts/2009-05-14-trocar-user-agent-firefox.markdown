---
comments: true
date: 2009-05-14 01:31:31
layout: post
slug: trocar-user-agent-firefox
title: Trocar User Agent do Firefox
wordpress_id: 154
categories:
- Browsers
- Firefox
tags:
- Browsers
- Firefox
---

Porque?
Bom, hoje no trabalho eu precisei testar uma rotina que basicamente identificava se o usuário estava em um PC ou em um iPhone.
No meu caso específico era com .NET que eu ia fazer essa verificação, mas com PHP ou Javascript também conseguimos identificar o User Agent.
Blza. Verificação feita. Mas e iPhone pra testar? Pois é, não tinha nenhum.
Pesquisando acabei achando esse site: [ http://www.yes-no-cancel.co.uk/2008/01/03/imitating-the-iphone-user-agent-in-firefox/](http://www.yes-no-cancel.co.uk/2008/01/03/imitating-the-iphone-user-agent-in-firefox/)
"Imitating the iPhone User Agent in Firefox".
Isso mesmo!!!
Um Add-on muito útil para o Firefox que troca o User Agent.
Ai foi barbada.
Para baixar o Add-on -> [User Agent Switcher add-on for Firefox](https://addons.mozilla.org/en-US/firefox/addon/59)

A string do User Agent iPhone:

Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3B48b Safari/419.3

É só adicionar e ta pronto.

Só não esqueçam de voltar para User Agent default depois do teste.
