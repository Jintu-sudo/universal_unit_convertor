document.getElementById('suggestionForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get the suggestion text
    const suggestionText = document.getElementById('suggestionText').value;

    // Reference to the response message element
    const responseMessage = document.getElementById('responseMessage');

    try {
        // Send the suggestion to the backend
        const response = await fetch('http://localhost:3000/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ suggestion: suggestionText }),
        });

        if (response.ok) {
            // Show success message dynamically
            responseMessage.style.display = 'block';
            responseMessage.style.color = 'green';
            responseMessage.textContent = 'Thank you for your suggestion!';

            // Clear the form
            document.getElementById('suggestionText').value = '';

            // Show prompt
            alert('Thank you! Your feedback has been submitted successfully.');
        } else {
            // Show failure message dynamically
            responseMessage.style.display = 'block';
            responseMessage.style.color = 'red';
            responseMessage.textContent = 'Failed to submit your suggestion. Please try again.';

            // Show prompt
            alert('Oops! Your feedback could not be submitted. Please try again.');
        }
    } catch (error) {
        console.error('Error submitting suggestion:', error);

        // Show error message dynamically
        responseMessage.style.display = 'block';
        responseMessage.style.color = 'red';
        responseMessage.textContent = 'An error occurred. Please try again later.';

        // Show prompt
        alert('An error occurred while submitting your feedback. Please try again later.');
    }
});
