FROM node:13.12.0-alpine

RUN mkdir -p /src/key_finder

WORKDIR /src/key_finder

COPY . /src/key_finder

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "start-production" ]