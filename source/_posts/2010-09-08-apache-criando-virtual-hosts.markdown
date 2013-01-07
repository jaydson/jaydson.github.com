---
comments: true
date: 2010-09-08 01:35:55
layout: post
slug: apache-criando-virtual-hosts
title: Apache - Criando Virtual Hosts
wordpress_id: 665
categories:
- Apache
tags:
- Apache
---

According  to the [Apache documentation](http://httpd.apache.org/docs/1.3/vhosts/), the term **Virtual Host** refers to the practice  of keeping more than one server on one machine, distinguished by their  names.

I will not talk about settings on production servers, but on the development environment.

We can create an environment where each application can have its own domain.

Example:

To access the application TheWebMind in my local environment I need to access the following address:

**http://localhost/projetos/open-soruce/thewebmind/2.0/trunk**





Segundo a [documentação do Apache](http://httpd.apache.org/docs/1.3/vhosts/), o conceito de **Virtual Host** refere-se à prática de manter mais de um  servidor em uma máquina, diferenciados pelos seus nomes.
Não vou me deter a falar sobre configurações em servidores de produção, mas sim em ambiente de desenvolvimento mesmo.
Podemos criar um ambiente onde cada aplicação local pode ter seu próprio domínio.




Exemplo:




Para acessar a aplicação **TheWebMind** em meu ambiente local eu preciso acessar o seguinte endereço:
**http://localhost/projetos/open-soruce/thewebmind/2.0/trunk**




Não seria legal se eu pudesse acessar apenas com **http://mind** ?




Bom, essa configuração é simples de fazer, bastando alguns segundos de seu tempo.




Crie um arquivo com o nome do domínio desejado [ .conf] no diretório: **/etc/apache2/sites-available**




No meu caso, foi **mind.conf<!-- more -->
Would not it be nice if I could access only http://mind?

Well, this configuration is simple to make, just a few seconds of your time.

Create a file with the name of the desired domain [. Conf] in the directory: **/etc/apache2/sites-available**

In my case it was mind.conf

This file should contain the following contents:

**<VirtualHost your_domain>

ServerAdmin webmaster@localhost

ServerAlias www.**your_domain**

DocumentRoot directory_of_your_application

</ VirtualHost>**

** **That done, now just tell Linux that this domain is a local domain.

Edit **/etc/hosts** and add the following line:

**127.0.0.1 localhost localhost.localdomain **your_domain** www.**your_domain****

Save the file and restart Apache.

Now just open your browser and enter your domain.

See a photo of my application running.

[caption id="attachment_666" align="alignnone" width="300" caption="Aplicação com Virtual Host"][![Aplicação com Virtual Host](http://jaydson.org/wp-content/uploads/2010/09/Screenshot-4-300x238.png)](http://jaydson-org.web102.redehost.com.br/assets/Screenshot-41.png)[/caption]


****O arquivo **deve conter o seguinte conteúdo:


**<VirtualHost seu_dominio>**




**ServerAdmin webmaster@localhost**




**ServerAlias www.****seu_dominio**




**DocumentRoot diretorio_da_sua_aplicação**




**</VirtualHost>**




**
**




Feito isso, agora basta informar ao Linux que esse domínio é um domínio local.
Edite o arquivo /etc/hosts e adicione a seguinte linha:
**127.0.0.1 localhost.localdomain localhost seu_dominio www.****seu_dominio**




***UPDATE:
Obviamente é necessário fazer um link simbólico ao arquivo em /etc/apache2/sites-enabled**** **




**
**




Salve o arquivo e reinicie o Apache.
Agora basta abrir o seu navegador e digitar o seu domínio.




Veja uma imagem de minha aplicação rodando.

[caption id="attachment_666" align="alignnone" width="300" caption="Aplicação com Virtual Host"][![Aplicação com Virtual Host](http://jaydson.org/wp-content/uploads/2010/09/Screenshot-4-300x238.png)](http://jaydson-org.web102.redehost.com.br/assets/Screenshot-41.png)[/caption]








