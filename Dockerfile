### STAGE 1: Build ###
FROM node:12.7-alpine AS build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

### STAGE 2: Run ###
FROM nginx
COPY --from=build /app/dist/mylost-web /usr/share/nginx/html
EXPOSE 80