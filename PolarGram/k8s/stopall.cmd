kubectl delete -f .\frontend-np-service.yaml

kubectl delete -f .\frontend-deploy.yaml

kubectl delete -f .\servicepost-deploy.yaml

kubectl delete -f .\servicecomment-deploy.yaml

kubectl delete -f .\imageapi-deploy.yaml

kubectl delete -f .\apigateway-deploy.yaml

kubectl delete -f .\rabbitmq-deploy.yaml

kubectl get services