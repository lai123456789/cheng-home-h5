function equals( x, y ) {
  var in1 = x instanceof Object;
  var in2 = y instanceof Object;
  if(!in1||!in2){
    return x===y;
  }
  if(Object.keys(x).length!==Object.keys(y).length){
    return false;
  }
  for(var p in x){
    var a = x[p] instanceof Object;
    var b = y[p] instanceof Object;
    if(a&&b){
      return equals( x[p], y[p]);
    }
    else if(x[p]!==y[p]){
      return false;
    }
  }

  return true;
}
export default equals;
