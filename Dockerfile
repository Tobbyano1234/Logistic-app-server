FROM node:20-alpine

WORKDIR /app

# # Install dependencies including git
# RUN apk add --no-cache git

# Set the memory limit for Node.js
ENV NODE_OPTIONS="--max-old-space-size=4096"

COPY package*.json ./
COPY tsconfig.json ./
COPY . .

RUN yarn global add typescript
RUN yarn install
RUN yarn add typescript@4.9.5 --save-dev
RUN yarn run tsc --incremental

EXPOSE 4500

CMD ["yarn", "start" ]

# CMD ["pm2-runtime", "start", "dist/src/entrova-web-api/api/index.js"]







# # Use an official Node runtime as a parent image
# FROM node:lts-alpine

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Expose the port the server runs on
# EXPOSE 4000

# # Command to run the server
# CMD ["npm", "start"]
