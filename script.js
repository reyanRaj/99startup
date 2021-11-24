let topics = ['mobile app','website','product']
var slideIndex = 1;
// The index of the currently selected letter from each word
let index = 0;
// The index of the currently selected word from topics
let currentIndex =0;
// Typing text element
const typingText = document.querySelector('.typing-text')

//Typing text function
setTimeout(() => {
    setInterval(() => {
       
        if(index === topics[currentIndex].length - 1){
            index = 0;
            currentIndex++;
        }
        if(currentIndex === topics.length){
            currentIndex = 0;
        }

        typingText.textContent = topics[currentIndex].slice(0,++index)
    }, 200);    
}, 1000);

//Moving the footer slideshow
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}