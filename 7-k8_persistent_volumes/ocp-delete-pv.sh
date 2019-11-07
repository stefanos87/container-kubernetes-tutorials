source setenv.sh
kubectl delete -f ocp-restaurant-pvc.yaml
kubectl delete -f ocp-restaurant-pv-nfs.yaml
echo ${grn}Getting info about PersistentVolume restaurant-nfs-pv ...${end}
kubectl get pv restaurant-nfs-pv
echo ${grn}Getting info about PersistentVolumeClaim upload-dir-pvc ...${end}
kubectl get pvc upload-dir-pvc