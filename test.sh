#!/bin/bash

HELLO_URL="http://$(minikube ip):30001/hello"
WORLD_URL="http://$(minikube ip):30002/world"

HELLO_RESPONSE=$(curl -s $HELLO_URL)
WORLD_RESPONSE=$(curl -s $WORLD_URL)

echo "Hello Response: $HELLO_RESPONSE"
echo "World Response: $WORLD_RESPONSE"

echo "$HELLO_RESPONSE $WORLD_RESPONSE"

