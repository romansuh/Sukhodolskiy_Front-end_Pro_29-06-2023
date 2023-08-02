function modOfNumbersOfArray(array) {
    let mod = 0;
    let numbersAmount = 0;

    array.forEach(function (element) {
        if (typeof element == "number") {
            mod += element;
            numbersAmount++;
        }
    });

    return mod / numbersAmount;
}

const array = [1, 5, "123", 4, "qwerty", null];
console.log(modOfNumbersOfArray(array));