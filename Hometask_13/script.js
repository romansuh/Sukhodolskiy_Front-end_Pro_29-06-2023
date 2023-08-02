function generateKey(length, characters) {
    let key = '';
    for (let i = 0; i < length; i++) {
        key += characters[Math.floor(Math.random() * characters.length)];
    }

    return key;
}


const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key);