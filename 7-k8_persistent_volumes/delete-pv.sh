source setenv.sh
kubectl delete -f restaurant-pvc.yaml
kubectl delete -f restaurant-pv-hostpath.yaml
echo ${grn}Getting info about PersistentVolume restaurant-pv ...${end}
kubectl get pv restaurant-pv
echo ${grn}Getting info about PersistentVolumeClaim upload-dir-pvc ...${end}
kubectl get pvc upload-dir-pvc