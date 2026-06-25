FROM node:24-slim

# Install exact pnpm version matching the lockfile
RUN npm install -g pnpm@10.26.1

WORKDIR /app

# Copy workspace config first
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy all source
COPY . .

# Install dependencies — no frozen lockfile so pnpm can reconcile settings
RUN pnpm install --no-frozen-lockfile

# Build content-studio frontend (Vite requires PORT + BASE_PATH at config eval time)
RUN PORT=3000 BASE_PATH=/ NODE_ENV=production pnpm --filter @workspace/content-studio run build

# Build lib type declarations then API server
RUN pnpm run typecheck:libs && pnpm --filter @workspace/api-server run build

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "--enable-source-maps", "artifacts/api-server/dist/index.mjs"]
