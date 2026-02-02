FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN apt-get update && apt-get install -y wget \
  && wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz \
  && tar -C /usr/local/bin -xzf dockerize-linux-amd64-v0.6.1.tar.gz \
  && rm dockerize-linux-amd64-v0.6.1.tar.gz

CMD ["node","index.js"]