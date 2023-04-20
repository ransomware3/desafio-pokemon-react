# PokeDados | Dados de pokemóns

Uma aplicação React feita em CRA (create-react-app) que consome e trata dados da [PokeAPI](https://pokeapi.co/) ,  &nbsp;a api pública de pokemóns
<br>
<br>

### Aplicação no ar :  &nbsp;[Clique aqui](https://desafio-pokemon-react.vercel.app/)
<br>
<br>

## Propósito da aplicação :

Renderiza uma lista de pokemons que se inicia com um total de 200 posições e que aumenta de tamanho em 50 posições de acordo com o clique do usuário em um botão.
<br>
<br>

## Funcionalidades :

 - Campo input para busca de Pokemons por `NOME` ou `ID`
 - Campo select para filtro de Pokemons por `TIPO`
 - Alternador de temas para `LIGHT` e `DARK`
 - Botão `SHOW MORE` que adiciona +50 pokemons à listagem atual
 - Página detalhada individual, contendo mais informações sobre cada Pokemon
 - Botões de navegação para o topo e final da página
<br>
<br>

## Design responsivo porém focado em `Desktop`
<br>
<br>

## Tecnologias utilizadas :

 - `React.js` : Pela possibilidade da criação de componentes individuais

 - `Styled Components` : Pela estilização facilitada em JS e mais segura para páginas com renderização dinâmica

 - `React Router` : Pela criação de rotas e desenvolvimento de uma SPA (single page application) 

 - `Axios` : Para mehor e mais facilitado consumo de api's

 - `Context API` : Para gerenciamento de contextos mais eficaz
<br>
<br>

## Decisões adotadas durante o desenvolvimento :

 - `Adicionar o ID na listagem inicial` : Para que a busca pudesse ser feita também por ID

 - `Buscar outras imagens para listagem inicial e novos GIFs para a página detalhada` : Para um design mais bonito e profissional
<br>
<br>

#
<br>

## "Como posso rodar o projeto em minha máquina?"

 - Instalar o Node.js versão LTS ou Current (LTS recomendada).

 - Inicializar uma pasta com git e dar um "git clone < url-do-projeto >"

 - Com o terminal aberto dar um "npm install", para instalar todas as dependências necessárias

 - Dar um "npm start", para rodar o projeto em uma porta local