function moveZeros(arr) {
    const zeroArr = arr.filter(item => item === 0);
    const noZeroArr = arr.filter(item => item !== 0);
    return noZeroArr.concat(zeroArr);
  }