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

    const responseData = await data.json();

    if (data.ok) {
        alert("User Created Successfully")
        window.location.href = "../login page/LoginPage.html";
    } else {
        const errorMessage = responseData.data;
        alert("error: " + errorMessage);
    }

})