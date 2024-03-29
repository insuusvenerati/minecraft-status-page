# Install dependencies only when needed
FROM node:16-alpine3.14 AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
COPY ./prisma ./prisma
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:16-alpine3.14 AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

ENV DATABASE_URL=postgresql://postgres:Oldeenglish750@db.iwtdxmoctontlerfspyc.supabase.co:5432/postgres

RUN yarn build && yarn install --prefer-offline

# Production image, copy all the files and run next
FROM node:16-alpine3.14 AS runner
WORKDIR /app

ENV NODE_ENV production
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.ts ./

# Automatically leverage output traces to reduce image size 
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node", "server.js"]