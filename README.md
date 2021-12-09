
# Car Rent API

## Descrição do Projeto
<p>API desenvolvida em Node.js para fornecer informações e serviços acerca de dados referentes à aluguel de automóvei e motoristas.</p>

<br/>
### Requisitos.
<ul>
    <li>
        <a href="https://nodejs.org/en/" target="_blank" >Node.js - v14.17.0 ou superior  </a>
    </li>
    <li>
        <a href="https://www.npmjs.com/" target="_blank" >Node Package Manager (npm) - 7.14.0 ou superior</a>
    </li>
    <li>
        <a href="https://docs.docker.com/compose/install/" target="_blank" >Docker Compose</a>
    </li>
    <li>Banco de dados 'rent' criado e ativo.<sub> Instruções no fim do documento</sub>
    </li>
</ul>

### Inicializar a aplicação
Para a execução do projeto de maneira local deve ser executado os seguintes passos.
<br/>
<ul>
    <li><b>Inicializar a aplicação: </b>
    <br/>
    Para inicializar a aplicação é necessário entrar na pasta do projeto, por exemplo:
    <br/>
    <code>C:\new-automobiles-api</code>
    <br/>
    Instalar as requisições do projeto, através do seguinte comando:
    <br/>
    <code>npm install</code>
    <br/>
    Após criar a base de dados, rodar o comando
    <br/>
    <code>npm run m:run</code>
    <br/>
    Após a instalação, digite o seguinte comando:
    <br/>
    <code>npm run start</code>
    </li>
    
</ul>

<p>Após a finalização desse processo você terá a aplicação rodando localmente na porta <code>3000</code>, mais especificamente: <code>http://localhost:3000/</code></p>
<br/>

<p><b>OBS:</b> Você pode utilizar um software como <a href="https://www.postman.com/" target="_blank">Postman</a> para disparar requisições para a API.</p>
<br/>


## Como utilizar a aplicação

<p>Para efetivamente compreender e utilizar a aplicação, acesse a documentação do projeot em <code>http://localhost:3000/api-docs</code>.</p>
<br/>


## Testes unitários
Para a execução dos testes unitários, basta rodar no terminal (pasta raiz do projeto) o seguinte comando
<code>npm eun test</code>
Assim, todos os arquivos de teste serão executados
<br>
<b>OBS</b>: lembre-se que é necessário que o servidor da API esteja rodando


## Configuração do Banco de dados


### Como criar
Após instalado e configurado corretamente o docker compose, você deve:

Para criar o banco, basta rodar o comando em um terminal
<code>docker-compose up app</code>

Após esse processo, você terá o mysql e phpmyadmin ativo.

Acesse o <code><a href="http://localhost">phpmyadmin</a></code>, entre com as seguintes credenciais: 
<code>{"servidor": "db", "user": "root", "password": "password" } </code>

Também é necessário criar a base de dados "rent", basta ir no menu lateral esquerdo, clicar em "Novo" e criar a nova base de dados.
