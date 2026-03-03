let input = document.getElementById("inputTdl")
let button = document.getElementById("sendInput")
let list = document.getElementById("listContainer")

button.addEventListener("click", () => {

  if (input.value.trim() === "") return

  // Buat elemen li
  let li = document.createElement("li")

  // Buat checkbox
  let checkbox = document.createElement("input")
  checkbox.type = "checkbox"

  // Buat span untuk text
  let span = document.createElement("span")
  span.textContent = input.value

  // Jika checkbox dicentang → kasih garis
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      span.style.textDecoration = "line-through"
    } else {
      span.style.textDecoration = "none"
    }
  })

  // Masukkan checkbox + text ke li
  li.appendChild(checkbox)
  li.appendChild(span)

  // Masukkan li ke list
  list.appendChild(li)

  // Kosongkan input
  input.value = ""
})