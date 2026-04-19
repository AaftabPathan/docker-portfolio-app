# Use Nginx as base image
FROM nginx:stable-alpine

# update & upgrade packages
RUN apk update && apk upgrade --no-cache

# remove cache to reduce vulnerabilities
RUN rm -rf /var/cache/apk/*

# Copy website files
COPY app/index.html /usr/share/nginx/html/index.html


