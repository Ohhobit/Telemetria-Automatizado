FROM jenkins/jenkins:lts

USER root

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -y google-chrome-stable

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

RUN npm config set cache /var/jenkins_home/.npm-cache --global 
RUN npm config set userconfig /var/jenkins_home/.npmrc --global 
RUN npm config set globalconfig /var/jenkins_home/.globalnpmrc --global 
RUN npm set registry http://npm.alterdata-cirrus-cluster.net --global

USER root