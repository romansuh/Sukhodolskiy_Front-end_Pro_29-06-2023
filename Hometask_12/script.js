function removeElement(array, item) {
    let removeIndex = array.indexOf(item, 0);
    array.splice(removeIndex, 1);
}


const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);