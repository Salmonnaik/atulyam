FROM node:24-alpine AS builder

WORKDIR /app

# Install dependencies first for better layer caching.
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and generate static export in /app/out.
COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS runner

# Serve static Next.js export.
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
