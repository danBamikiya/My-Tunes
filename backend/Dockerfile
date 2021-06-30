FROM node:14-slim AS server-dev

ENV NODE_ENV development

WORKDIR /app

COPY --chown=node:node ["./package*.json", "./"]

RUN npm ci

COPY --chown=node:node [".", "."]

EXPOSE 4040

USER node

CMD ["dumb-init", "npm", "run", "dev"]

FROM server-dev AS server-build

ENV NODE_ENV production

WORKDIR /app

USER node

CMD ["dumb-init", "npm", "start"]