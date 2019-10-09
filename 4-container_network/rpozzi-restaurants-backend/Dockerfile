FROM node:12.6.0
LABEL author="Roberto Pozzi"
WORKDIR "/app"
# Copy application source files
COPY app/ /app/
# Install app dependencies
RUN cd /app; npm install; npm prune --production
EXPOSE 8082
CMD ["npm", "start"]