FROM node:15.10.0 AS ui-dev
WORKDIR /app
COPY [".", "./"]
RUN npm i
EXPOSE 4050
CMD ["npm", "start"]