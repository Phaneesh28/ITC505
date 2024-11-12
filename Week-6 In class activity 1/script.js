// Image rollover effect (scale effect is handled in CSS)

// Button color change
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", () => {
    const colors = ["#4CAF50", "#FF5722", "#3F51B5", "#009688"];
    const currentColor = colorButton.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    colorButton.style.backgroundColor = newColor;
});

// Input field with alert on submit
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", () => {
    const inputField = document.getElementById("inputField");
    const inputText = inputField.value.trim();

    // Control flow to check if the input is empty
    if (inputText === "") {
        alert("Please enter your name before submitting.");
    } else {
        alert(`Hello, ${inputText}! Welcome to the interactive webpage.`);
    }
    inputField.value = ""; // Clear the input field after submission
});
// JavaScript rollover effect for the image
const hoverImage = document.getElementById("hoverImage");

hoverImage.addEventListener("mouseenter", () => {
    hoverImage.style.transform = "scale(1.2)";
    hoverImage.style.transition = "transform 0.3s ease";
});

hoverImage.addEventListener("mouseleave", () => {
    hoverImage.style.transform = "scale(1)";
});
