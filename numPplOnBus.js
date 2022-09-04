var number = function(busStops){
    let on=0;
     let off=0;
     busStops.forEach((pair)=>{
      on+=pair[0];
       off+=pair[1];
    });
     return on-off;
   }