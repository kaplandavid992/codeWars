function digitize(n) {
    let arr = n.toString().split('');
    let res = [];
    while (arr.length >0){
      res.push(parseInt(arr.pop()));
    };
    return res;
  }