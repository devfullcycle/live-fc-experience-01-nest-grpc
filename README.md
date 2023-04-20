<img src="https://events-fullcycle.s3.amazonaws.com/events-fullcycle/media/images/962edb195c0448df860fbea9304a7f24.png" width="200">

Participe gratuitamente: https://fcexperience.fullcycle.com.br/

## Sobre o repositório
Esse repositório contém o código-fonte ministrado na Microsserviços e gRPC na prática [https://www.youtube.com/watch?v=GAahWrE7ShE](https://www.youtube.com/watch?v=GAahWrE7ShE)

## Rodar a aplicação

O projeto tem 2 pastas:

* grpc-vanilla: Exemplo puro de gRPC

Faça o comando `npm install` e depois `npm run server` e `npm run client` para rodar o projeto.

* nestjs: Exemplo de gRPC com NestJS

Faça o comando `npm install` e depois rode o Jest para rodar o exemplo: `npx jest -t 'GrpcService' -c test/jest-e2e.json --forceExit`