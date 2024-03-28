const showCount = document.querySelector('#showCount');
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');

let count = 0;


minusBtn.addEventListener('click', () => {
    --count;
    if(count <= 0) {
        count = 0;
        showCount.textContent = '0 штук';
    } else {
        showCount.textContent = `${count} штуки`;
    }
});


plusBtn.addEventListener('click', () => {
    ++count;
    showCount.textContent = `${count} штуки`;
});
