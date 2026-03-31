const user = {
    username: "admin",
    password: "5555",
    attempts: 0,
    maxAttempts: 3,
    isLocked: false
};

 const login = (inputeUsername, inputPassword) => {
    if (user.isLocked){
        console.log("Account is locked. Too many failed attempts. Please reset login details.");
        return;
    }
    
    if (inputeUsername === user.username && inputPassword === user.password){
        console.log("Login Successful!");
        user.attempts =0;
    }
    else {
        user.attempts++;
        let attemptsLeft = user.maxAttempts - user.attempts;
        console.log("Incorrect user login details. Attempts left: ", attemptsLeft);
    };
    if (user.attempts >= user.maxAttempts){
        user.isLocked = true;
        console.log("Account has been locked. Too many failed attempts");
    }
    
}


login("admin", "five");
login("admin", "223");
login("admin", "5555");
