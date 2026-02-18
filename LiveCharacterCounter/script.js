let inputText = document.getElementById("inputTxt")
let result = document.getElementById("result")

inputText.addEventListener('input', () => {
  let count = inputText.value.length
  result.textContent = count

  if (count === 0) {
    result.textContent = 0
  }
})