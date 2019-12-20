FROM node:10
WORKDIR /usr/src/techlore
COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "index.js" ]