const profileContainer = document.querySelector("#profile-container");
const editUserButton = document.querySelector("#editUserButton");
const editProfileForm = document.querySelector("#edit-profile-form");
const saveUserButton = document.querySelector("#saveUserButton");

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
    <h2>${userData.username}</h2>
    <p>Full Name: ${userData.fullName}</p>
    <p>Bio: ${userData.bio}</p>
  `;
  profileContainer.innerHTML = userProfileHTML;

  // Add event listener to edit profile button
  editUserButton.addEventListener("click", () => {
    editProfileForm.style.display = "block";
  });

  // Add event listener to save changes button
  saveUserButton.addEventListener("click", () => {
    const fullName = document.querySelector("#full-name-input").value;
    const bio = document.querySelector("#bio-input").value;

    // Sends updated user data to server
    fetch(`http://microbloglite.us-east-2.elasticbeanstalk.com/api/users/${userData.username}`, {
      method: "PUT",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpCcm93biIsImlhdCI6MTcxOTUwMzU3MCwiZXhwIjoxNzE5NTg5OTcwfQ.BcOyjeg0f1og43-7QNLr_ZbCOF0FChCxtq748mftyJI",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullName,
        bio
      })
    })
   .then(response => response.json())
   .then(updatedUserData => {
      // Updates user profile HTML
      userProfileHTML = `
        <h2>${updatedUserData.username}</h2>
        <p>Full Name: ${updatedUserData.fullName}</p>
        <p>Bio: ${updatedUserData.bio}</p>
      `;
      profileContainer.innerHTML = userProfileHTML;

      // Hides edit profile form
      editProfileForm.style.display = "none";
    })
   .catch(error => console.error("Error updating user profile:", error));
  });
})
.catch(error => console.error("Error fetching user data:", error));