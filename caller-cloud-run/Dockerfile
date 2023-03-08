FROM node:18-slim
WORKDIR /app
COPY package.json package*.json /app/
RUN npm ci
ADD . /app
RUN npm run compile

CMD [ "node",  "dist/index.js" ]
