---
comments: true
date: 2010-11-08 01:03:41
layout: post
slug: qunittestmachine-testes-unitarios-simplificados
title: QunitTestMachine - Testes unitários simplificados
wordpress_id: 727
categories:
- QUnit
tags:
- QUnit
---

There are several libraries to do unit testing in JavaScript code, I chose the [QUnit](http://docs.jquery.com/Qunit) as default in my tests.




QUnit is a powerful test suite and simple-to-use. Himself is used to test the official jQuery code and its plugins, but of course it is possible to test any code Javasript generic, ie their libraries.




QUnit is a project of [John Resig](http://ejohn.org/) and is maintained by him and [Jörn Zaefferer](http://bassistance.de/).




The code is available at GitHub: [http://github.com/jquery/qunit](http://github.com/jquery/qunit)




Although QUnit be very simple to use, I decided to simplify a bit more and created QUnitTestMachine.




But what makes QUnitTestMachine?




- Simplify your Javascript-based tests QUnit




- Focus on a single JavaScript file all the necessary settings to run your tests




- Run your tests independently

Existem [várias bibliotecas para fazer teste unitário](http://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#JavaScript) em código Javascript, eu acabei escolhendo o [QUnit](http://docs.jquery.com/Qunit) como padrão em meus testes.
O  QUnit é um test suite poderoso e simples de usar. O próprio é usado para testar o código do jQuery e seus plugins oficiais, mas claro, com ele é possível testar qualquer código Javasript genérico, ou seja,  suas bibliotecas.


O QUnit é mais um projeto do [John Resig](http://ejohn.org/), e é mantido por ele e pelo [Jörn Zaefferer](http://bassistance.de/).
O código do QUnit esta no GitHub: [http://github.com/jquery/qunit](http://github.com/jquery/qunit)<!-- more -->




The QUnitTestMachine follows the convention of having a test file for each file in your Javascript application.




To be clear, if exists in your application a file "myscript.js" which is needed to test, then in the same directory where that file must exist a test file called "test_myscript.js.




The prefix "test_" can be changed via the API, but QUnitTestMachine uses this as standard.




Well, let's see some code for clarity:




To start, open the file config.js, which is the configuration file of your tests.




- Set the root path of your application




[javascript]&lt;br /&gt;<br />
QUnitTestMachine.defaults.path = 'http://localhost/';&lt;br /&gt;<br />
[/javascript]




Note that the path defined using the absolute address, it is necessary for the proper loading of the scripts.




- After this, set the prefix




[javascript]&lt;br /&gt;<br />
QUnitTestMachine.defaults.prefix = 'test_';&lt;br /&gt;<br />
[/javascript]




Note that if not set, the default is 'test_'




- Add the scripts to the test




[javascript]&lt;/p&gt;<br />
&lt;p&gt;QUnitTestMachine.scripts.add({&lt;br /&gt;<br />
   &amp;quot;scripts&amp;quot;: [&lt;br /&gt;<br />
         {name: &amp;quot;app/js/myscript.js&amp;quot;},&lt;br /&gt;<br />
         {name: &amp;quot;app2/myscript2.js&amp;quot;}&lt;br /&gt;<br />
   ]&lt;br /&gt;<br />
});&lt;br /&gt;<br />
[/javascript]




[](http://github.com/jquery/qunit)




Ready. Done that the application is ready to be tested, go to the test.html file and see the result.




I hope QunitTestMachine help you guys with unit testing, has eased enough for me.




The project is on GitHub, so come on, download, copy, comment, create tickets, report bugs, etc..




Below is the link:




[https://github.com/jaydson/QUnitTestMachine](https://github.com/jaydson/QUnitTestMachine)







[](http://github.com/jquery/qunit)Apesar de o QUnit ser bem simples de ser usado, resolvi simplificar um pouco mais e criei o QUnitTestMachine.
Mas o que QUnitTestMachine faz?
- Simplifica seus testes Javascript baseados no QUnit
- Concentra em um único arquivo Javascript todas as configurações necessárias para rodar seus testes
- Roda seus testes de forma independente<!-- more -->

O QUnitTestMachine segue a convenção de possuir um arquivo de teste para cada arquivo Javascript em sua aplicação.
Sendo mais claro, se em sua aplicação existe um arquivo "myscript.js" o qual se faz necessário o teste, então no mesmo diretório onde se encontra esse arquivo deve existir um arquivo de teste chamado "test_myscript.js".
O prefixo "test_" pode ser alterado via API, mas o QUnitTestMachine usa este como padrão.

Bom, vamos ver um pouco de código para ficar mais claro:
Para iniciar, abra o arquivo config.js, que é o arquivo de configuração dos seus testes.
- Defina o path root de sua aplicação

[javascript]
QUnitTestMachine.defaults.path = 'http://localhost/';
[/javascript]

Note que o path definido utiliza o endereço absoluto, isso é necessário para o carregamento correto dos scripts.

- Após isso, defina o prefixo

[javascript]
QUnitTestMachine.defaults.prefix = 'test_';
[/javascript]

Note que se não for definido, o padrão é 'test_'

- Adicione os scripts para o teste

[javascript]

QUnitTestMachine.scripts.add({
   "scripts": [
         {name: "app/js/myscript.js"},
         {name: "app2/myscript2.js"}
   ]
});
[/javascript]

Pronto. Feito isso a aplicação já está pronta para ser testada, acesse o arquivo test.html e veja o resultado.

Espero que o QunitTestMachine ajude voces com testes unitários, pra mim tem facilitado bastante.
O projeto esta no GitHub, então entrem lá, baixem, copiem, comentem, criem tickets, reportem bugs, etc.
Abaixo segue o link:
[https://github.com/jaydson/QUnitTestMachine](https://github.com/jaydson/QUnitTestMachine)
