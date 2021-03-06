# Install latest version of node
FROM node:latest

# Create directory for app
RUN mkdir /app

# Set as current directory for RUN, ADD, COPY commands
WORKDIR /app

# Add to PATH
ENV PATH /app/node_modules/.bin:$PATH

# Add package.json from upstream
ADD package.json /app

# Add entire student fork (overwrites previously added package.json)
ARG SUBMISSION_SUBFOLDER
ADD $SUBMISSION_SUBFOLDER /app

# Install dependencies
RUN npm install

# Overwrite files in student fork with upstream files
ADD test.sh /app
ADD test /app/test
