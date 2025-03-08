const boxes = document.querySelectorAll(".box"); // All boxes
const nextButtons = document.querySelectorAll(".Next"); // All next buttons
const backButtons = document.querySelectorAll(".Back"); // The Back buttons
const resetbutton = document.querySelectorAll(".clear");
const icon = document.getElementById("icon");
const file = document.getElementById("file");
const file_name = document.getElementById("file_name");
const delete_icon = document.getElementById("delete_icon");


let currentBoxIndex = 0; // Track which box is currently visible

// Initially show the first box by adding the 'active' class
boxes[currentBoxIndex].classList.add("active");

nextButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default action

        const form = boxes[currentBoxIndex].querySelector("form");

        // Check if form is valid
        // **Only validate Box 1**
        if (currentBoxIndex === 0) {
            if (!form.checkValidity()) {
                // Show error messages for invalid fields
                form.querySelectorAll("input").forEach((input) => {
                    if (!input.checkValidity()) {
                        const errorMessage = input.nextElementSibling;
                        if (errorMessage && (errorMessage.classList.contains("error_1") ||
                            errorMessage.classList.contains("error_2") ||
                            errorMessage.classList.contains("error_3"))) {
                            errorMessage.classList.add("show");
                        }
                    }
                });

                return; // Stop navigation if Box 1 is invalid
            }
        }

        // Hide all error messages if form is valid
        form.querySelectorAll(".error_1, .error_2, .error_3").forEach((error) => {
            error.classList.remove("show");
        });

        // Hide the current box
        boxes[currentBoxIndex].classList.remove("active");

        // Move to the next box, loop back to the first one after the last
        currentBoxIndex = (currentBoxIndex + 1) % boxes.length;

        // Show the next box
        boxes[currentBoxIndex].classList.add("active");
    });
});


// When the Back button is clicked
backButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Hide the current box
        boxes[currentBoxIndex].classList.remove("active");

        // Move to the previous box, loop back to the last one if at the first
        currentBoxIndex = (currentBoxIndex - 1 + boxes.length) % boxes.length;

        // Show the previous box
        boxes[currentBoxIndex].classList.add("active");
    });
});

// When the Reset button is clicked, go back to the first box
resetbutton.forEach((button) => {
    button.addEventListener("click", () => {
        // Hide the current box
        boxes[currentBoxIndex].classList.remove("active");

        // Reset to the first box
        currentBoxIndex = 0;

        // Show the first box
        boxes[currentBoxIndex].classList.add("active");

        // Clear content in the boxes (text inputs, file previews, etc.) but exclude buttons
        boxes.forEach(box => {
            const inputs = box.querySelectorAll("input:not([type='button'], [type='submit']), textarea, select"); // Exclude button and submit inputs
            inputs.forEach(input => {
                if (input.type === "file") {
                    input.value = ""; // Reset file input
                    file_name.style.display = "none"; // Hide the image preview
                } else if(input.type === "radio"){
                    input.checked = false; // Uncheck the radio buttons
                } else if (input.type === "checkbox"){
                    input.checked = false; // Uncheck the checkbox buttons
                } else {
                    input.value = ""; // Clear text input and textarea
                }
            });
        });
    });
});


// File upload and image preview handling
icon.addEventListener("click", function () {
    file.click();
});

file.addEventListener("change", function () {
    const selectedFile = file.files[0]; // Get the selected file
    if (selectedFile) {
        const reader = new FileReader(); // Create FileReader

        reader.onload = function (e) {
            file_name.src = e.target.result; // Set image source
            file_name.style.display = "block"; // Show image
            delete_icon.style.display = "flex"; // Show dustbin icon
        };

        reader.readAsDataURL(selectedFile); // Convert file to data URL
    }
});

// Delete image when clicking the dustbin icon
delete_icon.addEventListener("click", function () {
    file_name.src = ""; // Remove image source
    file_name.style.display = "none"; // Hide image
    delete_icon.style.display = "none"; // Hide dustbin icon
    file.value = ""; // Reset file input
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
  
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  });
  
