---
comments: true
date: 2010-09-06 00:23:23
layout: post
slug: php-teste-unitario-com-phpunit
title: PHP - Teste Unitário com PHPUnit
wordpress_id: 633
categories:
- PHP
- PHPUnit
- Testes
tags:
- PHP
- PHPUnit
- Testes
---




Following  the idea of the last post, where I spoke about the misconception of  some people think that PHP is not a language for robust systems, i will talk  briefly about PHPUnit.

Unit testing is neither a matter of tool, but the developer, or company policy which works.

I  say that because it is still common today models of enterprises that  use the famous XGH, where nothing matters, just to make money and deliver  the system.




In PHP world, PHPUnit is the primary tool for unit testing.

The installation is very simple, and using the NetBeans IDE it becomes easier still.

Below is a step by step:Seguindo a ideia do [último post](http://jaydson.org/php-debugando-aplicacoes-com-xdebug-netbeans/), onde falei sobre o equívoco de alguns em achar que PHP não é uma linguagem para sistemas robustos, vou falar brevemente sobre o PHPUnit.
Teste unitário não é nem questão de ferramenta e sim do próprio programador, ou da política da empresa onde se trabalha.
Digo isso, porque ainda é comum hoje em dia modelos de empresas que utilizam o famoso [XGH](http://gohorseprocess.wordpress.com/extreme-go-horse-xgh/), onde nada importa, a não ser ganhar dinheiro e entregar o sistema.

No mundo PHP, o [PHPUnit](http://www.phpunit.de/) é a principal ferramenta para testes unitários.
A instalação é bem simples, e utilizando o NetBeans como IDE fica mais fácil ainda.
Abaixo segue um passo a passo:<!-- more -->
To install PHPUnit you must have the Pear if you have not

**$ sudo apt-get install php-pear**

After installing PEAR, you must register the channel on the environment

**$ sudo pear channel-discover pear.phpunit.de**

And finally, install PHPUnit

**$ sudo pear install phpunit / PHPUnit**

Okay, if everything went well so far, the PHPUnit is installed successfully!

Now let's set up for use in NetBeans.

PS: I'm using the latest version of NetBeans, which is now 6.9.1

1 - Tools> Options and select the tab PHP

[caption id="attachment_634" align="alignnone" width="300" caption="Tools > Options"][![](http://jaydson.org/wp-content/uploads/2010/09/passo1-300x261.png)](http://jaydson-org.web102.redehost.com.br/assets/passo11.png)[/caption]

2 - In the PHPUnit source enter the path to PHPUnit, in my case **/usr /bin/phpunit**

Done.

Now try to create a directory in your application with the name you want. This directory is the repository of their tests.

Create a class, and then right on top.

Tools> Create PHPUnit tests

Select the directory taht you created as a repository of tests.

From now on all your tests are stored in this directory.

To create new tests, just repeat the procedure.

Of course, not everything is so simple, you need to understand how a unit test work, and to understand the tool.

For that > [http://www.phpunit.de/manual/3.4/en/index.html](http://www.phpunit.de/manual/3.4/en/index.html)









Para instalar o PHPUnit é preciso ter o [Pear](http://pear.php.net/), caso não tenha
**$ sudo apt-get install php-pear**

Após instalar o Pear, é necessário registrar o canal no ambiente
**$ sudo pear channel-discover pear.phpunit.de**

E enfim, instalar o PHPUnit
**$ sudo pear install phpunit/PHPUnit**

** **Pronto, se tudo deu certo até aqui, o PHPUnit foi instalado com sucesso!
Agora vamos configurar para usar no NetBeans.

OBS: Estou usando a última versão do NetBeans, que hoje é 6.9.1

1 - Tools > Options e selecione a aba PHP

[caption id="attachment_634" align="alignnone" width="300" caption="Tools > Options"][![](http://jaydson.org/wp-content/uploads/2010/09/passo1-300x261.png)](http://jaydson-org.web102.redehost.com.br/assets/passo11.png)[/caption]

2 - No campo PHPUnit source informe o caminho do PHPUnit, no meu caso **/usr/bin/phpunit**

Pronto.
Agora para testar crie um diretório em sua aplicação com o nome que desejar. Esse diretório será o repositório de seus testes.
Crie uma classe, e clique com o botão direito em cima.
Tools > Create PHPUnit tests
Selecione o diretório criado como repositório dos testes.
A partir de agora todos seus testes serão armazenados neste diretório.
Para criar novos testes, basta repetir o procedimento.

Claro que nem tudo é tão simples, é preciso entender como funciona um teste unitário, e entender a ferramenta.
Para isso > [http://www.phpunit.de/manual/3.4/en/index.html](http://www.phpunit.de/manual/3.4/en/index.html)

[](http://www.phpunit.de/manual/3.4/en/index.html)Boa sorte, e espero ter ajudado.
