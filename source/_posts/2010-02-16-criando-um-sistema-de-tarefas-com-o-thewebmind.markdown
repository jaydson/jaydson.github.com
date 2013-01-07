---
comments: true
date: 2010-02-16 01:01:37
layout: post
slug: criando-um-sistema-de-tarefas-com-o-thewebmind
title: Criando um sistema de tarefas com o TheWebMind
wordpress_id: 512
categories:
- TheWebMind
---

Today  start a series of posts where I want to show the power of TheWebMind to  create an application.




With the [last release](http://thewebmind.org/download), a major new feature is the native module [Zend Models](http://docs.thewebmind.org/index.php?title=Modules#Native_ZendModels), that generates an [MVC ](http://pt.wikipedia.org/wiki/MVC)application using [ Zend Framework.](http://framework.zend.com/)




Currently TheWebMind is in [Pre-Alpha](http://code.google.com/p/webmind/source/browse/#svn/tags/pre-alpha-2.0.0) version, that means that is not yet fully stable, it still has  bugs and improvements to be implemented.




But with what we have today, you can do a lot. And that's what I want to share.




I assume that those who are following  the tutorial already know what is [TheWebMind](http://thewebmind.org/index.php), and  know the theory behind it all.




Otherwise go to the page of documentation: [http://docs.thewebmind.org/index.php?title=Main_Page](http://docs.thewebmind.org/index.php?title=Main_Page)




My proposal is to create a simple task system.




**Requirements:**




** **




**The system must allow the user registration**.




The user must have a name




The task must have title, description,  date and a User linked.




The system must allow the registration of  multiple tasks to a User.




The  system must have interface for viewing and editing of data, both users  and tasks.




In short, it is a very simple system  where the User registers its tasks.




### **Step 1 - Creating  a project inTheWebMind**




To  create a project, go to the menu _**File > New Project**_ and  complete the project data.




PS: Make sure you have a database installed and configured on your  server, and fill out the data, stating the address, name, port, User and  password database.




These are information that TheWebMind  uses to generate the tables.




### **Step 2 - Writing in WML**




Created  the project, let's write the [WM ](http://docs.thewebmind.org/index.php?title=Web-Mind-Language)code, that meets the  requirements.




The syntax of WML is based on the NLP concept (Natural Language Processing), that  basically consists of being similar to natural human language (English,  Portuguese, Spanish, etc).




More  details in the documentation: [http://docs.thewebmind.org/index.php?title=Web-Mind-Language](http://docs.thewebmind.org/index.php?title=Web-Mind-Language)



    
    
    <div id="_mcePaste">
    
    
    <span style="font-family: Georgia, 'Times New Roman', 'Bitstream Charter', Times, serif; line-height: 19px; white-space: normal; font-size: 13px;">
    
    
    [php]
    
    We know that person has a name:string(100);
    The task has title:string(100);
    The task has description:text();
    The task has date:date();
    The person has task;
    
    [/php]
    
     
    













### Step 3 - **Viewing the output**




Click in the button ![bt_play_over](http://jaydson-org.web102.redehost.com.br/assets/bt_play_over1.gif) located in the task bar above the editor.




After "compiled"  the project, you can see the outputs as ER diagram, Data Dictionary, and  the SQL pane tabs below the editor.




### Step 4 - Generating the project




To  generate the project click on ![compiler_over](http://jaydson-org.web102.redehost.com.br/assets/compiler_over1.gif) also located in the task bar above the editor.




A Wizard screen will open, leading the User until the  end.




At _**Step 1 select the second  option**__**,** indicates  that the database development previously registered on the screen to  create the project._




_ _




Go to the next step by clicking **_Next_**.




_A screen with all the modules will be displayed in **_**_Step 2_**_**, select ZendModels and proceed to the next step._




_ _




_At **_Step 3 are 2 options  related to the TheWebMind will do about the database._**_




_**_ _**_




This option  should be selected carefully, because if you select the "be replaced,"  the TheWebMind will delete the existing table, and all your data and  create a new one with the necessary changes.




_**_The "be skipped" ignores any  change in the database._**_




**_Now click in** _Finish, _and follow the screen where the TheWebMind shows  everything that is happening, and copy necessary files, create tables.**_**




**_** **_**




**_**Done. You just created a system with  TheWebMind.**_**




### **Step 5 - Viewing the generate project**




Done all the work, the TheWebMind will display the  message "**Finished**, the project's been generated **here**".




A screen with the tree generated files will be displayed.  You can see the  contents of a file to select it.




Above the  tree, click the button "**_Explore Files_**" , this will take you to the page where the  application was generated.




### **Step 6 -Testing Application**




Following these steps have a simple  operating system tasks.




To test the application generated click  here: [http://source.jaydson.org/TaskList/](http://source.jaydson.org/TaskList/)




[ ](http://source.jaydson.org/TaskList/)




The ZendModels generates the forms of application, it  serves to test if everything is working properly.




Well, this was a small tutorial on how to make  a simple system with TheWebMind using ZendModels.




Any doubt come into contact or comment.




Below is the link to download the  application generated in the example, but for a better understanding of  TheWebMind suggest you do the [download TheWebMind](http://thewebmind.org/download), and  follow all the steps described above.




It is very easy.




Download:  [http://source.jaydson.org/TaskList.rar](http://source.jaydson.org/downloads/TaskList.rar)




See another example at [@felipenmoura](http://twitter.com/felipenmoura) Blog: [http://felipenascimento.org/en/portugues-brasil-criando-uma-aplicacao-funcional-com-thewebmind/](http://felipenascimento.org/en/portugues-brasil-criando-uma-aplicacao-funcional-com-thewebmind/)




** **




** **


Hoje começo uma série de posts onde pretendo mostrar o poder do TheWebMind para criação de uma Aplicação.
Com o [último release](http://thewebmind.org/download), uma das principais novidades é o módulo nativo [Zend Models](http://docs.thewebmind.org/index.php?title=Modules#Native_ZendModels), que gera uma estrutura [MVC ](http://pt.wikipedia.org/wiki/MVC) utilizando o[ Zend Framework.](http://framework.zend.com/)

Atualmente o TheWebMind encontra-se na versão [Pre-Alpha](http://code.google.com/p/webmind/source/browse/#svn/tags/pre-alpha-2.0.0), isso quer dizer que ainda não está totalmente estável, ainda possui bugs e melhorias a serem implementadas.
Mas com o que temos hoje, é possível fazer muita coisa. E é isso que quero compartilhar.

Parto do princípio que quem estiver seguindo o tutorial já saiba o que é o [TheWebMind](http://thewebmind.org/index.php), e conheça a teoria por traz de tudo.
Caso contrário acesse a página da documentação: [http://docs.thewebmind.org/index.php?title=Main_Page](http://docs.thewebmind.org/index.php?title=Main_Page)

Minha proposta é criar um sistema simples de tarefas.

<!-- more -->
**Requisitos:
**O sistema deve permitir o cadastro de usuários.
O usuário deve ter nome.
A tarefa deve possuir título, descrição, data e um usuário vinculado.
O sistema deve permitir o cadastro de várias tarefas para um usuário.
O sistema deve possuir interface para edição e visualização dos dados, tanto de usuários como de tarefas.
Resumindo, é um sistema bem simples, onde o usuário cadastra suas tarefas.


### **Passo 1 - Criando um projeto no TheWebMind**


Para criar um projeto, acesse o menu _**File > New Project**_ e preencha os dados do projeto.
OBS: Certifique-se de que você tem um banco de dados instalado e configurado  no seu server, e preencha corretamente os dados, informando o endereço, nome, porta, usuário e senha do banco de dados.
São estas informações que o TheWebMind utiliza para gerar as tabelas.


### **Passo 2 - Escrevendo em WML**


Criado o projeto, vamos escrever o código [WML ](http://docs.thewebmind.org/index.php?title=Web-Mind-Language)que atenda aos requisitos.
A sintaxe da linguagem WML é baseada no conceito NLP (Natural Language Processing), que consiste basicamente em ser semelhante a linguagem humana natural(Português, Inglês, Espanhol, etc).
Veja mais detalhes na documentação: [http://docs.thewebmind.org/index.php?title=Web-Mind-Language](http://docs.thewebmind.org/index.php?title=Web-Mind-Language)

[](http://docs.thewebmind.org/index.php?title=Web-Mind-Language)

[php]<br /><br />Sabemos que o usuario tem nome:string(100);<br />A tarefa tem título:string(100);<br />A tarefa tem descrição:text();<br />A tarefa tem data:date();<br />O usuario tem tarefa;<br /><br />[/php]


### **Passo 3 - Visualizando as saídas**


Clique no botão ![bt_play_over](http://jaydson-org.web102.redehost.com.br/assets/bt_play_over1.gif) localizado na barra de tarefas acima do editor.

Depois de "compilado" o projeto, você poderá ver as saídas como diagrama ER, Dicionário de dados, e o código SQL no painel de abas logo abaixo do editor.


### **Passo 4 - Gerando o projeto**


Para gerar o projeto clique  no botão ![compiler_over](http://jaydson-org.web102.redehost.com.br/assets/compiler_over1.gif) também localizado na barra de tarefas acima do editor.
Uma tela de Wizard abrirá, guiando o usuário até o final.
No **_Step 1 selecione a segunda opção, que indica o banco de dados de desenvolvimento previamente cadastrado na tela de criar o projeto.
Avance para o próximo passo clicando no botão **_Next_**.
Uma tela com todos os módulos será exibida no **_**_Step 2_**_**, selecione o ZendModels e avance para o próximo passo.
No **_Step 3 _existem 2 opções relacionadas ao que o TheWebMind irá fazer em relação ao banco de dados.
Esta opção deve ser cuidadosamente selecionada, pois se você selecionar a opção "be replaced" , o TheWebMind irá deletar a tabela existente, assim como todos os seus dados e criará uma nova com as alterações necessárias.
A opção "be skipped" ignora qualquer alteração na base de dados.
Agora clique em _Finish, **_**e acompanhe a tela onde o TheWebMind mostra tudo que está acontecendo, como cópia de arquivos necessários, criação de tabelas, etc.**_**_**_**

**_**_**_**Pronto. Você acabou de criar um sistema com o TheWebMind. **_**_**_**


### **Passo 5 - Visualizando o projeto gerado**


Feito todo o trabalho, o TheWebMind irá exibir a mensagem "**Finished**, the project's been generated **here**".
Uma tela com a arvore de arquivos gerados será exibida. É possível ver o conteúdo de um arquivo ao seleciona-lo.
Acima da árvore, clique no botão "**_Explore Files_**" , este o conduzirá até a página onde a Aplicação foi gerada.


### **Passo 6 - Testando a Aplicação**


Seguindo esses passos temos um simples sistema de tarefas funcionando.
Para testar publiquei a aplicação gerada aqui: [http://source.jaydson.org/TaskList/
](http://source.jaydson.org/TaskList/)O ZendModels gera os formulários da aplicação, isso serve para testarmos se tudo esta funcionando corretamente.

Bom, este foi um pequeno tutorial de como fazer um sistema simples com o TheWebMind utilizando o ZendModels.
Qualquer dúvida entrem em contato ou comentem.
Abaixo segue o link para download da aplicação gerada no exemplo, mas para um melhor entendimento do TheWebMind sugiro que vocês façam o [download do TheWebMind](http://thewebmind.org/download), e sigam todos os passos descritos acima.
É muito fácil.

Download:  [http://source.jaydson.org/TaskList.rar
](http://source.jaydson.org/downloads/TaskList.rar)

Vejam um outro exemplo no blog do [@felipenmoura](http://twitter.com/felipenmoura) : [http://felipenascimento.org/en/portugues-brasil-criando-uma-aplicacao-funcional-com-thewebmind/](http://felipenascimento.org/en/portugues-brasil-criando-uma-aplicacao-funcional-com-thewebmind/)

[](http://felipenascimento.org/en/portugues-brasil-criando-uma-aplicacao-funcional-com-thewebmind/)

**
**
