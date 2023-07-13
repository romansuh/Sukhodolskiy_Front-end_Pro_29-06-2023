var num1 = prompt("Enter 1st number: ");
var num2 = prompt("Enter 2nd number: ");
var num3 = prompt("Enter 3rd number: ");

var avr = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3)) / 3;
if (avr == Math.round(avr)) {
    alert(`Arithmetical mean of ${num1}, ${num2} and ${num3} is ${avr}.`);
} else {
    alert(`Arithmetical mean of ${num1}, ${num2} and ${num3} is ${avr.toFixed(5)}.`);
}