function reduce(arr) {
  arr = arr.reverse();
  console.log(arr)
  let list = [];
  // for (var i = 0; i < arr.length; i++) {

    // list.indexOf(arr[i]) == -1 && list.push(arr[i]);

    // if(list.length===0){
    //   list.push(arr[i])
    // }else{
    //   list.forEach(item=>{
    //     if(item.path !==arr[i].path){
    //       list.push(arr[i])
    //     }
    //   })
    // }
    var obj = {};
    arr = arr.reduce(function(item, next) {
        obj[next.path] ? '' : obj[next.path] = true && item.push(next);
        return item;
    }, []);
    //  console.log(points)  ;  

    



  // }
  return arr.reverse()
}

export {reduce}