const getData = () =>{
    // get API data 
    console.log("fetching data")
}


const debounce = function(fn, delay){
    let timer;
    return function(){
        let context = this;
        let args = arguments;
        clearTimeout(timer);
         timer = setTimeout(() =>{
            getData.apply(context, args);
        },delay)
    }
}

// only doSomething or call getData method when time difference between 
// two press key events is more than 300ms
const betterFunc = debounce(getData, 300);