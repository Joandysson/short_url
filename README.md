# Short Url

## :boom: Como Executar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.

1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/Joandysson/short_url.git
```

2. Configuração de ambiente:

```sh
    Renomear .env.exemple para .env e adicionar configurações de banco de amboente

    TYPEORM_CONNECTION=  ## Driver DB "mysql"|"postgres"|"sqlite"|"oracle"
    TYPEORM_HOST= ## host Database | exemplo 127.0.0.1
    TYPEORM_USERNAME= ## Nome do usuário do banco
    TYPEORM_PASSWORD= ## Senha do banco de dados
    TYPEORM_DATABASE= ## Nome do banco de dados
    TYPEORM_PORT= ## Porta do bando de dados


    HOST= ## host do projeto | exemplo 127.0.0.1
    PORT= ## Porta do projeto | exemplo 3333

    ## As demais configurações são padrões do projeto
    TYPEORM_SYNCHRONIZE=false
    TYPEORM_LOGGING=false
    TYPEORM_ENTITIES="src/app/models/*.ts"
    TYPEORM_MIGRATIONS="src/database/migrations/*.ts"
    TYPEORM_MIGRATIONS_DIR="src/database/migrations"


```

3. Executando a Aplicação:

```sh
    # Instalando as dependências do projeto.
    $ yarn # ou npm install
    # Configurando o banco de dados e criando as tabelas.
    $ yarn typeorm migration:run

    # Inicie a API
    $ yarn dev # ou npm run dev
```

4. Executando no postman:

```sh
    importar "Short Url.postman_collection.json postman" postman realizar as requisções a API
    Documentação Postman "docs/Postman - Documentation short Url.pdf"
```

5. Executando testes:

```sh
    # Executando todos os testes.
    $ yarn  test
```


---
<sup>Projeto desenvolvido com por Joandysson Gama </sup>
