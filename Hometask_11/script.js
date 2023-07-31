function task1_sumAndAmountOfArrayOfPositiveElements(array) {
    let sum = 0;
    let amount = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
            amount++;
        }
    }

    console.log(`Task1: Amount of elements: ${amount}, sum of elements: ${sum}`)
}


function task2_MinOfArrayAndIndexOfElement(array) {
    let index = 0;
    let minElement = array[0];

    for (let i = 1; i < array.length; i++) {
        if (minElement > array[i]) {
            index = i;
            minElement = array[i];
        }
    }

    console.log(`Task2: Min element: ${minElement}, index of element: ${index}`);
}


function task3_MaxOfArrayAndIndexOfElement(array) {
    let index = 0;
    let maxElement = array[0];

    for (let i = 1; i < array.length; i++) {
        if (maxElement < array[i]) {
            index = i;
            maxElement = array[i];
        }
    }

    console.log(`Task3: Max element: ${maxElement}, index of element: ${index}`);

}


function task4_amountOfNegativeElements(array) {
    let amount = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) amount++;
    }

    console.log(`Task4: Amount of negative elements: ${amount}`)
}


function task5_amountOfOddPositiveElements(array) {
    let arrayOfOddPositiveElements = array.filter(element => (element > 0 && element % 2 != 0));

    console.log(`Task5: Amount of odd positive elements: ${arrayOfOddPositiveElements.length}`);
}


function task6_amountOfEvenPositiveElements(array) {

    let arrayOfEvenPositiveElements = array.filter(element => (element > 0 && element % 2 == 0));

    console.log(`Task6: Amount of even positive elements: ${arrayOfEvenPositiveElements.length}`);
}

function task7_sumOfEvenPositiveElements(array) {
    let arrayOfEvenPositiveElements = array.filter(element => (element > 0 && element % 2 == 0));
    let sum = 0;

    for (number of arrayOfEvenPositiveElements) {
        sum += number;
    }

    console.log(`Task7: Sum of even positive elements: ${sum}`);
}


function task8_sumOfOddNegativeElements(array) {
    let arrayOfOddNegativeElements = array.filter(element => (element < 0 && element % 2 != 0));

    let sum = 0;

    for (number of arrayOfOddNegativeElements) {
        sum += number;
    }

    console.log(`Task8: Sum of odd negative elements: ${sum}`);
}


function task9_productOfPositiveElements(array) {
    let arrayOfPositiveElements = array.filter(element => element > 0);

    let product = 1;

    for (number of arrayOfPositiveElements) {
        product *= number;
    }

    console.log(`Task9: Product of positive elements: ${product}`);
}


function task10_getMaxElementToZeroOther(array) {
    let maxIndex = 0;
    let maxElement = array[0];

    for (let i = 1; i < array.length; i++) {
        if (maxElement < array[i]) {
            maxIndex = i;
            maxElement = array[i];
        }
    }

    for (let j = 0; j < array.length; j++) {
        if (j != maxIndex) array[j] = 0;
    }

    console.log(`Task10: Array with only max element: ${array}`);
}

let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
task1_sumAndAmountOfArrayOfPositiveElements(array);
task2_MinOfArrayAndIndexOfElement(array);
task3_MaxOfArrayAndIndexOfElement(array);
task4_amountOfNegativeElements(array);
task5_amountOfOddPositiveElements(array);
task6_amountOfEvenPositiveElements(array);
task7_sumOfEvenPositiveElements(array);
task8_sumOfOddNegativeElements(array);
task9_productOfPositiveElements(array);
task10_getMaxElementToZeroOther(array);
// console.log(array);