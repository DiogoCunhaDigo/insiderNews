insiderNews
===========

Realtime news engine ( +gamification )

 > Work in progress: http://beta.insidernews.com.br

## Main goal
Harvest gold coins and increase xp points by contributing with content and chatting with other users. Unlock new features and abilities with higher xp points.

## The economy model

#### Users
 - [ ] Has gold coins and xp points.
 - [ ] Win gold coins for every new message posted.
 - [ ] Can exchange gold coins with other users by clicking on their messages.

#### Threads
 - [ ] Has xp points.
 - [ ] Starts with 100 xp points and looses 1 point every second.
 - [ ] Everytime someone opens the Thread, it receives 1 xp point.
 - [ ] Everytime someone replies to the Thread, it receives 10 xp points.
 - [ ] Everytime someone rank other user message, the Thread receives 1 xp point.
 - [ ] Everytime someone shares the Thread in Facebook, it receives 50 xp points.
 - [ ] Threads have control over the uniqueness of the shares.

## Abilities

Ability to                 | Minimum xp points
:------------------------- | ----------------:
Post messages              | 0
Change username            | 1
Change username color      | 100
Post news                  | 250
Post messages with links   | 500
Post bold messages         | 2.000
Post messages with images  | 10.000
Post global notifications  | 50.000


## Features
 - [ ] Realtime updates
 - [ ] RSS feed aggregator
 - [ ] Gamification
 - [ ] Per news chat
 - [ ] Rankings of users, threads and messages

## Infrastructure + Development

Layer                        | Solution
:--------------------------- | :------------------
Web server                   | **Express**
Realtime transport           | **Socket.io**
Client side framework        | **AngularJS**
Client side router           | **ui-router**
Server side template engine  | **Swig**
Model client-side            | **Plain objects**
Model server-side            | **Sequelize Model**
ORM                          | **Sequelize**
Default database             | **SQLite**
Build process                | **Gulp**