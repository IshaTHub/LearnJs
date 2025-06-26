let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);


for(let vegetables of recipeMap.keys()){
    console.log(vegetables);
}

for(let amount of recipeMap.values()){
    console.log(amount);
}

for(let entry of recipeMap.entries()){
    console.log(entry);
}