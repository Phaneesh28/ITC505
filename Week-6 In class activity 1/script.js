function calculateFactorial() {
    // Get the input number
    const input = document.getElementById('numberInput').value;
    const num = parseInt(input);

    // Check if the input is a valid number
    if (isNaN(num) || num < 0) {
        document.getElementById('output').textContent = "Please enter a valid non-negative integer.";
        return;
    }

    // Calculate factorial iteratively
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    // Display the factorial result
    document.getElementById('output').textContent = `Factorial of ${num} is: ${factorial}`;
}
