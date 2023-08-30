# Use the official Node.js image as the base image
FROM node:alpine AS development

# Set the NODE_ENV environment variable to "development"
ENV NODE_ENV development

# Set the working directory within the container
WORKDIR /node-app

# Copy the package.json and package-lock.json files to the container
COPY ./package.json ./package-lock.json /node-app/

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Set the command to run when the container starts
CMD ["node", "server.js"]