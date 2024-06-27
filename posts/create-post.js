"use strict"

const createPostButton = document.querySelector("#createPostButton");
const postMessageInput = document.querySelector("#postMessageInput");

createPostButton.addEventListener("click", (event) => {
  event.preventDefault();

  const message = postMessageInput.value;

  // Create a new post object
  const newPost = {
    text: message,
    username: "JBrown", // Replace with the current user's username
  };

  // Send post data to server
  fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpCcm93biIsImlhdCI6MTcxOTUwMzU3MCwiZXhwIjoxNzE5NTg5OTcwfQ.BcOyjeg0f1og43-7QNLr_ZbCOF0FChCxtq748mftyJI"
    },
    body: JSON.stringify(newPost)
  })
  .then(response => response.json())
  .then((data) => {
    console.log("Post created successfully:", data);
    // Update the UI to show the new post
    const postHTML = `
      <p>${data.text}</p>
    `;
    document.querySelector("#createPostsContainer").innerHTML = postHTML;
    alert("Post created successfully!");
  })
  .catch((error) => {
    console.error("Error creating post:", error);
  });
});

