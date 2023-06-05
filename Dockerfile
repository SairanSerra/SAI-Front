FROM node:lts-alpine as build-stage
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Aplly source container 
FROM nginx:stable-alpine as production-stage
COPY ./deploy.conf/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY  --from=build-stage /app/env-production /usr/share/nginx/html
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 4001
CMD ["nginx", "-g", "daemon off;"]