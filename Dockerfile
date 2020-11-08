FROM node:12.13-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn --only=development

# RUN npm install --only=development

COPY . .

# RUN npm run build
RUN yarn build

FROM node:12.13-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

# RUN npm install --only=production
RUN yarn --only=production


COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]