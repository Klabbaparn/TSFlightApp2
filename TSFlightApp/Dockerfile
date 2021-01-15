FROM node:10-alpine

RUN mkdir -p /app

WORKDIR /app

ENV PORT 4200

COPY package.json /app/package.json

RUN npm install
#RUN npm install -g @angular/cli@7.3.9
RUN npm install -g @angular/cli@11.0.5

COPY . /app

CMD ng serve --host 0.0.0.0