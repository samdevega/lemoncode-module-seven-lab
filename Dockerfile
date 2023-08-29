FROM node:18.17.1-alpine AS base
RUN mkdir -p /usr/app
WORKDIR /usr/app

FROM base AS build
COPY ./ ./
RUN npm install
RUN npm run build

FROM base AS release
COPY --from=build /usr/app/dist ./public
COPY ./server/package.json ./
COPY ./server/index.js ./
RUN npm install --only=production

ENV PORT=8081
ENV STATIC_FILES_PATH=./public
EXPOSE 8081

ENTRYPOINT [ "node", "index.js" ]
