FROM node:20.10.0-alpine

WORKDIR /app

COPY ./package.json /app/
COPY ./package-lock.json /app/

RUN npm i --verbose

COPY . /app/

EXPOSE 8080
