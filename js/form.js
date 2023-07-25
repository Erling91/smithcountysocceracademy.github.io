// Get form element
const registrationForm = document.getElementById('leagueRegistrationForm');

// Event listener for form submission
registrationForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form input values
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const age = document.getElementById('age').value;
  const leagueType = document.getElementById('leagueType').value;
  const preferredPosition = document.getElementById('preferredPosition').value;

  // Create an object with the form data
  const formData = {
    fullName,
    email,
    phone,
    age,
    leagueType,
    preferredPosition,
  };

  // Send the form data to the server (you'll need to implement server-side handling)
  // Example using Fetch API:
  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the server (e.g., show a confirmation message)
      console.log(data);
      alert('Registration successful! We will contact you soon.');
      registrationForm.reset(); // Clear the form after successful submission
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Registration failed. Please try again later.');
    });
});
