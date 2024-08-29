# Hello-World-Microservices

install nvm
https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

after installed, close the terminal and open a new termal window

docker build -t world-service -f Dockerfile.world .
docker build -t hello-service -f Dockerfile.hello .

docker run -d -p 3001:3001 world-service
docker run -d -p 3002:3000 hello-service

https://minikube.sigs.k8s.io/docs/start/?arch=%2Flinux%2Fx86-64%2Fstable%2Fbinary+download

kubectl apply -f hello-deployment.yaml
kubectl apply -f hello-service.yaml
kubectl apply -f world-deployment.yaml
kubectl apply -f world-service.yaml

kubectl delete -f hello-deployment.yaml
kubectl delete -f hello-service.yaml
kubectl delete -f world-deployment.yaml
kubectl delete -f world-service.yaml

kubectl get deployments
kubectl get pods
kubectl get services

docker tag world-service:latest jjliu10/world-service:latest
docker push jjliu10/world-service:latest

docker tag hello-service:latest jjliu10/hello-service:latest
docker push jjliu10/hello-service:latest

kubectl delete services --all
kubectl delete deployments --all

minikube ssh

minikube service hello-service
minikube service world-service

https://hub.docker.com/repositories/jjliu10

chmod +x test.sh
