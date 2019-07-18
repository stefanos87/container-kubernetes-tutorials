FROM node:12.6.0
LABEL author="Roberto Pozzi"
WORKDIR "/app"
# Create upload directory
RUN mkdir /tmp/upload
# Create directory for configuration files
RUN mkdir /config
# Copy application source files
COPY app/ /app/
# Install app dependencies
RUN cd /app; npm install; npm prune --production
EXPOSE 8082
CMD ["npm", "start"]