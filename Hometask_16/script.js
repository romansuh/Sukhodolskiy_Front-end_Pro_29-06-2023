function createSumFunction(currentSum) {
    return function (param) {
        currentSum += param;
        return currentSum;
    }
}


const sum = createSumFunction(0);

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
