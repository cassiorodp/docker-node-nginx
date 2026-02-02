# Full Cycle Challenge: Docker Node Nginx

Este projeto implementa uma aplicação usando Docker, com Nginx como proxy reverso, uma aplicação Node.js que interage com um banco MySQL.

## Estrutura

- `nginx/`: Configuração do Nginx
- `node/`: Aplicação Node.js
- `docker-compose.yaml`: Orquestração dos serviços

## Como executar

1. Certifique-se de ter o Docker e Docker Compose instalados.
2. Na raiz do projeto, execute:
   ```bash
   docker-compose up -d
   ```
3. Acesse a aplicação em `http://localhost:8080`.

## Funcionalidades

- Cada acesso à aplicação insere um nome aleatório no banco de dados.
- A página exibe "Full Cycle Rocks!" e a lista de nomes cadastrados.

## Desenvolvimento

O volume está configurado para permitir edição em tempo real do código Node.js.
