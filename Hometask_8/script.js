function withdrawArrayOfElements() {
    let arrayToWithdraw = document.createElement("p");
    arrayOfElements.forEach(
        (el) => arrayToWithdraw.innerText += el + " "
    );
    document.body.appendChild(arrayToWithdraw);
}


let numberOfElements = +prompt("Enter number of elements:");


// Реалізація вводу елементів без циклів
// let arrayOfElements = prompt("Enter elements in a row: ").split(" ").forEach( (el) => el = +el);


// Реалізація вводу за допомогою циклів
let arrayOfElements = [];
for (let i = 0; i < numberOfElements; i++) {
    let newElement = +prompt(`Enter #${i+1} element:`);
    arrayOfElements.push(newElement);
}
withdrawArrayOfElements();

arrayOfElements.sort();
withdrawArrayOfElements();

arrayOfElements.splice(1, 3);
withdrawArrayOfElements();