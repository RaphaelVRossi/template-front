FROM node:8.11-alpine

LABEL authors="Raphael Rossi"

#Linux setup
RUN apk update \
  && apk add --update alpine-sdk \
  && apk del alpine-sdk \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache verify \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

#Angular CLI
RUN npm install -g @angular/cli

#Change Dir
WORKDIR /home/node

#Copy all evvs source code
COPY . /home/node/ 

#Install npm dependencies
RUN npm install

ADD docker/run.sh /home/node/run.sh
RUN chmod +x /home/node/run.sh

CMD ./run.sh
