from node:16

WORKDIR /usr/src/app

copy package*.json ./

RUN yarn set version berry

copy yarn.lock .yarn .yarnrc.yml ./

RUN yarn install

COPY . .

CMD ['yarn', 'start']
