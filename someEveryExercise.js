//Some Every Exercise
//
//
//hasOddNumber
//
function hasOddNumber(array) {
    return array.some(function (num) {
        return num % 2 !== 0;
    });
}
console.log(hasOddNumber([1, 2, 2, 2, 2, 2, 4])); //true
//
//hasAZero
//
function hasAZero(num) {
    let array = num.toString().split('');
    return array.some(function (n) {
        return n === 0;
    });
}
console.log(hasAZero(33321232131012)); //false
//
//hasOnlyOddNumbers
//
function hasOnlyOddNumbers(array) {
    return array.every(function (num) {
        if (num % 2 !== 0) return true;
    });
}
console.log(hasOnlyOddNumbers([1, 2, 5, 7])); // false
//
//hasNoDuplicates
//
function hasNoDuplicates(array) {
    return array.some(function (num, idx) {
        return array.indexOf(num) !== idx;
        //search for '2' in [2,3,1] left to right, found at index 0 = idx 0
        //search for '3', found at index 1 = idx 1
        //search for '1', found at index 3 = idx 3
        //if 'found at index' doesn't equal 'idx' return false
    });
}
console.log(hasNoDuplicates([2, 3, 1])); //false
console.log(hasNoDuplicates([6, 1, 4, 5, 1])); //true
//
//hasCertainKey
//
function hasCertainKey(array, k) {
    return array.every(function (val) {
        return k in val;
    });
}
let arr = [
    { title: 'Instructor', first: 'Elie', last: 'Schoppik' },
    { title: 'Instructor', first: 'Tim', last: 'Garcia', isCatOwner: true },
    { title: 'Instructor', first: 'Matt', last: 'Lane' },
    { title: 'Instructor', first: 'Colt', last: 'Steele', isCatOwner: true },
];
console.log(hasCertainKey(arr, 'first')); // true
//
//hasCertainValue
//
function hasCertainValue(arr, k, v) {
    return arr.every(function (val) {
        return arr[k] === v;
    });
}

let arra = [
    { title: 'Instructor', first: 'Elie', last: 'Schoppik' },
    { title: 'Instructor', first: 'Tim', last: 'Garcia', isCatOwner: true },
    { title: 'Instructor', first: 'Matt', last: 'Lane' },
    { title: 'Instructor', first: 'Colt', last: 'Steele', isCatOwner: true },
];

console.log(hasCertainValue(arra, 'title', 'Instructor')); // true
hasCertainValue(arra, 'first', 'Elie'); // false
