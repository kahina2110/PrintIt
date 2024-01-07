document.addEventListener('DOMContentLoaded', function () {
   var currentSlideIndex = 0;
 
   const slides = [
     {
       "image": "slide1.jpg",
       "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
     },
     {
       "image": "slide2.jpg",
       "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
     },
     {
       "image": "slide3.jpg",
       "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
     },
     {
       "image": "slide4.png",
       "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
     }
   ];
 
   var arrowLeft = document.getElementById('arrow_left');
   var arrowRight = document.getElementById('arrow_right');
   var dots = document.querySelectorAll('.dot');
   var bannerImg = document.querySelector('.banner-img');
   var bannerText = document.querySelector('#banner p');
 


   function updateSlide(index) { //fontion qui prend en paramètres un indice et active le carousel
     bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
     bannerText.innerHTML = slides[index].tagLine;
 
     dots.forEach(function(dot, i) {
       dot.classList.toggle('dot_selected', i === index);
     });
   }
 




   arrowRight.addEventListener('click', function () {
      currentSlideIndex = (currentSlideIndex + 1); //on incrémente l'indice du tableau pour activer le carousel
      if (currentSlideIndex >= slides.length) { // si l'indice est supérieur à la longueur du tableau on remet l'indice 0
        currentSlideIndex = 0;
      }
      updateSlide(currentSlideIndex); // on remet a jour les images et le texte en fonctio de l'indice du tableau 
    });
  
    arrowLeft.addEventListener('click', function () {
      currentSlideIndex = (currentSlideIndex - 1);
      if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
      }
      updateSlide(currentSlideIndex);
    });
  
    dots.forEach(function(dot, index) { // dots collection d'éléments
      dot.addEventListener('click', function() {  // à chaque clic, le currentSlide se met à jour avec l'indice du point cliqué 
        currentSlideIndex = index;
        updateSlide(currentSlideIndex);
      });
    });
  
    updateSlide(currentSlideIndex);
  });