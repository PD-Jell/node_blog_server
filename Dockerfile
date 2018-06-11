FROM node:8
LABEL Jell <jellive7@gmail.com>
RUN echo 'Jell server install..'
WORKDIR /server
COPY . /server
RUN yarn && yarn build
EXPOSE 4000

CMD ["yarn", "start"]
