#!/usr/bin/env bash

new_token=$(aws codeartifact get-authorization-token --domain przeprogramowani-ofe --domain-owner 730335175560 --query authorizationToken --output text)

sed -i "" "s|authToken=.*|authToken=$new_token|" .npmrc

echo "New auth token generated inside .npmrc"
