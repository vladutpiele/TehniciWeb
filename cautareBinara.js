let buttonCodProblema = document.querySelector("#codProblema");
let buttonAlteProbleme = document.querySelector("#alteProbleme");
let afiseazaCod = document.querySelector("#afiseazaDupaClickCodProblema");
let afiseazaProblemeAsemanatoare = document.querySelector("#problemeAsemanatoare");

buttonCodProblema.addEventListener('click', () => {
    if (afiseazaCod.style.display == 'none') {
        afiseazaCod.style.display = 'block';
    } else {
        afiseazaCod.style.display = 'none';
    }
})

buttonAlteProbleme.addEventListener('click', () => {
    if (afiseazaProblemeAsemanatoare.style.display == 'none') {
        afiseazaProblemeAsemanatoare.style.display = 'block';
    } else {
        afiseazaProblemeAsemanatoare.style.display = 'none';
    }
})