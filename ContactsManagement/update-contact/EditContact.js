const form = document.querySelector(".form-tag")
const url = "http://localhost:8080/api/v1/user/update-contact";

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const number = document.querySelector("#number").value
    const updatedFirstName = document.querySelector("#first-name").value
    const updatedLastName = document.querySelector("#last-name").value
    const updatedPhoneNumber = document.querySelector("#phone-number").value
    const updatedEmail = document.querySelector("#email").value
    const updatedAddress = document.querySelector("#address").value
    const ownerEmail = document.querySelector("#owner-email").value

    const data = await fetch(url,{
        method : 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({number: number, updatedFirstName: updatedFirstName, updatedLastName: updatedLastName, updatedEmail: updatedEmail,updatedPhoneNumber: updatedPhoneNumber, updatedAddress: updatedAddress, ownerEmail:ownerEmail})
    })

    const responseData = await data.json();

    if (data.ok) {
        alert("Contact Edited Successfully")
    } else {
        const errorMessage = responseData.data;
        alert("error: " + errorMessage);
    }
})