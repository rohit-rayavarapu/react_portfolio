# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Install a simple web server to serve the static files
RUN npm install -g serve

# Command to run the app
CMD ["serve", "-s", "build"]

# Expose the port the app runs on
EXPOSE 3000
