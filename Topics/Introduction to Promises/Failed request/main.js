let isNotError = false;
let dataLoader  = new Promise(function (resolve, reject) {
    if (isNotError) {
        resolve("It's look good");
    }else {
        reject("An error occurred");
    }
})