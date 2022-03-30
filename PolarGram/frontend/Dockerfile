FROM node:16.14.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.0 -g --silent

COPY ./frontend ./

CMD ["npm", "start"]