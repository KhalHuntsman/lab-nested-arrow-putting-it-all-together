function createLoginTracker(userInfo) {
  let attemptCount = 0;
  const maxAttempts = 3;

  return (passwordAttempt) => {
    attemptCount++;

    // Account lock check
    if (attemptCount > maxAttempts) {
      return "Account locked due to too many failed login attempts";
    }

    // Password check
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      return `Attempt ${attemptCount}: Login failed`;
    }
  };
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};