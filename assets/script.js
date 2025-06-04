const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlide = 0;

// Sélections DOM
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');

// Ajout classes aux flèches existantes
const arrowLeft = document.querySelector('img[alt="Flèche gauche"]');
const arrowRight = document.querySelector('img[alt="Flèche droite"]');


// Génération des dots
slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('dot_selected');
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateSlide();
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// Mise à jour du slide
function updateSlide() {
	const {image, tagLine } = slides[currentSlide];
	bannerImg.src = image;
	//console.log(bannerImg.src);
	bannerText.innerHTML = tagLine;

	dots.forEach(dot => dot.classList.remove('dot_selected'));
  	dots[currentSlide].classList.add('dot_selected');
}

// Écouteurs de clics sur les flèches
arrowLeft.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
});

arrowRight.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
});

