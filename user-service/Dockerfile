# Use the official Node.js image.
FROM node:16

# Set the working directory.
WORKDIR /app

# Copy package.json and package-lock.json to the working directory.
COPY package*.json ./

# Install the app dependencies.
RUN npm install

# Copy the app source code to the working directory.
COPY . .

# Compile the TypeScript code to JavaScript.
RUN npm run build

# Expose the service port.
EXPOSE 3000

# Start the service.
CMD ["node", "dist/main.js"]