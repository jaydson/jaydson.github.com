---
comments: true
date: 2010-09-07 01:46:51
layout: post
slug: habilitar-mod_rewrite-no-apache
title: Habilitar mod_rewrite no Apache
wordpress_id: 640
categories:
- Apache
tags:
- Apache
---

One thing I always do, but I always forget how to do is enable the [mod_rewrite](http://httpd.apache.org/docs/1.3/mod/mod_rewrite.html) in Apache.

For  those not familiar, this is an Apache module that uses a mechanism  based on rewrite rules (based on a parser for regular expressions).

Basically the module allows the rewriting of URLs on the fly.

To enable the module into Apache just this line:

**$ Sudo a2enmod rewriteUma coisa que sempre faço, mas sempre esqueço como fazer é habilitar o [mod_rewrite](http://httpd.apache.org/docs/1.3/mod/mod_rewrite.html) do Apache.
Para quem não conhece, esse é um módulo do Apache que utiliza um mecanismo baseado em regras de reescrita (baseadas em um parser de expressões regulares).
Basicamente o módulo permite a reescrita de URL's _on the fly_.

Para habilitar o módulo no Apache basta esta linha:
**$ sudo a2enmod rewrite<!-- more -->
**

Now open the configuration file

**$ Sudo gedit / etc/apache2/sites-available/default**

Look in your input file to "AllowOverride None" in my case was in line 11.

Change this value to "**AllowOverride Al**l".

Save the file and restart Apache.

**$ Sudo / etc/init.d/apache2 restart**

Basically that's it, now is possible to rewrite URL's.


**

Agora abra o arquivo de configuração
**$ sudo gedit  /etc/apache2/sites-available/default**

Procure no seu arquivo a entrada "AllowOverride None", no meu caso estava na linha 11.
Altere esse valor para "**AllowOverride All**" .
Salve o arquivo e reinicie o Apache.
**$ sudo /etc/init.d/apache2 restart**

Basicamente é isso, agora já é possível reescrever  URL's.
