function generateList(array) {
    const ul = document.createElement("ul");

    array.forEach((item) => {
        const li = document.createElement("li");

        if (Array.isArray(item)) {
            const nestedUl = generateList(item);
            li.appendChild(nestedUl);
        } else {
            li.textContent = item;
        }

        ul.appendChild(li);
    });

    return ul;
}


const inputArray = [1, 2, [1.1, 1.2, 1.3], 3, ["qwerty", ["qwe", "rty"]]];
const listContainer = document.getElementById("list-container");

listContainer.appendChild(generateList(inputArray));
