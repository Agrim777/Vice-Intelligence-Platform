FROM node:24-alpine

# Enable corepack for pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy all workspace files
COPY . .

# Install all dependencies
RUN pnpm install

# Build frontend (Vite requires PORT and BASE_PATH at config evaluation time)
RUN PORT=3000 BASE_PATH=/ NODE_ENV=production pnpm --filter @workspace/content-studio run build

# Build lib type declarations, then API server
RUN pnpm run typecheck:libs && pnpm --filter @workspace/api-server run build

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "--enable-source-maps", "artifacts/api-server/dist/index.mjs"]
