source setenv.sh
kubectl apply -f ocp-restaurant-pv-nfs.yaml
kubectl apply -f ocp-restaurant-pvc.yaml
echo ${grn}Getting info about PersistentVolume restaurant-nfs-pv ...${end}
kubectl get pv restaurant-nfs-pv
echo ${grn}Getting info about PersistentVolumeClaim upload-dir-pvc ...${end}
kubectl get pvc upload-dir-pvc