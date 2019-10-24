FROM docker.io/node:12.6.0
LABEL author="Roberto Pozzi"
WORKDIR "/app"
# Copy application source files
COPY app/ /app/
# Create upload directory
RUN mkdir /tmp/upload
# Install app dependencies
RUN cd /app; npm install; npm prune --production
EXPOSE 8082
CMD ["npm", "start"]