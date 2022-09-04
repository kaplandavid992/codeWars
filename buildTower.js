function towerBuilder(nFloors) {
    let resArr=[];
    let stars=1;
    const star='*';
    const space=' ';
    let spaces=nFloors-1;
    for(let i=0; i<nFloors; i++){
      resArr.push(space.repeat
        (spaces)+star.repeat(stars)
                  +space.repeat(spaces));
      spaces-=1;
      stars+=2;
    }
    return resArr;
  }