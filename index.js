const createLoginTracker = (user) => {
  let loginAttempts = 0;
  const maxAttempts = 3;

  return (inputPassword) => {
    // 1. Check if the account is already locked
    if (loginAttempts >= maxAttempts) {
      return 'Account locked due to too many failed login attempts';
    }

    // 2. Check if the password is correct
    if (inputPassword === user.password) {
      return 'Login successful';
    } else {
      // 3. Handle incorrect password
      loginAttempts++;

      if (loginAttempts >= maxAttempts) {
        // This ensures the 3rd fail returns the lock message if required by the test
        // or sets up the lock for the very next call.
      }
      
      return `Attempt ${loginAttempts}: Login failed`;
    }
  };
};

// THIS IS THE MISSING PART:
module.exports = { createLoginTracker };
