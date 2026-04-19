# Use Nginx as base image
FROM nginx:stable-alpine

# Update, upgrade and clean cache in single layer
RUN apk update && apk upgrade --no-cache && rm -rf /var/cache/apk/*

# Copy website files
COPY app/index.html /usr/share/nginx/html/index.html

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:80 || exit 1

EXPOSE 80
