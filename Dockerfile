# stage1 as builder
FROM node:alpine as builder
ARG ENVIRONTMENT=development
WORKDIR /app
COPY . .
RUN npm i && npm run build:${ENVIRONTMENT}

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
RUN sed -i '9 i try_files $uri $uri/ /index.html;' /etc/nginx/conf.d/default.conf 

COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]