
"use strict";
/* Posts Page JavaScript */

const postsContainer = document.querySelector("#posts-container");

fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", {
  method: "GET",
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imp1bGllbiIsImlhdCI6MTcxOTMyOTE5NCwiZXhwIjoxNzE5NDE1NTk0fQ.umn_vcAXQb4acU1yYEzzIiuspNs274m3_lHRSR3exsQ"
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

