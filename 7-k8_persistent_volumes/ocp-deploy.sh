source setenv.sh
kubectl apply -f restaurant-configmap.yaml
kubectl apply -f restaurant-secret.yaml
kubectl apply -f ocp-restaurant-app.yaml
echo ${grn}Getting info about Service restaurant-pv-service ...${end}
kubectl get service restaurant-pv-service