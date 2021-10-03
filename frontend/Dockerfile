FROM node:14

WORKDIR /app

COPY . /app

RUN npm install

RUN npm i -g serve

RUN npm run build

EXPOSE 5000

CMD ["serve", "-s", "build"]