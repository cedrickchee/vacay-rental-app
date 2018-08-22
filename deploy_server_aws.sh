#! /bin/bash
yarn build:server
docker build -t cedrickchee/vacay-rental-app:latest .
docker push cedrickchee/vacay-rental-app:latest
ssh -i /media/cedric/Cypher/aws/invictus9_hydraops/rsa_keypair_dokku_dev.pem ubuntu@52.42.6.202 "sudo docker pull cedrickchee/vacay-rental-app:latest && sudo docker tag cedrickchee/vacay-rental-app:latest dokku/vacay:latest && dokku tags:deploy vacay latest"