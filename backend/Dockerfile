# ---------- Builder Stage ----------
FROM node:18-alpine AS build

WORKDIR /app

# Copy only dependency files first (cache optimization)
COPY package*.json ./

RUN npm install

# Copy rest of the backend code
COPY . .

# ---------- Runtime Stage ----------
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app .

EXPOSE 4000

CMD ["node", "server.js"]
