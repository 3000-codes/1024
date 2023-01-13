function mergeSort(items){
  if (items.length == 1) {
  return items;
  }
  var work = [];
  for (var i=0, len=items.length; i < len; i++){
  work.push([items[i]]);
  }
  work.push([]); //in case of odd number of items
  for (var lim=len; lim > 1; lim = (lim+1)/2){
  for (var j=0,k=0; k < lim; j++, k+=2){
  work[j] = merge(work[k], work[k+1]);
  }
  work[j] = []; //in case of odd number of items
  }
  return work[0];
  }