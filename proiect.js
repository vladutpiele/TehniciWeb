let codeforcesLink = document.querySelector('#codeforces');
let codeforcesImg = document.querySelector('#codeforcesImg');
let infoarenaImg = document.querySelector('#infoarenaImg');
let infoarenaLink = document.querySelector('#infoarena');
let csesImg = document.querySelector('#csesImg');
let csesLink = document.querySelector('#cses');


function fadeIn(element) {
    element.style.opacity = 0;
    let opacity = 0;
    let interval = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.1
            element.style.opacity = opacity;
        }
        else {
            clearInterval(interval);
        }
    }, 100)
}

codeforcesLink.addEventListener('mouseenter', () => {
    fadeIn(codeforcesImg);
    codeforcesImg.style.display = 'block';
})

codeforcesLink.addEventListener('mouseleave', () => {
    codeforcesImg.style.display = 'none';
})

infoarenaLink.addEventListener('mouseenter', () => {
    fadeIn(infoarenaImg);
    infoarenaImg.style.display = 'block';
})

infoarenaLink.addEventListener('mouseleave', () => {
    infoarenaImg.style.display = 'none';
})

csesLink.addEventListener('mouseenter', () => {
    fadeIn(csesImg);
    csesImg.style.display = 'block';
})

csesLink.addEventListener('mouseleave', () => {
    csesImg.style.display = 'none';
})


const butonCautareBinara = document.getElementById('cautareBinaraButon');

const footer = document.getElementById('footerText');

function updateFooterText() {
    let counter = localStorage.getItem('cautareBinaraCounter');
    if (!counter) {
        counter = 0;
    }
    footer.textContent = 'Butonul de căutare binară a fost apăsat de ' + counter + ' ori.';
}

updateFooterText();

butonCautareBinara.addEventListener('click', () => {
    let counter = localStorage.getItem('cautareBinaraCounter');

    if (counter) {
        counter = parseInt(counter) + 1;
    } else {
        counter = 1;
    }
    localStorage.setItem('cautareBinaraCounter', counter);
    updateFooterText();
})
