const scriptURL = "https://script.google.com/macros/s/AKfycby6qslXZrZZB-iyu9Vi_87udygx-rYJLheqm4d_dI8_M1CD-JpAz2-C5RcZReKdaCBQ/exec"; // Google Apps Script URL
const input1 = document.querySelector(".form-control-nama"); // Selecting the input field for name
const input2 = document.querySelector(".form-control-email"); // Selecting the input field for email
const input3 = document.querySelector(".form-control-pesan"); // Selecting the input field for message
const form = document.forms["alvin-contact-form"]; // Selecting the form by its name attribute
const btnKirim = document.querySelector(".btn-kirim"); // Selecting the send button
const btnLoading = document.querySelector(".btn-loading"); // Selecting the loading button
const myAlert = document.querySelector(".my-alert"); // Selecting the success alert
const myAlert1 = document.querySelector(".my-alert1"); // Selecting the error alert

// Adding event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Preventing default form submission behavior

  // Event listener for the send button click event
  btnKirim.addEventListener("click", (e) => {
    myAlert.classList.add("d-none"); // Hiding the success alert when the send button is clicked
  });

  // Checking if any of the input fields are empty
  if (input1.value === "" || input2.value === "" || input3.value === "") {
    // Displaying the error message if any of the input fields are empty
    myAlert1.classList.remove("d-none");
    myAlert.classList.add("d-none"); // Hiding the success alert
  } else {
    // If all input fields are filled
    myAlert1.classList.add("d-none"); // Hiding the error alert
    btnLoading.classList.toggle("d-none"); // Showing the loading button
    btnKirim.classList.toggle("d-none"); // Hiding the send button

    // Sending form data to the Google Apps Script URL via fetch API
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        // Handling the response from the server
        btnLoading.classList.toggle("d-none"); // Hiding the loading button
        btnKirim.classList.toggle("d-none"); // Showing the send button
        myAlert1.classList.add("d-none"); // Hiding the error alert
        myAlert.classList.remove("d-none"); // Showing the success alert

        // Resetting the form fields after successful submission
        form.reset();
        console.log("Success!", response); // Logging success message to the console
      })
      .catch((error) => {
        // Handling errors if fetch operation fails
        console.error("Error!", error.message); // Logging the error message to the console
        btnLoading.classList.add("d-none"); // Hiding the loading button
        btnKirim.classList.remove("d-none"); // Showing the send button
      });
  }
});
