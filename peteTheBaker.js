function cakes(recipe, available) {
    const recipeKeys = Object.keys(recipe);
    let amoutPossiblePerIng =[];
    recipeKeys.forEach((key)=>{
      available[key] / recipe[key] ? amoutPossiblePerIng.push
      (Math.floor(available[key] / recipe[key])): amoutPossiblePerIng.push(0); 
    });
    
    return Math.min(...amoutPossiblePerIng);
  }