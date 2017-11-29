const http = require('http');

http.createServer(function(req, res){

  function placeAnOrder(orderNumber){
    console.log("Customer order: " + orderNumber);

    cookAndDeliverFood(function(){
      console.log("Delivered food order: " + orderNumber);
    })
  }



  //Simulate a five second operation
  function cookAndDeliverFood(callback){
    setTimeout(callback, 5000)
  }

  placeAnOrder(1);
  placeAnOrder(2);
  placeAnOrder(3);
  placeAnOrder(4);
  placeAnOrder(5);

}).listen(8888);
