# build stage
FROM node:14-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# production stage
#FROM nginx:stable-alpine as production-stage
FROM fholzer/nginx-brotli:v1.12.2
WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]


