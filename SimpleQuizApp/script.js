let questionParagrap = document.getElementById("question")
let answer = document.getElementById("ans")
let nextButton = document.getElementById("nextBtn")
let result = document.getElementById("result")

let quiz = [
  {
    question: "Hewan Apa yang Bisa Terbang?",
    answers: {
      A: "Kucing",
      B: "Burung",
      C: "Ikan",
      D: "Sapi"
    },
    response: "B"
  },
  {
    question: "Bahasa Inggrisnya Cinta?",
    answers: {
      A: "Life",
      B: "Love",
      C: "Like",
      D: "Luck"
    },
    response: "B"
  }
]

let currentQuestion = 0
let selectedAnswer = null

function showQuestion() {
  questionParagrap.textContent = quiz[currentQuestion].question

  answer.innerHTML = Object.entries(quiz[currentQuestion].answers)
    .map(([key, value]) => `
      <button class="answerBtn" data-answer="${key}">
        ${key}. ${value}
      </button>
    `)
    .join("")

  selectedAnswer = null

  let answerButtons = document.querySelectorAll(".answerBtn")

  answerButtons.forEach(button => {
    button.addEventListener("click", () => {
      selectedAnswer = button.dataset.answer

      console.log("Jawaban dipilih:", selectedAnswer)
    })
  })

  nextButton.addEventListener('click', () => {

    if (selectedAnswer === null) {
      result.textContent = "Please Answer a Question"
      return
    }

    if (selectedAnswer === quiz[currentQuestion].response) {
      result.textContent = "Correct!"
    } else {
      result.textContent = "Wrong"
    }

    currentQuestion++

    if (currentQuestion < quiz.length) {
      showQuestion()
    } else {
      questionParagrap.innerHTML = "Quiz Finished!"
      answer.innerHTML = ""
      nextButton.style.display = "none"
    }
  })
}


showQuestion()