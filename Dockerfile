FROM node:22-alpine

WORKDIR /app

# 1. Copy package files first
COPY package*.json ./

# 2. Install dependencies (this layer stays cached unless packages change)
RUN npm ci --only=production

# 3. Copy the rest of your application source code
COPY . .

EXPOSE 2000

CMD [ "node", "server.js" ]