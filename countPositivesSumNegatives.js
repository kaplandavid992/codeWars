function countPositivesSumNegatives(input) {  
    let arr=[];  
    if (input===[] || input==null){return arr} else {
    let countPos=0; 
    let sumNeg=0;
    input.forEach((num) => {if(num>0){countPos+=1} else if(num<0){sumNeg+=num} else if (num==0){ null}} );
      countPos ? arr[0]=countPos : null;
      sumNeg ? arr[1]=sumNeg : null;
    }
    return arr;
  }