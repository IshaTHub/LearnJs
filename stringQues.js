let str = "As sly as a fox, as strong as an ox";

let target  = 'a';

let pos = 0;

while(true){
    let foundPos = str.indexOf(target, pos);
    if(foundPos === -1){
        break;
    }
    console.log(`Found '${target}' at position ${foundPos}`);
    pos = foundPos + 1;  //next char check 
}