# Use a Node base image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Express
RUN npm install

# Bundle app source
COPY . .

# Your app listens on port 8080, so you need to expose this port
EXPOSE 8080

# Command to start the app
CMD ["node", "server.js"]
