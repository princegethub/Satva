#Build the react app
FROM node:18 AS build

#Set the directory inside the container
WORKDIR /app

#Copy the package.json and package.lock.json 
COPY package-lock.json package.json ./

#Install the dependencis
RUN npm install
COPY . .
#Build the app
RUN npm run build

# Serve the React app using nginx
FROM nginx:alpine
#Serve the react app using lightweight wave server nginx
COPY --from=build app/dist /usr/share/nginx/html

EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]