"use strict"

// Get the form element
const form = document.querySelector("#register");

// Add an event listener to the form's submit event
form.addEventListener('submit', async (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the input values
  const username = document.querySelector("#username").value;
  const fullName = document.querySelector("#fullName").value;
  const password = document.querySelector("#password").value;

  // Create a JSON payload
  const userData = {
    username,
    fullName,
    password
  };

  // Set the API endpoint URL
  const apiUrl = 'http://microbloglite.us-east-2.elasticbeanstalk.com/api/users';

  // Set the request headers
  const headers = {
    'Content-Type': 'application/json'
  };

  // POST request
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(userData)
    });

    // Check if the response was successful
    if (response.ok) {
      console.log('User created successfully!');
      // You can also redirect the user to a login page or display a success message
    } else {
      console.error('Error creating user:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error creating user:', error);
  }
});