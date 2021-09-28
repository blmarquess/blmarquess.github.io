### Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do
Manual da Pessoa Estudante da Trybe.

# Boas vindas ao repositório do projeto de adivinhação de Cor!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Sumário

- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
- [Como desenvolver](#como-desenvolver)
  - [Linter](#linter)
  - [Cypress](#cypress)
- [Requisitos do projeto](#requisitos-do-projeto)

    `Requisitos obrigatórios:`
    - [1 - Adicione no seu site um título com o nome do seu jogo](#1---adicione-no-seu-site-um-título-com-o-nome-do-seu-jogo)
    - [2 - Adicione um texto com o código RGB a ser adivinhado](#2---adicione-um-texto-com-o-código-rgb-a-ser-adivinhado)
    - [3 - Adicione a página opções de cores para serem adivinhadas](#3---adicione-a-página-opções-de-cores-para-serem-adivinhadas)
    - [4 - Adicione cores nas bolas elas devem ser geradas dinâmicamente](#4---adicione-cores-nas-bolas-elas-devem-ser-geradas-dinâmicamente)
    - [5 - Clicar em um circulo colorido, deve ser mostrado um texto indicando se está correto](#5---clicar-em-um-circulo-colorido-deve-ser-mostrado-um-texto-indicando-se-está-correto)
    - [6 - Crie um botão para iniciar/reiniciar o jogo](#6---crie-um-botão-para-iniciarreiniciar-o-jogo)

    `Requisitos bônus:`
    - [7 - Crie um placar que incremente 3 pontos para cada acerto no jogo](#7---crie-um-placar-que-incremente-3-pontos-para-cada-acerto-no-jogo)
- [Depois de terminar o desenvolvimento](#depois-de-terminar-o-desenvolvimento)
- [Revisando um pull request](#revisando-um-pull-request)
- [Avisos Finais](#avisos-finais)

---

# Habilidades

- Manipular o DOM.

- Manipular o Javascript.

- Manipular o CSS.

---

# Entregáveis

Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório.

Este _Pull Request_ deverá conter os arquivos `index.html`, `style.css` e `script.js` que conterão seu código HTML, CSS e JavaScript, respectivamente.

---

## O que deverá ser desenvolvido

- Será desenvolvida uma aplicação utilizando JavaScript, HTML5 e CSS3.

- Nesta aplicação deverá ser possível jogar um jogo de adivinhação de cores e sua pontuação deverá atualizar de acordo com os acertos.

---

## Desenvolvimento

- Desenvolva uma aplicação de um jogo de adivinhação de cores.

---

### Antes de começar a desenvolver:

1. Clone o repositório
  * `git@github.com:tryber/sd-016-b-project-color-guess.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-016-b-project-color-guess`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-project-color-guess`

4. Crie na raiz do projeto os arquivos que você precisará desenvolver:
  * Verifique que você está na raiz do projeto
    * Exemplo: `pwd` -> o retorno vai ser algo tipo _/Users/joaozinho/code/**sd-016-b-project-color-guess**_
  * Crie os arquivos index.html, style.css e script.js
    * Exemplo: `touch index.html style.css script.js`

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listados os arquivos em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-project-color-guess`

7. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-016-b-project-color-guess/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_, um título claro que o identifique, e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-016-b-project-color-guess/pulls) e confira que o seu _Pull Request_ está criado

---

## Durante o desenvolvimento

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_
  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_

---

### Como desenvolver

## Linter

Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `StyleLint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente no projeto, execute os comandos abaixo:

  ```bash
npm run lint
npm run lint:styles
```

Quando é executando o comando `npm run lint:styles`, ele irá avaliar se os seguintes arquivos com a extensão `CSS` está com o padrão correto.

Quando é executando o comando `npm run lint`, ele irá avaliar se os seguintes arquivos com a extensão `JS` e `JSX` está com o padrão correto.

⚠ **NESTE PROJETO O STYLELINT e ESLINT NÃO SERÁ AVALIADO. VOCÊ PODE RODAR O TESTE LOCALMENTE E FAZER AS CORREÇÕES SE DESEJAR!** ⚠

---

## Cypress

Cypress é uma ferramenta de teste de front-end desenvolvida para a web.
Você pode rodar o cypress localmente para verificar se seus requisitos estão passando, para isso execute o um dos seguintes comandos:

Para executar os testes apenas no terminal:

```bash
npm test
```

Para executar os testes e vê-los rodando em uma janela de navegador:

```bash
npm run cypress:open
```

***ou***

```bash
npx cypress open
```

Após executar um dos dois comandos acima, será aberta uma janela de navegador e então basta clicar no nome do arquivo de teste que quiser executar (project.spec.js), ou para executar todos os testes clique em Run all specs

Você também pode assistir a [este](https://vimeo.com/539240375/a116a166b9) vídeo 😉🎙

**Para rodar o cypress é preciso ter rodado o comando npm install anteriormente.**

---

# Requisitos do projeto

### 💡Veja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode ~~e deve~~ ir além para deixar o projeto com a sua cara e impressionar à todos!

<p align="center">
  <img
    class="rounded mx-auto d-block"
    src="/guess-the-color.gif"
    alt="Gif exibindo um jogo de adivinhar a cor"
  >
</p>

## ⚠️ Leia-os atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de _ids_ que alguns elementos de seu projeto devem possuir**. ⚠️

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

---

### 👀 Observações importantes:

* Lembrem-se que como pessoas desenvolvedoras devemos fazer pesquisas e garimpar resultados para auxiliar no entendimento do assunto. Assim, para solucionar os requisitos do projeto é inevitável e estimulado que pesquisas sejam feitas nas mais variadas fontes (course, vídeos do course, google, youtube, etc) sempre tomando cuidado para utilizar fontes "confiáveis" nas pesquisas da Internet, como por exemplo:

  * [Javascript.com](http://javascript.com/)

  * [W3Schools](https://www.w3schools.com/js/default.asp)

  * [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

  * [StackOverflow](https://pt.stackoverflow.com/questions/tagged/javascript)

* Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução de tela de `1366 x 768` (1366 pixels de largura por 768 pixels de altura).

  * #### ⚠️ Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação [deste plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome` para facilitar a configuração da resolução. ⚠️

* Atente-se para o tamanho das imagens que você utilizará neste projeto. **Não utilize imagens com um tamanho maior que _500Kb_.**
  * #### ⚠️ Utilize uma ferramenta [como esta](https://picresize.com/pt) para redimensionar as imagens. ⚠️

  * Caso a avaliação falhe com alguma mensagem de erro parecida com `[409:0326/130838.878602:FATAL:memory.cc(22)] Out of memory. size=4194304`, provavelmente as imagens que você está utilizando estão muito grandes. Tente redimensiona-las para um tamanho menor.

* Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os **detalhes da execução do avaliador**.

  * Na página do seu _Pull Request_, acima do "botão de merge", procure por _**"Evaluator job"**_ e clique no link _**"Details"**_;

  * Na página que se abrirá, procure pela linha _**"Cypress evaluator step"**_ e clique nela;

  * Analise os resultados a partir da mensagem _**"(Run Starting)"**_;

  * Caso tenha dúvidas, consulte [este vídeo](https://vimeo.com/420861252) ou procure as pessoas instrutoras.

* Você tem liberdade para adicionar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, **desde que tais comportamentos adicionais não conflitem com os requisitos propostos**.

  * Em outras palavras, você pode fazer mais do que for pedido, mas nunca menos.

* Contudo, tenha em mente que **nada além do que for pedido nos requisitos será avaliado**. _Esta é uma oportunidade de você exercitar sua criatividade e experimentar com os conhecimentos adquiridos._


---

## Requisitos Obrigatórios:

Neste projeto, você implementará um adivinhador de cor RGB. Ou seja, dada uma string RGB, você irá fornecer 6 alternativas visuais de cores, sendo uma delas a correta! Você poderá estilizar seu projeto da **forma que desejar** desde que todos os requisitos sejam cumpridos. Use sua imaginação! 🧠

---

## Requisitos do projeto

### 1 - Adicione no seu site um título com o nome do seu jogo

**O que será verificado:**

- Será verificado se o **id** do título é `title`.

### 2 - Adicione um texto com o código RGB a ser adivinhado

**O que será verificado:**

- Será verificado se o seu id deve ser rgb-color;

- Será verificado se o texto deve conter os três números das cores RGB a ser adivinhada, no seguinte formato: `(168, 34, 1)`.

### 3 - Adicione à página opções de cores para serem adivinhadas

**O que será verificado:**

- Será verificado que deve conter 6 circulos como opção de cor de adivinhação;

- Será verificado que a class de todos os circulos deve ser ball.

### 4 - Adicione cores nas bolas, elas devem ser geradas dinâmicamente

**O que será verificado:**

- Será verificado que ao carregar a página, as cores de cada um dos 6 circulos coloridos devem ser geradas via JavaScript.

### 5 - Clicar em um circulo colorido, deve ser mostrado um texto indicando se está correto

**O que será verificado:**

- Será verificado que o **id** do elemento deve ser `answer`;

- Será verificado que quando o jogo é iniciado, o texto exibido deve ser `"Escolha uma cor"`;

- Será verificado se o circulo colorido for o **correto**, deve ser exibido o texto "Acertou!";

- Será verificado se o circulo colorido for o **incorreto**, deve ser exibido o texto "Errou! Tente novamente!".

### 6 - Crie um botão para iniciar/reiniciar o jogo

**O que será verificado:**

- Será verificado que o botão deve ter o id reset-game;

- Será verificado que ao clicar no botão, novas cores devem ser geradas via JavaScript e o elemento rgb-color deve ser atualizado;

- Será verificado que ao clicar no botão, o elemento answer deve voltar ao estado inicial, exibindo o texto "Escolha uma cor".

## BÔNUS

### 7 - Crie um placar que incremente 3 pontos para cada acerto no jogo

**O que será verificado:**

- Será verificado que o elemento deve ter o **id** `score`;

- Será verificado que o valor inicial dele deve ser 0;

- Será verificado que a cada acerto, é incrementado 3 pontos ao placar;

- Será verificado que ao clicar no botão reiniciar, o placar NÃO deve ser resetado.

---

## Depois de terminar o desenvolvimento

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-016-b`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### Revisando um pull request

À medida que você e as outras pessoas que estudam na Trybe forem entregando os projetos, vocês receberão um alerta via Slack para também fazer a revisão dos Pull Requests dos seus colegas. Fiquem atentos às mensagens do "Pull Reminders" no Slack!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.

---

# Avisos Finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

---
