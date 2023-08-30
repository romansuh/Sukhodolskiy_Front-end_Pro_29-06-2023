const textbox = document.getElementById('textbox');
const infoBox = document.getElementById('infoBox');

textbox.addEventListener('focus', () => {
    infoBox.style.display = 'block';
});

textbox.addEventListener('blur', () => {
    infoBox.style.display = 'none';
});
