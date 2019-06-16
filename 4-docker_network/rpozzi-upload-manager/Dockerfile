FROM node:8.11.3
LABEL author="Roberto Pozzi"
WORKDIR "/app"
# Copy application source files
COPY app/ /app/
# Install app dependencies
RUN cd /app; npm install; npm prune --production
EXPOSE 8083
CMD ["npm", "start"]