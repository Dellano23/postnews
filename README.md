# [dellano-portfolio](https://dellano-portfolio.com.br/)

O [dellano-portfolio](https://dellano-portfolio.com.br/) é um site que criei com o objetivo de reunir todos os projetos que desenvolvi até aqui, onde aproveitei uma excelente oportunidade para absorver os conhecimentos do curso.dev para criação de um projeto full-stack, utilizando tecnologias que ainda não havia utilizado em um projeto real, como JS, NodeJS, NextJs.

Esse repositório contém o código-fonte do site e da API do dellano-portfolio.

**Conteúdo**

- [Histórico do desenvolvimento](#histórico-de-desenvolvimento)
  - [Milestones e Issues](#milestones-e-issues)
- [Instalar e rodar o projeto](#instalar-e-rodar-o-projeto)
  - [Dependências globais](#dependências-globais)
  - [Dependências locais](#dependências-locais)
  - [Rodar o projeto](#rodar-o-projeto)
- [Rodar os testes](#rodar-os-testes)

## Histórico de Desenvolvimento

### Milestones e Issues

Milestones são marcos históricos do projeto para ajudar a guiar o desenvolvimento numa direção específica. Em todo desenvolvimento, registrei as mudanças principais em issues e milestones, você pode conferir meu processo e toda minha evolução através delas.

Pelo GitHub, é possível ver [a Milestone em andamento](https://github.com/Dellano23/portfolio/milestones) e [as Milestones encerradas](https://github.com/Dellano23/portfolio/milestones?state=closed).

Nelas você encontra as Issues e sub-issues, com uma descrição de todo meu processo:

<img width="1615" height="805" alt="image" src="https://github.com/user-attachments/assets/7ebe9498-e2c4-4dab-9307-4bc7447f9762" />

<img width="1687" height="842" alt="image" src="https://github.com/user-attachments/assets/3bdf9c8a-59b9-41fc-b5c5-74b740964b63" />

## Instalar e rodar o projeto

Rodar a aplicação em sua máquina local é uma tarefa bastante simples.

### Dependências globais

Você precisa ter duas principais dependências instaladas:

- Node.js LTS v22 (ou qualquer versão superior)

```bash
node -v
```

- Docker Engine v17.12.0 com Docker Compose v1.29.2 (ou qualquer versão superior)

```bash
docker -v
```

### Dependências locais

_Importante: Acesse sempre o diretório `/postnews` para estas ações abaixo_

Com o repositório clonado e as dependências globais instaladas, você pode instalar as dependências locais do projeto:

```bash
cd postnews
npm install
```

### Rodar o projeto

_Importante: Garanta que o docker desktop e o Node.Js estejam em execução no seu dispositivo_

Para rodar o projeto localmente, basta acessar o diretório `postnews`, com o comando `cd postnews` e executar o comando abaixo:

```bash
npm run dev
```

Isto irá automaticamente rodar serviços como Banco de dados (incluindo as Migrations) e irá expor um Serviço Web (Frontend e API) no seguinte endereço:

```bash
http://localhost:3000/
http://localhost:3000/api/v1/status
```

Observações:

- Para derrubar todos os serviços, basta utilizar as teclas `CTRL+C`, que é o padrão dos terminais para finalizar processos.

## Rodar os testes

Lembrando que os serviços precisam estar rodando para os testes passarem, use `npm run dev`.

Há várias formas de rodar os testes dependendo do que você deseja fazer, mas o primeiro passo antes de fazer qualquer alteração no projeto é rodar os testes de forma geral para se certificar que tudo está passando como esperado. O comando abaixo irá rodar todos os serviços necessários, rodar os testes e em seguida derrubar todos os serviços.

Na pasta `/postnews`:

```bash
npm test
```

Caso queira manter os serviços e testes rodando enquanto desenvolve (e rodando novamente a cada alteração salva), use o modo `watch` com o comando abaixo:

```bash
npm run test:watch
```

Os logs do Serviço Web e dos testes irão se misturar, então caso queira rodar eles de forma separada, abra dois terminais separados e rode o seguinte:

```bash
# Terminal 1
npm run dev

# Terminal 2
npm run test:watch
```

Caso não queira executar (ou dar `watch`) em todos os testes e queira isolar arquivos específicos de teste, você pode filtrar pelo caminho. Não é necessário digitar o caminho inteiro para o arquivo e você também pode fornecer mais de um caminho, veja alguns exemplos abaixo:

```bash
# Rodar apenas o t este da api de status
npm run test -- api/v1/status
```
