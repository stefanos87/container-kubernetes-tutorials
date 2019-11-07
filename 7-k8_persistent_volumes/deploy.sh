source setenv.sh
kubectl apply -f restaurant-configmap.yaml
kubectl apply -f restaurant-secret.yaml
kubectl apply -f restaurant-app.yaml
echo ${grn}Getting info about IKS node EXTERNAL_IP ...${end}
kubectl get nodes -o wide
echo ${grn}Getting info about Service restaurant-pv-service ...${end}
kubectl get service restaurant-pv-service