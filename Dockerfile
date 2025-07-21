# Use the official Node.js LTS image as the base
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install serve globally to serve the production build
RUN npm install -g serve

# Expose the port serve uses
EXPOSE 3000

# Start the production server
CMD ["serve", "-s", "dist", "-l", "3000"]
