
"use strict";
/* Posts Page JavaScript */

const postsContainer = document.querySelector("#postsContainer");

fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", {
  method: "GET",
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpCcm93biIsImlhdCI6MTcxOTUwMzU3MCwiZXhwIjoxNzE5NTg5OTcwfQ.BcOyjeg0f1og43-7QNLr_ZbCOF0FChCxtq748mftyJI"
  }
})
.then(response => response.json())
.then(data => {
  data.forEach(post => {
    const postHTML = `
      <div class="post">
        <span class="post-author">${post.username}</span>
        <p>${post.text}</p>
        <p>${post.likes}</p>
        <p>${post.createdAt}</p>
      </div>
    `;
    postsContainer.innerHTML += postHTML;
  });
})
.catch(error => console.error("Error fetching posts:", error));

/* Posts Page JavaScript */

