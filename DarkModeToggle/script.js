let changeBg = document.getElementById("checkboxId")

changeBg.addEventListener("change", () => {
  document.body.classList.toggle('dark-mode')
})