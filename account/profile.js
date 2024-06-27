"use strict"

const profileContainer = document.querySelector("#profile-container");
const postsContainer = document.querySelector("#posts-container");

// Fetch user data
fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/users/JBrown", {
  method: "GET",
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpCcm93biIsImlhdCI6MTcxOTUwMzU3MCwiZXhwIjoxNzE5NTg5OTcwfQ.BcOyjeg0f1og43-7QNLr_ZbCOF0FChCxtq748mftyJI"
  }
})
.then(response => response.json())
.then(userData => {
  const userProfileHTML = `
    <div class="profile">
      <span class="profile-username">${userData.username}</span>
      <p>${userData.fullName}</p>
      <p>${userData.bio}</p>
      <p>${userData.createdAt}</p>
      <p>${userData.updatedAt}</p>
    </div>
  `;
  profileContainer.innerHTML = userProfileHTML;

  // Fetch user's posts
  fetch(`http://microbloglite.us-east-2.elasticbeanstalk.com/api/users/${userData.username}/posts`, {
    method: "GET",
    headers: {
      Authorization: "BearereyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpCcm93biIsImlhdCI6MTcxOTUwMzU3MCwiZXhwIjoxNzE5NTg5OTcwfQ.BcOyjeg0f1og43-7QNLr_ZbCOF0FChCxtq748mftyJI"
    }
  })
  .then(response => response.json())
  .then(postsData => {
    let postsHTML = "";
    postsData.forEach(post => {
      postsHTML += `
        <div class="post">
          <span class="post-author">${post.username}</span>
          <p>${post.content}</p>
          <p>${post.createdAt}</p>
          <p>${post.updatedAt}</p>
        </div>
      `;
    });
    postsContainer.innerHTML = postsHTML;
  })
  .catch(error => console.error("Error fetching posts:", error));
})
.catch(error => console.error("Error fetching user data:", error));