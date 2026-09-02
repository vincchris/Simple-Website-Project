let username = document.getElementById("username")
let email = document.getElementById("email")
let sendBtn = document.getElementById("sendBtn")
let result = document.getElementById("result")

sendBtn.addEventListener("click", () => {

  const userData = {
    username: username.value,
    email: email.value,
  }

  fetch("http://127.0.0.1:8000/submit-json", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response is not ok")
      }
      return response.json()
    })
    .then(data => console.log("Success", data))
    .catch(error => console.error("Error", error))

  result.append(username.value, email.value)

})
