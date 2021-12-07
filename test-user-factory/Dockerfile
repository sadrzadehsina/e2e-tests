from node:14

WORKDIR /usr/src/app

copy package*.json ./

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y yarn

RUN yarn set version berry

RUN yarn install

COPY . .

CMD yarn start
