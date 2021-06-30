FROM node:14-slim AS ui-dev

ENV NODE_ENV development

WORKDIR /app

COPY --chown=node:node ["./package*.json", "./"]

RUN npm ci

COPY --chown=node:node [".", "."]

EXPOSE 4050

USER node

CMD ["dumb-init", "npm", "start"]

FROM ui-dev AS ui-build

ENV NODE_ENV production

WORKDIR /app

USER node

RUN ["dumb-init", "npm", "run", "build"]