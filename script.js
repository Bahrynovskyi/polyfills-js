// forEach Polyfill

// arr.forEach(callback(currentValue[, index[, array]]){
//    // execute something
// }[. thisArg])

let arr = [20, 13, 21, 23, 44];
arr[20] = 20;
Array.prototype.forEach2 = function (callback, thisArg) {
    if (this == null) {
        throw new Error('Can\'t iterate over undefined or null');
    }
    let context = this;
    let O = Object(this);
    if (arguments.length > 1) {
        context = thisArg;
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    let len = O.length;
    let i = 0;
    while (i < len) {
        if (i in O) {
            callback.call(thisArg, this[i], i, O);
        }
        i++;

    }




};

arr.forEach2((item, index, array) => {
    console.log({ item, index });

});


// filter Polyfill

const arr2 = [1, 2, 34, 54, 5, 5, 2, 12, 22, 22];

Array.prototype.filter2 = function (callback, thisArg) {
    if (this == null) {
        throw new Error('Can\'t iterate over undefined or null');
    }
    let context = this;
    let O = Object(this);
    if (arguments.length > 1) {
        context = thisArg;
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    let len = O.length;
    let res = [];
    for (let i = 0; i < len; i++) {
        if (i in O) {
            let current = this[i];
            if (callback.call(context, current, i, O)) {
                res.push(current);
            }
        }
    }

    return res;

};
const y = arr2.filter2(item => item === 22);
console.log(y);


//  map Polyfill


// let newArr = arr.map(callback(currentValue[, index[, array]]) {
//    // return elementfor newArray, after executing something
//}, [, thisArg]);

const arr3 = [1, 2, 7, 9, 23, 54, 5, 5, 2, 12, 22, 22];


