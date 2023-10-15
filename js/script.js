
/* slide in */
const hiddenElements = document.querySelectorAll('.hidden')       /* learnt from https://www.youtube.com/watch?v=huVJW23JHKQ&t=695s&ab_channel=KevinPowell */

const observer = new IntersectionObserver((entries, ) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting)
  })
  }
)


hiddenElements.forEach(hidden => { observer.observe(hidden)
});


/* navbar */
const toggleButton = document.getElementsByClassName('toggle-button')[0]        /* learnt from https://www.youtube.com/watch?v=At4B7A4GOPg */
const navbtn = document.getElementsByClassName('nav-btn-container')[0]

toggleButton.addEventListener('click', () => {
  navbtn.classList.toggle('active')
})
