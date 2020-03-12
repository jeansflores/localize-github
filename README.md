# Localize Github

Este projeto é um client-side para a API do GitHub, com ela é possível buscar usuários cadastrados no Github, podendo visualizar detalhes e repositórios de mesmo.

Acesse a demo da aplicação [aqui](https://localize-github.netlify.com/).

## Tecnologias

Foi utilizado as seguintes tecnologias para desenvolver este projeto:

-  [ReactJS](https://reactjs.org/)
-  [Axios](https://github.com/axios/axios)
-  [Formik](https://jaredpalmer.com/formik/docs/overview)
-  [Prop-Types](https://github.com/facebook/prop-types)
-  [React-Animations](http://react-animations.herokuapp.com/)
-  [React-Icons](https://react-icons.netlify.com/)
-  [React Router](https://github.com/ReactTraining/react-router)
-  [Styled-Components](https://www.styled-components.com/)
-  [Yup](https://github.com/jquense/yup)
-  [VS Code][vc] com [EditorConfig][vceditconfig] e [ESLint][vceslint]

## Pré-requisitos

Para incializar este projeto você precisará no seu computador os seguintes itens:

- [Git](https://git-scm.com)
- [Node.js][nodejs] ou [Yarn][yarn]

## Primeiros Passos

Se você já possui os pré-requisitos instalados no seu computador, basta apenas clonar, instalar as dependências e "executar" do projeto.

Siga os passos abaixo no seu terminal:

```bash
# Clonar o repositório
$ git clone https://github.com/jeansflores/localize-github.git

# Entrar na pasta do repositório
$ cd localize-github

# Instalar as dependências do projeto
$ yarn install

# Inicializa o servidor
$ yarn start
```

Após a inicialização do servidor, estará disponível a aplicação na url http://localhost:3000/, agora é só abrir no seu navegador de preferência. Voilà!

## Melhorias Futuras

[ ] Scroll infinito na listagem de repositórios (otimizar a busca de 10 em 10);
[ ] Multilinguagem (i18n).

[nodejs]: https://nodejs.org/!
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
