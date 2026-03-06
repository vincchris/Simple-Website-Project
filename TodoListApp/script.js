let input = document.getElementById("inputTdl")
let button = document.getElementById("sendInput")
let list = document.getElementById("listContainer")

button.addEventListener("click", () => {

  if (input.value.trim() === "") return

  let li = document.createElement("li")
x
  let checkbox = document.createElement("input")
  checkbox.type = "checkbox"

  let span = document.createElement("span")
  span.textContent = input.value

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      span.style.textDecoration = "line-through"
    } else {
      span.style.textDecoration = "none"
    }
  })

  li.appendChild(checkbox)
  li.appendChild(span)

  list.appendChild(li)

  input.value = ""
})