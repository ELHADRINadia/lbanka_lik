FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@9.3.0

COPY . .

EXPOSE 5000

CMD ["npm","run","start"]