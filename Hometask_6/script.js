let operation = prompt("Enter you operation(add, sub, mult, div):");
let num1 = +prompt("Enter 1st number: ");
let num2 = +prompt("Enter 2nd number: ");

switch (operation) {
    case 'add':
        alert(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case 'sub':
        alert(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case 'mult':
        alert(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    default:
        alert(`${num1} / ${num2} = ${num1 / num2}`);
        break;
}