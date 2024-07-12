const arr = ["rat", "cat", "mat", "bat"]

arr.forEach(function (params) {
    console.log(params);
})

// as arrow func 

const arr1 = ["raat", "caat", "maat", "baat"]
arr1.forEach((val, index, arr) => {
    console.log(val, index, arr);
})

const arr3 = [
    {
        langName: "javascript",
        fileName: "js"
    }
    ,
    {
        langName: "java",
        fileName: "java"
    },
    {
        langName: "python",
        fileName: "py"
    }
]

arr3.forEach( (itemz, index, arr) => {
    console.log(itemz.fileName, index, arr);
})


