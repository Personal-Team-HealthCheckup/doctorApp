# Use the latest Ubuntu image as the base
FROM ubuntu:latest

# Set the maintainer label
LABEL maintainer="shubhamsarode435@gmail.com"

# Update the package list and install basic packages
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y \
    curl \
    wget \
    git \
    vim \
    sudo \
    net-tools \
    iputils-ping \
    unzip \
    build-essential \
    nodejs \
    npm \
    && apt-get clean

# Install any additional tools required for CI/CD
RUN npm install -g npm@latest

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install Node.js dependencies if applicable
RUN npm install

# Run any linting or testing during the build
RUN npm run lint
RUN npm test

# Expose a port if your app runs in a containerized environment (optional)
# EXPOSE 8080

# Define the command to run when the container starts (if needed)
CMD ["npm", "start"]
