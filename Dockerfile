FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN yarn install --frozen-lockfile

COPY . .

# development environment
FROM builder AS dev

EXPOSE 3000

CMD [ "yarn", "dev"]

# production environment
FROM node:18-alpine AS prod_build

WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build 

FROM node:18-alpine AS prod

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=prod_build /app/public ./public
COPY --from=prod_build /app/.next ./.next
COPY --from=prod_build /app/next.config.js ./
COPY --from=prod_build /app/package.json ./package.json

RUN yarn install --production

EXPOSE 3000

CMD [ "yarn", "start"]
