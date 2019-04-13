FROM node:11-alpine as node
COPY . /app
WORKDIR /app
RUN apk add python make g++ &&\
    apk add nodejs &&\
    npm install &&\
    npm run build
EXPOSE 3000

FROM nginx
RUN mkdir /app
COPY --from=node /app/dist /app