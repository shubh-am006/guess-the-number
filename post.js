const form = document.getElementById('numberForm');
const result = document.getElementById('result');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const numberValue = document.getElementById('userNumber').value;
    if (numberValue === '69') {
        result.textContent = 'Congratulations, you guessed correctly!';
        result.style.display = 'block';

        const msg = document.getElementById("correctMsg");

       msg.classList.remove("hidden");
    msg.classList.add("show");

        // Hide after 2 seconds
        setTimeout(() => {
        msg.classList.remove("show");
        msg.classList.add("hidden");
    }, 3000);
        return;
    }



    result.textContent = `wrong guess, you submitted: ${numberValue}. Please try again.`;
    result.style.display = 'block';

    form.reset(); // Reset the form after submission
});






