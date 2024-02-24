FROM openjdk:17-jdk-slim

# Установка Node.js и npm
RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm config set cache /var/jenkins_home/.npm-cache --global && \
    mkdir /var/jenkins_home/.npm-cache && \
    chown -R 1000:1000 /var/jenkins_home/.npm-cache
