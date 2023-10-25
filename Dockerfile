FROM node:latest

WORKDIR /app

# COPY yarn.lock .

# RUN yarn 

COPY . .

RUN yarn \
  && yarn build 

CMD [ "yarn", "start" ]

EXPOSE 8888