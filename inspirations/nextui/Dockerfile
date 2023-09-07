FROM node:16
WORKDIR /app
COPY apps/docs/package*.json ./
RUN npm install
COPY apps/docs/ ./
CMD ["npm", "start"]
