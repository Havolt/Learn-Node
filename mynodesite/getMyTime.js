exports.getMyTime = function(){
  let d = new Date();
  let e = d.getHours();
  let f = d.getMinutes();
  return e + ':' + f;
}
