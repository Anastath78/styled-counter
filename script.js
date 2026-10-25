// Кейс-задача № 2. Счётчик на ванильном JavaScript.

const MIN_VALUE = -10;
const MAX_VALUE = 10;
const EXTREME_TEXT = "Вы достигли экстремального значения";

const resultEl = document.getElementById("result");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const messageEl = document.getElementById("message");

let counter = 0;

// Цвет окна результата: больше нуля - жёлтый, меньше - зелёный, ноль - красный
function updateResultColor(value) {
    resultEl.classList.remove(
        "counter__result--positive",
        "counter__result--negative",
        "counter__result--zero"
    );

    if (value > 0) {
        resultEl.classList.add("counter__result--positive");
    } else if (value < 0) {
        resultEl.classList.add("counter__result--negative");
    } else {
        resultEl.classList.add("counter__result--zero");
    }
}

// На 10 отключается "плюс", на -10 - "минус", в остальных случаях обе кнопки активны
function updateButtons(value) {
    plusBtn.disabled = value >= MAX_VALUE;
    minusBtn.disabled = value <= MIN_VALUE;
}

function updateMessage(value) {
    const isExtreme = value === MAX_VALUE || value === MIN_VALUE;
    messageEl.textContent = isExtreme ? EXTREME_TEXT : "";
}

function render() {
    resultEl.textContent = counter;
    updateResultColor(counter);
    updateButtons(counter);
    updateMessage(counter);
}

plusBtn.addEventListener("click", () => {
    if (counter < MAX_VALUE) {
        counter += 1;
        render();
    }
});

minusBtn.addEventListener("click", () => {
    if (counter > MIN_VALUE) {
        counter -= 1;
        render();
    }
});

// начальное состояние: 0, красный фон, обе кнопки активны
render();
