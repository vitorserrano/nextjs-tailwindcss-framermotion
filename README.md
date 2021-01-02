<p align="center">
  <img src="https://user-images.githubusercontent.com/51726945/103447385-726daf00-4c69-11eb-859e-2a66c6d8d98c.png" width="350px" />
</p>

<h3 align="center">
  ReactJS + NextJS setup
</h3>

## :bookmark: Sobre

Este repositório é um template para projetos ReactJS com NextJS com typescript criado a partir de um [vídeo](https://www.youtube.com/watch?v=1nVUfZg2dSA&t=244s) da [Rocketseat](rocketseat.com.br).

## :rocket: Tecnologias utilizadas

- Reactjs
- Nextjs
- Typescript
- Eslint
- Prettier
- Editorconfig
- Styled Components

## :fire: Pré-requisitos

- Node.js
- NPM ou Yarn

## :zap: Como usar

1. Faça um clone desse repositório: `https://github.com/vitorserrano/reactsetup.git`
2. Instale as dependências: `npm install` ou `yarn`
3. Inicie a aplicação: `npm run dev` ou `yarn dev`

## :books: Documentação

1. Criação do projeto Reactjs + Nextjs: `yarn create next-app myApp`

2. Adicionar typescript:
   - Adicionar dependência: `yarn add typescript @types/react @types/node -D`
   - Alterar as extensões `.js` dentro de `/pages` para `.tsx`
   - Rodar o comando: `yarn dev` para aplicar o typescript

3. Adicionar Eslint + Prettier:
- Adicionar dependência **Eslint**: `yarn add eslint -D`
- Iniciar arquivo: `yarn eslint --init`
- Remover arquivo `package.json.lock` e rodar `yarn`
- Adicionar dependência **Prettier**: `yarn add prettier eslint-plugin-prettier eslint-config-prettier -D`
- Dentro de `eslintrc.json`:
  - Em `"extends"`adicionar:
    ```json
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "prettier/airbnb",
    "prettier/react"
    ```
  - Em `"plugins"` adicionar: `"prettier"`
  - Em `"rules"` adicionar: `"prettier/prettier": "error"`
- Criar `.eslintignore` e adicionar:
  ```json
  node_modules
	.next
	/*.js
  ```
 - Criar `prettier.config.js` e adicionar:
  ```javascript
      module.exports = {
        semi: true,
        singleQuote: true,
        arrowParens: "avoid",
        trailingComma: "all",
        endOfLine: "auto",
      };
  ```
4. Adicionar **Styled Components**
  - Instalar dependência: `yarn add styled-components`
  - Instalar tipagem: `yarn add @types/styled-components`

5. Adicionar **Next Images**: `yarn add next-images`

6. Adicionar **Inline React-SVG**: `yarn add babel-plugin-inline-react-svg -D`

