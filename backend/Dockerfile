FROM node:20.10.0-alpine

RUN npm i pm2 -g

ADD . /app
WORKDIR /app

RUN rm -rf node_modules

COPY ./pm2.json /app/
COPY ./package.json /app/
COPY ./package-lock.json /app/

RUN npm install --verbose

COPY . /app/

EXPOSE 3003

# CMD ["npm", "run", "dev"]