refs = {
    days: document.querySelector('span[data-value=days]'),
    hours: document.querySelector('span[data-value=hours]'),
    mins: document.querySelector('span[data-value=mins]'),
    secs: document.querySelector('span[data-value=secs]'),
    startBtn: document.querySelector('.start'),
    stopBtn: document.querySelector('.stop'),
    input: document.querySelector('input'),
    btn: document.querySelector('button'),
    form: document.querySelector('.timer'),
    text: document.querySelector('h2'),
};
let intervalId = null;
refs.btn.addEventListener('click', showClicker);
const inputValue = refs.input.value;
function showClicker() {
    clearInterval(intervalId);
    start();
    showDate();
    refs.text.textContent = refs.input.value;
    refs.input.value = '';
}

function start() {
    const targetValue = new Date(refs.input.value);

    intervalId = setInterval(() => {
        const currentTime = Date.now();

        const deltaTime = currentTime - targetValue;
        updateClock(deltaTime);
    }, 1000);
}

function showDate() {
    refs.form.classList.add('active');
}

function updateClock(deltaTime) {
    const days = pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
    const hours = pad(
        Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((deltaTime % (1000 * 60)) / 1000));

    refs.days.textContent = -days - 1;
    refs.hours.textContent = -hours;
    refs.mins.textContent = -mins;
    refs.secs.textContent = -secs;
}

function pad(value) {
    return String(value).padStart(2, '0');
}
