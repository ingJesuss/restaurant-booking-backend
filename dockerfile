# restaurant-backend/Dockerfile
FROM node:lts-alpine
# EXPLICACIÓN: Usamos 'lts-alpine' porque es una versión estable y ligera de Node.js,
# lo que reduce el tamaño del contenedor y el tiempo de descarga.

WORKDIR /usr/src/app

# Separamos la copia de package.json de la copia de código para optimizar el caché de Docker
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000
CMD [ "npm", "start" ]
