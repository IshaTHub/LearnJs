const memoize = (fn) => {
    const cache = {}
    return (...args) => {
const argsToString = JSON.stringify(args)
        if (cache[argsToString]) {
            console.log(`Fetching from cache ${argsToString}`)
            return cache[argsToString]
        }
    }
}

addThreeNum = (a,b,c) => a+b+c 

add = memoize(addThreeNum)
add(1,2,3);