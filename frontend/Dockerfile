FROM node:14

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

RUN npm i -g serve



EXPOSE 5000

CMD ["serve", "-s", "build"]