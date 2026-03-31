const userLogins = {
  username: "admin",
  password: "password123"
};

function createLoginSystem(maxAttempts = 3) {
  let attempts = 0; // tracks failed attempts
  let isLocked = false;

  // Nested arrow function to check login
  const checkLogin = (inputUsername, inputPassword) => {
    if (isLocked) {
      console.log("Account is locked. No more attempts allowed.");
      return false;
    }

    attempts++; // increment attempts on each try

    if (inputUsername === userLogins.username && inputPassword === userLogins.password) {
      console.log("Login successful!");
      attempts = 0; // reset on success
      return true;
    } else {
      if (attempts >= maxAttempts) {
        isLocked = true;
        console.log("Account locked due to too many failed attempts.");
      } else {
        console.log(`Login failed. You have ${maxAttempts - attempts} attempt(s) left.`);
      }
      return false;
    }
  };

  return checkLogin; // return the nested function for use
}

const login = createLoginSystem(3);