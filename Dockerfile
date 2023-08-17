FROM node:18-alpine

WORKDIR /home/app/bookhub

COPY package*.json .

RUN npm install

EXPOSE 3033