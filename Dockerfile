# Stage 1: Compile and Build angular codebase

FROM node:latest as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "server"]

# Stage 2: Serve app with nginx server

FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/local/app/dist/energy-assets-dashboard /usr/share/nginx/html

EXPOSE 80
