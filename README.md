# Portal do Condomínio

Este projeto é um site estático para um portal de condomínio, com uma área de login e uma dashboard inicial para o morador/administrador. A interface foi desenvolvida em HTML, CSS e JavaScript puro, sem backend real, sendo uma demonstração front-end de um sistema de acesso simples.

## Visão geral

O objetivo do sistema é simular um painel digital para gestão residencial, incluindo:

- autenticação de usuário
- painel inicial com resumo do condomínio
- comunicados recentes
- acesso rápido às principais ações
- layout responsivo e visual moderno

## Repositório

- GitHub: https://github.com/fraurizel-front/condservice

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Arquivos estáticos

## Estrutura do projeto

```text
condservice/
├── index.html
├── dashboard.html
├── static/
│   ├── style.css
│   ├── dashboard.css
│   └── script.js
└── README.md
```

## Funcionalidades

### Página de login

A página principal (`index.html`) contém:

- campo de e-mail ou CPF
- campo de senha
- opção de lembrar usuário
- link para recuperação de senha
- botão de login
- mensagem de erro em caso de credenciais inválidas

### Dashboard

A página `dashboard.html` apresenta:

- cabeçalho com nome do portal e botão de logout
- mensagem de boas-vindas
- cards de resumo do condomínio
- listagem de comunicados recentes
- área de acesso rápido

### Autenticação simulada

A autenticação é implementada em JavaScript com `sessionStorage`.

- Se as credenciais forem válidas, o usuário é redirecionado para `dashboard.html`.
- Caso contrário, uma mensagem de erro é exibida.
- A dashboard verifica se o usuário está autenticado antes de liberar acesso.

## Credenciais de demonstração

Para fins de teste local da interface, as credenciais configuradas são:

- E-mail: `admin@condominio.com`
- Senha: `123456`

## Como executar localmente

Como o projeto é estático, basta abrir o arquivo `index.html` no navegador.

Também é possível rodar localmente com um servidor simples:

```bash
python -m http.server 8000
```

Em seguida, acesse:

```text
http://localhost:8000
```

## Fluxo de uso

1. Acesse a página inicial.
2. Informe as credenciais de demonstração.
3. Após o login, o sistema redireciona para a dashboard.
4. Na dashboard, é possível sair e voltar para a tela de login.

## Observações importantes

- Este projeto não possui backend real.
- Não há banco de dados ou autenticação segura.
- As credenciais são fixas no código e servem apenas para demonstração.
- Os dados exibidos são estáticos e não são persistidos.

## Melhorias sugeridas

- integração com backend e banco de dados
- autenticação segura com sessão ou JWT
- cadastro de moradores e administradores
- páginas extras como financeiro, ocorrências e reservas
- validação de formulário mais robusta
- acessibilidade e responsividade aprimoradas

## Conclusão

Este projeto funciona como uma interface front-end mockada de um portal de condomínio, com fluxo de login e dashboard. Ele é adequado para prototipagem, apresentação e evolução para um sistema completo no futuro.

## Licença

Este projeto não possui licença definida até o momento.
