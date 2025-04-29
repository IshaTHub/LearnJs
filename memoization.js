const memoize = (fn) => {
    const cache = {}
    return (...args) => {
const argsToString = JSON.stringify(args)
        if (cache[argsToString]) {
            console.log(`Fetching from cache ${argsToString}`)
            return cache[argsToString]
        }
        else {
			const result = fn.apply(this, args);
			cache[argsToString] = result;
			console.log(`Calculating result ${argsToString}`);
			return result;
		}
    }
}

addThreeNum = (a,b,c) => a+b+c 

add = memoize(addThreeNum)
add(1,2,3);
