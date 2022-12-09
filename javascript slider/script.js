let http = new XMLHttpRequest();
http.open('get', 'data.json', true);
http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let data = JSON.parse(this.responseText);
        let output= "";
        
        for( i=0; i<data.length; i++){

            output += `<div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            <img src="${data[i].img}" style="width:100%">
            <div class="text">${data[i].title}</div>
          </div>`;
        }
         console.log(output);
    document.querySelector(".slideshow-container").innerHTML=output;
    }
}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex= n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display= "block";
  dots[slideIndex-1].className += " active";
}
