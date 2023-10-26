FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install --development
CMD ["node", "src/app.js"]