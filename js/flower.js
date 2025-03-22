const title = document.querySelector('.title');
const text = 'Are you sure?'.split('');
for (let index = 0; index < text.length; index++) {
    if (text[index] !== ' ') {
        title.innerHTML += `<span>${text[index]}<span/>`;
    } else {
        title.innerHTML += `<span style='margin-right: 20px;'><span/>`;
    }
}