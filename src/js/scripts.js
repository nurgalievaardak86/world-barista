function closeup(){
    setTimeout(function(){
        $('#exampleModal').modal('hide')
    }, 300)
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
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

const search = () => {
    const searchBox = document.querySelector('.form__search').value.toUpperCase();
    const searchItems = document.querySelector('.cards');
    const search = document.querySelector('.cards-box');
    const pname = document.querySelector('.cards__title');

    for(let i = 0; i < pname.length; i++) {
        let match = search[i].querySelector('.cards__title')[0];

        if(match) {
            let textValue = match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchBox) > - 1) {
                search[i].style.display = "";
            } else{
                search[i].style.display = "none";
            }
        }
    }
}





  