

pages= JSON.parse(localStorage.getItem('pages'))

/*console.log(pages["title"])
console.log(pages["continut"])
console.log(pages["poz1"])
console.log(pages["poz2"])
console.log(pages["poz3"])
console.log(pages["id"])*/



const titluElem= document.getElementById('titlu')
const continutElem= document.getElementById('info')

const galerie=document.getElementById('galerie')

titluElem.innerText=pages["title"]
continutElem.innerText=pages["continut"]

var i=0;
var i=(i--);

  
 for(i in pages.vector_poze)
 {
  //console.log(pages.vector_poze[i])
  const slide=document.createElement('div')
  galerie.appendChild(slide)
  var image = document.createElement("IMG");
   slide.appendChild(image)
   const descriere=document.createElement('div')
   slide.appendChild(descriere)
   const numar=document.createElement('div')
   slide.appendChild(numar)
 
slide.classList.add('slide')
numar.classList.add('numbertext')
descriere.classList.add('row-text')
//image.classList.add('slide')

image.setAttribute("src",pages.vector_poze[i])
var index=(i++)
numar.innerHTML= index+"/"+ pages.vector_poze.length
descriere.innerHTML=("txt",pages.vector_descrieri[index--])


 }


 var mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
 
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";

}