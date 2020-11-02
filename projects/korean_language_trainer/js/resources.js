const card = document.querySelectorAll('.card');
const card1 = document.querySelector('#card-1');
const card2 = document.querySelector('#card-2')

function rotate(target) {
    anime({
        targets: target,
        rotateY: {value: '+=180'},
        duration: 2000
    })
}

card1.addEventListener('click', function() {
    rotate(card1);
});

card2.addEventListener('click', function() {
    rotate(card2);
});

