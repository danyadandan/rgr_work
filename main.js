
//Scroll
document.querySelector('.scroll-to-about').addEventListener('click', (event) => {
    event.preventDefault(); 
    const target = document.querySelector('.scroll-to-about').getAttribute('href');
    const position = document.querySelector(target).offsetTop;
    window.scrollTo({
        top: position,
        behavior: 'smooth'
    });
});

// Animation
window.addEventListener('scroll', function() {
    const textElement = document.querySelectorAll('.text-hidden');

    textElement.forEach(e=>{
        const textPosition = e.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
      
        if (textPosition < viewportHeight) {
            e.classList.add('text-visible');
        }
    })
    

    const header = this.document.querySelector(".header")
    const scrollTop = document.documentElement.scrollTop

    if(scrollTop > 10) header.classList.add("scroll-heder")
    else header.classList.remove("scroll-heder")
  });
  