function task1_numbersFrom20To30WithHalfStep() {
    let answer = '20 ';

    for (let i = 21; i <= 30; i += 0.5) {
        answer += i + ' ';
    }

    console.log(`Task 1: ${answer}`);
}


function task2_USDToUAH() {
    for (let i = 10; i <= 100; i += 10) {
        console.log(`${i} USD = ${i * 27} UAH`);
    }
}


function task3_numbersFrom1To100WithSquareLessThanNumber(number) {
    let answer = '';

    for (let i = 1; i <= 100; i++) {
        if (i * i <= number) answer += i + ' ';
    }

    console.log(`Task 3: ${answer}`);
}


function task4_IsPrime(n) {
    if (n % 2 == 0) return n == 2;

    let d = 3;

    while (d * d <= n && n % d != 0) d += 2;
    return d * d > n;
}


function task5_isPowerOf3(n) {
    for (let i = 1; i <= n; i *= 3) {
        if (n == i) return true;
    }

    return false;
}


task1_numbersFrom20To30WithHalfStep();

console.log('Task 2:');
task2_USDToUAH();

let n = 81;
task3_numbersFrom1To100WithSquareLessThanNumber(n);

let task4_answer = task4_IsPrime(n);
if (task4_answer) {
    console.log(`Task 4: Number ${n} is prime number.`);
} else {
    console.log(`Task 4: Number ${n} is not prime number.`);
}

let task5_answer = task5_isPowerOf3(n);
if (task5_answer) {
    console.log(`Task 5: Number ${n} is some power of number 3.`);
} else {
    console.log(`Task 5: Number ${n} is not some power of number 3.`);
}
