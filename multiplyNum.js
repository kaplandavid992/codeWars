function multiply(number){
    const negative = number < 0 ? -1 : 0;
  const numOfDig= number.toString().length+negative ;
    return number*(5**numOfDig);
  }