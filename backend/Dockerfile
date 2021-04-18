FROM node:14-slim AS server-dev

WORKDIR /app

COPY ["./package*.json", "./"]

RUN npm ci

COPY [".", "."]

USER node

EXPOSE 4040

CMD ["npm", "run", "dev"]