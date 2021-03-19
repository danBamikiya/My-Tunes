FROM node:15.10.0 AS server-dev
WORKDIR /app
COPY [".", "./"]
RUN npm i
EXPOSE 4040
CMD ["npm", "run", "dev"]