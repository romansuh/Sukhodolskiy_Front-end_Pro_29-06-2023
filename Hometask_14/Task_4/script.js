function func(str, toDelete) {
    let answer = '';
    for (let i = 0; i < str.length; i++) {
        if (!toDelete.includes(str[i])) answer += str[i];
    }

    return answer;
}

let str = prompt('Enter your string:');

let toDelete = prompt(`Enter symbols to delete separated by commas:`)
    .split(',');
toDelete = toDelete.map(el => {
    return el.trim();
})

console.log(toDelete);
console.log(func(str, toDelete));