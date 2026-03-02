let input = document.getElementById("inputTdl")
let button = document.getElementById("sendInput")
let list = document.getElementById("listContainer")

button.addEventListener("click", () => {
  let li = document.createElement("li")
  li.textContent = input.value
  list.appendChild(li)
  input.value = ""
})