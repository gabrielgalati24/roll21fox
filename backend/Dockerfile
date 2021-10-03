FROM node:14

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3001

RUN npm run build

CMD ["npm", "run", "dev"]