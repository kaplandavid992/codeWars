function findOutlier(integers){
    function isEven(int){
      return int%2===0;
    }
    const firstNum = isEven(integers[0]);
    const secondNum = isEven(integers[1]);
    const thirdNum = isEven(integers[2]);
    
    if(firstNum  == secondNum && secondNum == thirdNum) {
      
      for( let i=3; i< integers.length; i++) {
        if( isEven(integers[i]) !==  firstNum){
          return integers[i]}
      }
      
    } else if(firstNum == secondNum && secondNum != thirdNum) {return integers[2] }
    
    else if(firstNum 
       != secondNum &&
       secondNum == thirdNum) {
      return integers[0];
    }
    else { return integers[1];  }
  }