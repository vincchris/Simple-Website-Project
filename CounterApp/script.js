let sumBtn = document.querySelector("#sumBtn")
let minBtn = document.querySelector("#minBtn")
let reset = document.querySelector("#reset")

sumBtn.addEventListener("click", () => {
  let result = document.getElementById("result")
  let number = Number(result.textContent)

  result.textContent = number + 1
  console.log(result)
})

minBtn.addEventListener("click", () => {
  let result = document.getElementById("result")
  let number = Number(result.textContent)

  result.textContent = number - 1
  console.log(result)

  if (number < 0) {
    result.textContent = 0
  }
})

reset.addEventListener("click", () => {
  let result = document.querySelector("#result")
  let number = 0

  result.innerText = number
  console.log(result)
})