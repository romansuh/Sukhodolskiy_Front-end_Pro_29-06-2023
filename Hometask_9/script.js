function task1_numbersFrom10To20() {
    let answer = '10';
    for (let i = 11; i <= 20; i++) {
        answer += ', ' + i;
    }

    console.log(`Task 1: ${answer}`);
}


function task2_squaresFrom10To20() {
    let answer = '100';

    for (let i = 11; i <= 20; i++) {
        answer += ', ' + i * i;
    }

    console.log(`Task 2: ${answer}`);
}


function task3_multiplicationBy7() {
    let answer = '7';

    for (let i = 2; i <= 10; i++) {
        answer += ', ' + i * 7;
    }

    console.log(`Task 3: ${answer}`);
}


function task4_sumOfNumbersFrom1To15() {
    let answer = 0;

    for (let i = 1; i <= 15; i++) {
        answer += i;
    }

    console.log(`Task 4: ${answer}`);
}


function task5_productOfNumbersFrom15To35() {
    let answer = 1;

    for (let i = 15; i <= 35; i++) {
        answer *= i;
    }

    console.log(`Task 5: ${answer}`);
}


function task6_modOfNumbersFrom1To500() {
    let mod = 0;
    let steps = 0;

    do {
        steps++;
        mod += steps;
    } while (steps < 500);

    console.log(`Task 6: ${mod / steps}`);
}


function task7_sumOfEvenNumbersFrom30To80() {
    let sum = 0;

    for (let i = 30; i <= 80; i++) {
        if (i % 2 == 0) sum += i;
    }

    console.log(`Task 7: ${sum}`);
}


function task8_numbersDivisibleBy3From100To200() {
    let answer = '';

    for (let i = 100; i <= 200; i++) {
        if (i % 3 == 0) answer += i + ', ';
    }

    console.log(`Task 8: ${answer}`);
}


function task9_getNumberDivisors(number) {
    let answer = [];

    for (let i = 1; i < number; i++) {
        if (number % i == 0) answer.push(i);
    }

    answer.push(number);

    return answer;
}


function task10_getAmountOfEvenDivisors(number) {
    let arrayOfDivisors = task9_getNumberDivisors(number);
    let answer = 0;

    for (let i = 0; i < arrayOfDivisors.length; i++) {
        if (arrayOfDivisors[i] % 2 == 0) answer++;
    }

    console.log(`Task 10: ${answer}`);
}


function task11_sumOfEvenDivisors(number) {
    let arrayOfDivisors = task9_getNumberDivisors(number);
    let sum = 0;

    for (let i = 0; i < arrayOfDivisors.length; i++) {
        if (arrayOfDivisors[i] % 2 == 0) sum += arrayOfDivisors[i];
    }

    console.log(`Task 11: ${sum}`);
}


function task12_multiplicationTableFrom1To10() {
    let row;
    for (let i = 1; i <= 10; i++) {
        row = i + ' ';
        for (let j = 2; j <= 10; j++) {
            row += i * j + ' ';
        }

        console.log(row);
    }
}


task1_numbersFrom10To20();
task2_squaresFrom10To20();
task3_multiplicationBy7();
task4_sumOfNumbersFrom1To15();
task5_productOfNumbersFrom15To35();
task6_modOfNumbersFrom1To500();
task7_sumOfEvenNumbersFrom30To80();
task8_numbersDivisibleBy3From100To200();

num = 54;
console.log(`Task 9: ${task9_getNumberDivisors(num)}`);
task10_getAmountOfEvenDivisors(num);
task11_sumOfEvenDivisors(num);

console.log('Task 12:');
task12_multiplicationTableFrom1To10();