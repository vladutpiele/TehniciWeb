let buttonCodProblema = document.querySelector("#codProblema");
let buttonAlteProbleme = document.querySelector("#alteProbleme");
let afiseazaCod = document.querySelector("#afiseazaDupaClickCodProblema");
let afiseazaProblemeAsemanatoare = document.querySelector("#problemeAsemanatoare");
let containers = document.getElementsByClassName('container');

afiseazaCod.style.display = 'none';
afiseazaProblemeAsemanatoare.style.display = 'none';

buttonCodProblema.addEventListener('click', () => {
    if (afiseazaCod.style.display === 'none' || afiseazaCod.style.display === '') {
        afiseazaCod.style.display = 'block';
        for (let i = 0; i < containers.length; i++) {
            containers[i].style.display = 'none';
        }
    } else {
        afiseazaCod.style.display = 'none';
        for (let i = 0; i < containers.length; i++) {
            containers[i].style.display = 'block';
        }
    }
});

buttonAlteProbleme.addEventListener('click', () => {
    if (afiseazaProblemeAsemanatoare.style.display === 'none' || afiseazaProblemeAsemanatoare.style.display === '') {
        afiseazaProblemeAsemanatoare.style.display = 'block';
    } else {
        afiseazaProblemeAsemanatoare.style.display = 'none';
    }
});
