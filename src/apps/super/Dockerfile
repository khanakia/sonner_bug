FROM node:21-alpine

WORKDIR /app

COPY package.json ./

COPY .npmrc ./

RUN npm install

EXPOSE 2303

CMD ["npm", "run", "dev"]
