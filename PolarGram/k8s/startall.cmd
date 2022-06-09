kubectl apply -f .\rabbitmq-deploy.yaml

kubectl apply -f .\frontend-np-service.yaml

kubectl apply -f .\frontend-deploy.yaml

kubectl apply -f .\servicepost-deploy.yaml

kubectl apply -f .\servicecomment-deploy.yaml

kubectl apply -f .\imageapi-deploy.yaml

kubectl apply -f .\apigateway-deploy.yaml

kubectl apply -f .\autoscaler.yml

kubectl get services