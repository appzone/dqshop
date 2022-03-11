FROM node:lts-slim

# Create app directory
WORKDIR /usr/src/dqshop

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . .


# Install and configure `serve`.
RUN npm install -g serve


RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

RUN npm run build

# Bundle app source
COPY . .
EXPOSE 3000
ENTRYPOINT [ "serve", "-s", "build"]

# Build app and start server from script
