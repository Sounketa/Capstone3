/* Posts Page JavaScript */

"use strict";


// GET http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts/
// Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imp1bGllbiIsImlhdCI6MTcxODk4MzUwMCwiZXhwIjoxNzE5MDY5OTAwfQ.CDYPBsEsqMTNMHXoyNX3vjmGq6BYRG439hAqcHcXVrs

/* Posts Page JavaScript */

"use strict";

const postsContainer = document.querySelector("#posts-container");

fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts/", {
  method: "GET",
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imp1bGllbiIsImlhdCI6MTcxODk4MzUwMCwiZXhwIjoxNzE5MDY5OTAwfQ.CDYPBsEsqMTNMHXoyNX3vjmGq6BYRG439hAqcHcXVrs"
  }
})
.then(response => response.json())
.then(data => {
  data.forEach(post => {
    const postHTML = `
      <div class="post">
        <span class="post-author">${post.author}</span>
        <p>${post.content}</p>
      </div>
    `;
    postsContainer.innerHTML += postHTML;
  });
})
.catch(error => console.error("Error fetching posts:", error));