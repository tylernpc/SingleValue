const apiString = `http://localhost:3000/api/users`;

// create job function
async function createUser(userData) {
  try {
    let response = await fetch(apiString, {
      method: "POST",
      headers: {
        "Content=Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error("Failed to create user");

    const newUser = await response.json();
    console.log(`User Created ${newUser}`);
  } catch (error) {
    console.error(`Error creating job: ${error}`);
  }
}
