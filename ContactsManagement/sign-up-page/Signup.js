const form = document.querySelector(".form-tag")
const url = "http://localhost:8080/api/v1/user/register"

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const firstName = document.querySelector("#first-name").value
    const lastName = document.querySelector("#last-name").value
    const password = document.querySelector("#password").value
    const email = document.querySelector("#email").value

    const data = await fetch(url, {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({firstName: firstName, lastName: lastName, password: password, email: email}),
    })
    if (data.ok) {
        console.log("User registered successfully")
    } else {
        console.error("Failed to register user")
    }

})