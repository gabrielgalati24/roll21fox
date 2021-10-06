FROM node:alpine

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

RUN npm i -g serve





CMD ["serve", "-s", "build"]