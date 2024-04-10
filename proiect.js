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

