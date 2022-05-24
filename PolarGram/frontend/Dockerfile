FROM node:16.14.0-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install -g npm@8.10.0

RUN npm install --silent

COPY ./ ./
RUN npm run build

# Stage 2:
FROM nginx:1.17.1-alpine

COPY --from=build /app/build /usr/share/nginx/html
