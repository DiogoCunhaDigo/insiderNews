insiderNews
===========

Notícias em tempo-real com gamificação.

## Objetivo principal
Coletar moedas de ouro e aumentar os pontos de experiência ao conversar com outros usuários e contribuindo com conteúdo. Habilite novos recursos ao aumentar os seus pontos de experiência.

## O modelo econômico do sistema

#### Usuários
 - [ ] Possuem moedas de ouro e pontos de experiência.
 - [ ] Ganham 2 moedas de ouro para cada nova mensagem publicada.
 - [ ] Ganham 50 moedas de outro para cada notícia compartilhada no Facebook.
 - [ ] Podem trocar moedas de ouro com outros usuários ao clicar nas mensagens dele.
 
#### Notícias
 - [ ] Possuem pontos de experiência.
 - [ ] Começam com 100 pontos de experiência e perdem 1 ponto a cada segundo.
 - [ ] Toda ver que alguém abre a notícia, ela ganha 1 ponto de experiência.
 - [ ] Toda vez que alguém conversa dentro da notícia, ela ganha 10 pontos de experiência.
 - [ ] Toda vez que alguém clica na mensagem de outro usuário para trocar moedas, ela ganha 1 ponto de experiência.
 - [ ] Toda vez que alguém compartilha a notícia no Facebook, ela ganha 50 pontos de experiência.
 
## Habilidade

Conseguir                    | Pontos de experiência mínimos
:--------------------------- | ----------------:
Enviar mensagens             | 0
Alterar cor do usuário       | 100
Enviar notícias              | 250
Enviar mensagens com links   | 500
Enviar mensagens em negrito  | 2.000
Enviar mensagens com imagens | 10.000
Publicar avisos globais      | 50.000

*Todos estes pontos poderão ser configurados*


## Recursos do sistema
 - [ ] Atualização em tempo-real
 - [ ] Agregador de notícias em múltiplas fontes
 - [ ] Gamificação
 - [ ] Ranking de usuários, notícias e mensagens

## Infraestrutura e desenvolvimento

Camada                       | Solução
:--------------------------- | :------------------
Web server                   | **Express**
Realtime transport           | **Socket.io**
Client side framework        | **AngularJS 2**
Client side router           | **AngularJS 2**
Server side template engine  | **Swig**
Model client-side            | **ES6 Classes**
Model server-side            | **Sequelize Model**
ORM                          | **Sequelize**
Default database             | **SQLite**
Build process                | **Gulp**
