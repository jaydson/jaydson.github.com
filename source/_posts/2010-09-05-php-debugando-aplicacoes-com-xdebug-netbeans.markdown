---
comments: true
date: 2010-09-05 04:13:16
layout: post
slug: php-debugando-aplicacoes-com-xdebug-netbeans
title: PHP - Debugando Aplicações com Xdebug e NetBeans
wordpress_id: 624
categories:
- NetBeans
- PHP
tags:
- PHP
---

A  big mistake of many programmers who use other languages (C #, Java,  etc.) , is to think that anyone who develops in PHP does  not have the necessary tools to develop robust systems, fast and with quality. I have had the opportunity to work with. NET, and PHP, and I see that developers are very dependent on their tools. I am not against, quite the contrary, they really help a lot.

The Microsoft platform has all his tools very well integrated, and that's good.

With Visual Studio for example, you can debug the application in development time and run-time.

That along with Intellisense * makes a good IDE.Um grande equívoco de vários programadores que utilizam outras linguagens(C#, Java, etc.) que não PHP, é achar que quem desenvolve em PHP não possui as ferramentas necessárias para desenvolver sistemas robustos, com rapidez e qualidade. Tenho tido a oportunidade de trabalhar com .NET, além de PHP, e vejo que os programadores são muito dependentes de suas ferramentas. Não sou contra, bem pelo contrário, elas realmente ajudam muito.
A plataforma Microsoft possui todas suas ferramentas muito bem integradas, e isso é um ponto positivo.
Com o  Visual Studio por exemplo, é possível debugar a aplicação em tempo de desenvolvimento e em _run-time.
_E isso juntamente com o Intellisense* o torna uma boa IDE.<!-- more -->

* Intellisense: Basically it is the language reference. The famous auto-complete, which many can not live without, or rather do not work without. [# Flamewar]

But back to PHP which is what interests us.

With PHP you can do the same thing we do with other languages.

The NetBeans is an excellent IDE, and has a number of features that help in development.

The auto-completion works very well and we can easily configure it to debug our applications, and this is what we see now.

Requirements:

- Obviously Apache with PHP. If not:

**$ sudo apt-get install apache2** (Apache)

**$ sudo apt-get install php5** (PHP 5)

**$ sudo apt-get install libapache2-mod-php5** (Lib Apache PHP)

**# sudo / etc/init.d/apache2 restart** (restart Apache)

- Xdebug:

**$ sudo apt-get install php5-dev** (Pack libs to compile the extensions)

**$ sudo apt-get install php-pear** (PEAR http://pear.php.net)

**$ sudo pecl install xdebug **(Xdebug http://www.xdebug.org)

Add to php.ini settings for Xdebug:

**Zend_extension = "/usr/lib/php5/20090626 lfs/xdebug.so"**

**Xdebug.remote_port = 9100** (port that will respond xdebug)

**Xdebug.remote_handler = "dbgp"** (default)

**Xdebug.remote_host = "localhost"** (the host that xdebug is running)

**Xdebug.remote_enable = On** (Remote Debug)

After that, restart Apache and you're done.

Now open your NetBeans project, create break points and make the Debug in your application.

[![](http://jaydson.org/wp-content/uploads/2010/09/Screenshot1-300x181.png)

](http://jaydson-org.web102.redehost.com.br/assets/Screenshot11.png)

I hope this post has helped demystify another untruth about PHP.

Remembering  always that a good programmer work with any language, using all the  tools needed to solve your problem and do not have a single technology.

Open your mind.



* Intellisense: Basicamente é a referência da linguagem. O famoso auto-completar, que muitos não vivem sem, ou melhor, não trabalham sem. [#FlameWar]

Mas voltando ao PHP que é o que nos interessa.
Com PHP é possível fazer a mesma coisa que fazemos com outras linguagens.
O NetBeans é uma excelente IDE, e possui uma série de recursos que ajudam no desenvolvimento.
O auto-completar funciona muito bem, e podemos facilmente configura-lo para debugar nossas aplicações, e é isso que vamos ver agora.

Requisitos:
- Obviamente o Apache com PHP. Caso não tenha:
**# sudo apt-get install apache2** (Apache)
**# sudo apt-get install php5** (PHP 5)
**# sudo apt-get install libapache2-mod-php5** (Lib Apache PHP)
**# sudo /etc/init.d/apache2 restart** (Reinicia Apache)

- Xdebug:
**# sudo apt-get install php5-dev **(Pacote de libs para compilar as extensões)
**# sudo apt-get install php-pear (PEAR[ http://pear.php.net]( http://pear.php.net))
**# sudo pecl install xdebug **(Xdebug [http://www.xdebug.org](http://www.xdebug.org))****
**

Adicione ao php.ini as configurações para o Xdebug:
**# zend_extension="/usr/lib/php5/20090626+lfs/xdebug.so"**
**# xdebug.remote_port = 9100** (porta que o xdebug irá responder)
**# xdebug.remote_handler="dbgp"** (default)
**# xdebug.remote_host="localhost"** (host que o xdebug está rodando)
**# xdebug.remote_enable = On** (Debug remoto)

Feito isso, reinicie o Apache e está tudo pronto.
Agora com NetBeans abra o seu projeto, crie _break-points_ e faça o Debug de sua aplicação.

[caption id="attachment_625" align="alignnone" width="437" caption="PHP Debug NetBeans Xdebug"][![PHP Debug NetBeans Xdebug](http://jaydson-org.web102.redehost.com.br/assets/Screenshot2.png)](http://jaydson-org.web102.redehost.com.br/assets/Screenshot2.png)[/caption]

Espero que o post tenha ajudado a desmistificar mais uma inverdade sobre o PHP.
Lembrando sempre que o bom programador programa em qualquer linguagem, utiliza todas as ferramentas necessárias para resolver o seu problema e não se detêm a uma simples tecnologia.
Abram a mente.

Abraço.
