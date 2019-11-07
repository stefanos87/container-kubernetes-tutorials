source setenv.sh
kubectl apply -f restaurant-pv-hostpath.yaml
kubectl apply -f restaurant-pvc.yaml
echo ${grn}Getting info about PersistentVolume restaurant-pv ...${end}
kubectl get pv restaurant-pv
echo ${grn}Getting info about PersistentVolumeClaim upload-dir-pvc ...${end}
kubectl get pvc upload-dir-pvc