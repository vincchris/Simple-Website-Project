let HeroBtn = document.getElementById("HeroBtn")
let nameForm = document.getElementById("name")
let messageForm = document.getElementById("message")
let submitBtn = document.getElementById("submit")
let contactForm = document.getElementById("contactForm")
let resultForm = document.getElementById("resultForm")


HeroBtn.addEventListener('click', () => {
  let resultHero = document.getElementById("result")

  if (resultHero) {
    resultHero.textContent = "Hello Nice to meet you"
  }
})

contactForm.addEventListener('submit', function(event) {
  event.preventDefault()

  if (nameForm.value === "") {
    resultForm.textContent = "Please enter your name"
  } else if (messageForm.value === "") {
    resultForm.textContent = "Please enter your message"
  } else {
    resultForm.textContent = "Submit Successfully"
  }
})
