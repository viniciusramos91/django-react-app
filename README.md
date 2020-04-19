# Django React App Boilerplate

Aplicação base para aplicações Django + DRF ([Django Rest Framework](https://www.django-rest-framework.org/)) 
no Backend e React + Redux + Bootstrap no Frontend.

Versões **BACKEND**:

- Django == v3.0.5  
- django-environ == v0.4.5  
- djangorestframework == v3.11.0

Versões **FRONTEND**:

- React == v16.13.1
- Redux == v4.0.5
- Bootstrap == v4.4.1
- webpack == 4.42.1

O projeto consiste em gerar uma api (app Django `api`) para alimentar uma aplicação React, sendo ambas 
servidas pelo Django. Todo conteúdo Javascript da aplicação (após o processo de transpilação de JSX => JS) 
tem como entrypoint a página `index.html` servida pelo Django em `website/templates/website/index.html`. 

O código React reside na pasta `website/src`. Seu entrypoint está em `website/src/index.jsx`.

## Instalação 

Para iniciar o projeto, é necessário realizar o download das dependências tanto do Frontend, quanto do
Backend.

### Dependências do BACKEND

Para instalar as dependências no Backend, recomendo a utilização do **virtualenv** (para saber mais, 
acesse a [Python Academy](https://pythonacademy.com.br/blog/python-e-virtualenv-como-programar-em-ambientes-virtuais)).

Crie seu ambiente virtual com: `virtualenv venv` e o ative com `source venv/bin/activate`.

Após ativar o ambiente virtual, instale as dependências com `pip install -r requirements.txt`.

### Dependências do FRONTEND  

Utilize o npm para instalar as dependências do projeto.

Para isso, execute `npm i` em seu terminal (será criada a pasta `node_modules/` - mas não se preocupe 
pois o mesmo já está em nosso `.gitignore`).

### Passos Iniciais

Antes de colocar o Backend em execução, é necessário atualizar o arquivo de ambiente `.env`, renomeando 
o arquivo `.env-exemplo` para `.env` e modificando seus atributos:

```python
# [Obrigatório] SECRET_KEY do Django
SECRET_KEY='secret-key'

# [Obrigatório] URL do Banco de Dados
DATABASE_URL='sqlite:///db.sqlite3'
```

Em seguida, estando na raiz do projeto, execute o script de start do projeto com `sh scripts/start.sh`.

## Execução

Para executar o projeto, é necessário executar o Backend e o Frontend separados.

Para colocar o Backend em execução, utilize o comando `python3 manage.py runserver`.

Em outro terminal, execute o Frontend com `npm run dev`. 
 
 
