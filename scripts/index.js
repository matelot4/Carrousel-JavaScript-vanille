const contenuDivsSlide = document.querySelectorAll(".slide");
const navigationFlecheDroite = document.querySelector(".droite");
const navigationFlecheGauche = document.querySelector(".gauche");
const navigationRondsNumerotes = document.querySelectorAll(".numero-image");
const figureElement = document.querySelectorAll('figure');
const boutonLecture = document.querySelector('.jouer-arreter');
const CLASSE_FIGURE_VISIBLE = 'visible';
const CLASSE_IMAGE_ACTIVE = 'active';
let compteurSlides = 0;
let carrouselEnLecture = true;
let interval = setInterval(changerImageSuivante, 3000);

navigationFlecheDroite.addEventListener('click', changerImageSuivante);

function changerImageSuivante() {
    figureElement[compteurSlides].classList.remove(CLASSE_FIGURE_VISIBLE);
    navigationRondsNumerotes[compteurSlides].classList.remove(CLASSE_IMAGE_ACTIVE);

    compteurSlides++;

    if (compteurSlides > contenuDivsSlide.length - 1) {
        compteurSlides = 0;
    }

    figureElement[compteurSlides].classList.add(CLASSE_FIGURE_VISIBLE);
    navigationRondsNumerotes[compteurSlides].classList.add(CLASSE_IMAGE_ACTIVE);
}

navigationFlecheGauche.addEventListener('click', changerImagePrecedante);

function changerImagePrecedante() {
    figureElement[compteurSlides].classList.remove(CLASSE_FIGURE_VISIBLE);
    navigationRondsNumerotes[compteurSlides].classList.remove(CLASSE_IMAGE_ACTIVE);
    compteurSlides--;

    if (compteurSlides < 0) {
        compteurSlides = 4;
    }
    
    figureElement[compteurSlides].classList.add(CLASSE_FIGURE_VISIBLE);
    navigationRondsNumerotes[compteurSlides].classList.add(CLASSE_IMAGE_ACTIVE);
}

for (let i = 0; i < navigationRondsNumerotes.length; i++) {
    navigationRondsNumerotes[i].addEventListener('click', function () {
        figureElement[compteurSlides].classList.remove(CLASSE_FIGURE_VISIBLE);
        navigationRondsNumerotes[compteurSlides].classList.remove(CLASSE_IMAGE_ACTIVE);
        compteurSlides = i;
        figureElement[i].classList.add(CLASSE_FIGURE_VISIBLE);
        navigationRondsNumerotes[i].classList.add(CLASSE_IMAGE_ACTIVE);
    });
}

boutonLecture.addEventListener('click', basculerLectureCarrousel);
function basculerLectureCarrousel() {
    if (carrouselEnLecture == true) {
        clearInterval(interval);
        boutonLecture.innerHTML = '&#9658;';
        carrouselEnLecture = false;
    } else if (carrouselEnLecture == false) {
        interval = setInterval(changerImageSuivante, 3000);
        boutonLecture.innerHTML = '&#9612;&#9612;';
        carrouselEnLecture = true;
    }
}




