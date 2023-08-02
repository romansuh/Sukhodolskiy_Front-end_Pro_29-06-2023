function create2DArray(outerLength, innerLength) {
    let array = [];
    let newElement;

    for (let i = 0; i < outerLength; i++) {
        array.push([]);
        for (let j = 0; j < innerLength; j++) {
            newElement = prompt(`Enter element [${i}, ${j}]:`);
            array[i].push(newElement);
        }
    }
    return array;
}

let outerLen = prompt("Enter outer length of an array:");
let innerLen = prompt("Enter inner length of an array:");

let answer = create2DArray(outerLen, innerLen);
// console.table(answer);
console.log(answer);

