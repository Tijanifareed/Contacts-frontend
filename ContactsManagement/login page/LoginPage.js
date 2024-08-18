const form = document.querySelector(".form-tag")
const url = "http://localhost:8080/api/v1/user/login"


form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const password = document.querySelector("#password").value
    const email = document.querySelector("#email").value
    const data = await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email: email, password: password})
    })
    if(data.ok){
        alert("Logged in Successfully")
        window.location.href = "../user-operations/UserOperations.html";
    } else {
        alert("Invalid email or password")
    }
})