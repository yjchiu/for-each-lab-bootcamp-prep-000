function iterativeLog(array){
  array.forEach((element,index,arr) => {
    console.log(`${index}: ${element}`);
  })
}


function iterate(callback){
  var arr = [1];
  arr.forEach(callback);
  return arr;
}

function doToArray(array,callback){
  array.forEach(callback)
}
