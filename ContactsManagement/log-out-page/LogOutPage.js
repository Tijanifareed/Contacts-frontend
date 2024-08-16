const form = document.querySelector(".form-tag");
const url = "http://localhost:8080/api/v1/user/logout";

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const data = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email: email})
    })

    const responseData = await data.json();
    if(data.ok) {
        alert("logout successful")
        console.log(responseData)
        window.location.href = "../front-page/ContactsFrontEnd.html";
    }else{
        alert("failed to logout")
    }

})