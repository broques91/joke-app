// https://api.blablagues.net/?rub=blagues

const header = document.getElementById('header');
const content = document.getElementById('content');

function getJoke() {
    fetch('https://api.blablagues.net/?rub=blagues')
        .then((response) => response.json())
        .then((response) => {
            const data = response.data.content;

            header.textContent = data.text_head;
            content.textContent =
                data.text !== '' ? data.text : data.text_hidden;
        });
}

document.body.addEventListener('click', () => {
    getJoke();
});

document.addEventListener('keyup', (e) => {
    if (e.keyCode === 32) getJoke();
});
