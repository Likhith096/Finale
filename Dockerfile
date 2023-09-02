# Use the official Node.js image as the base image
FROM node:alpine AS development

# Set the NODE_ENV environment variable to "development"
ENV NODE_ENV development

# Set the working directory within the container
WORKDIR /node-js-app

# Add the ingredients (copy package files and install dependencies)
COPY package*.json ./
RUN npm install

EXPOSE 3000

## THE LIFE SAVER
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

# Add the rest of the app's files
COPY . .

# CMD [ "node", "server.js" ]
CMD /wait && node server.js