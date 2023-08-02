function doMath(x, znak, y) {
    let answer;
    switch (znak) {
        case "+":
            answer = x + y;
            break;
        case "-":
            answer = x - y;
            break;
        case "*":
            answer = x * y;
            break;
        case "/":
            answer = x / y;
            break;
        case "%":
            answer = x % y;
            break;
        case "^":
            answer = Math.pow(x, y);
            break;
        default:
            answer = "Invalid operation."
    }

    return answer;
}

let x = prompt("Enter first number:");
let znak = prompt("Enter operation(+, -, *, /, %, ^):");
let y = prompt("Enter second number:");

alert(doMath(x, znak, y));