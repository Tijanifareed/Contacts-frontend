const form = document.querySelector(".form-tag");
const url = "http://localhost:8080/api/v1/user/create-contact"

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const firstName = document.querySelector("#first-name").value
    const lastName = document.querySelector("#last-name").value
    const phoneNumber = document.querySelector("#phone-number").value
    const email = document.querySelector("#email").value
    const address = document.querySelector("#address").value
    const ownerEmail = document.querySelector("#owner-email").value

    const data = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, email: email, address: address, ownerEmail: ownerEmail}),
    })

    const responseData = await data.json(); // Get response data

    if (data.ok) {
        console.log(responseData); // Log response data
        alert("Contact created successfully!");
        window.location.href = "../UserOperations.html";
    } else {
        console.log(responseData);// Log error message
        alert("Failed to create contact!");
    }
});

