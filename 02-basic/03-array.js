// Ques: Looping in the array and printing its orignal properties ONLY. 

Array.prototype.extraProp = "New property added"

const array1 = [1,2,3,4,5];

for(let i in array1){
    console.log("Added property: "+i);
    
}
// o/p 0,1,2,3,4,5 extra prop which is extra property

// To get only orignal array use hasOwnProperty
// As hasOwnProperty is located to only those which actually are array's orignal values inserted

for(let v in array1){
    if(array1.hasOwnProperty(v)){
        console.log("Orignal Array: " + v);
        
    }
    
}

// o/p 0,1,2,3,4,5