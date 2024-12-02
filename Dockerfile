FROM node:18.20

RUN apt-get update && apt-get install -y git

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 5173

ENV PATH /app/node_modules/.bin:$PATH