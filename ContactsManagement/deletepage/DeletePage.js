const url = "http://localhost:8080/api/v1/user/delete-contact"
const form = document.querySelector(".form-tag");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const phoneNumber = document.querySelector("#phoneNumber").value;
    const data = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({phoneNumber: phoneNumber})
    })
    if(data.ok) {
        alert("contact deleted Successfully")
        window.location.href = "../user-operations/UserOperations.html";
    }else {
        alert("Invalid number")
    }
})