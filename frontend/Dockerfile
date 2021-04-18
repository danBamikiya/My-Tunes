FROM node:14-slim AS ui-dev

WORKDIR /app

COPY ["./package*.json", "./"]

RUN npm ci

COPY [".", "."]

USER node

EXPOSE 4050

CMD ["npm", "start"]