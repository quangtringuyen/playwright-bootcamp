# Get the base image of Node version 16
FROM node:16

# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:focal

# Set the work directory for the application
WORKDIR /e2e

# Set the environment path to node_modules/.bin
ENV PATH /e2e/node_modules/.bin:$PATH

# COPY the needed files to the app folder in Docker image
COPY package.json /e2e/
COPY src/ /e2e/src/
COPY dependencies/ /e2e/dependencies/
COPY playwright.config.ts /e2e/
COPY .env /e2e/

# Install the dependencies in Node environment
RUN npm install
RUN npm install playwright@latest