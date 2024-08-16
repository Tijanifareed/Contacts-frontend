const form = document.querySelector(".form-tag");
const url = "http://localhost:8080/api/v1/user/find-contact-byPhoneNumber";


form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const phoneNumber = document.querySelector("#phone-number").value;

    const data = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({phoneNumber: phoneNumber}),
    })
    const responseData = await data.json();
    if(data.ok){
        console.log(responseData);
      document.getElementById("name").innerText = `Name: ${responseData.firstName} ${responseData.lastName}`;
       document.getElementById("email").innerText = `Email: ${responseData.email}`;
       document.getElementById("phoneNumber").innerText = `Phone Number: ${responseData.phoneNumber}`;
        document.getElementById("address").innerText = `Address: ${responseData.address}`;
    } else {
        console.error("Failed to fetch contact");
        alert("Failed to fetch contact");


    //     if (response.ok) {
    //         alert("User Created Successfully");
    //         // Display the response data
    //         document.getElementById("response-data").innerHTML = `
    //   <h2>Contact Created:</h2>
    //   <p>Name: ${jsonData.firstName} ${jsonData.lastName}</p>
    //   <p>Email: ${jsonData.email}</p>
    //   <p>Password: ${jsonData.password}</p>
    // `;
    //         window.location.href = "../login page/LoginPage.html";

        }
})