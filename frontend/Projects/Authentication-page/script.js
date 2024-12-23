const users = JSON.parse(localStorage.getItem("users")) || [];

const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const goLoginBtn = document.getElementById("goLoginBtn");

function showView(view) {
  document.getElementById("signup").style.display =
    view === "signup" ? "block" : "none";
  document.getElementById("login").style.display =
    view === "login" ? "block" : "none";
  document.getElementById("dashboard").style.display =
    view === "dashboard" ? "block" : "none";
}

// Add Event
signupBtn.addEventListener("click", signUp);
loginBtn.addEventListener("click", login);
logoutBtn.addEventListener("click", logout);
goLoginBtn.addEventListener("click", () => showView("login"));

function signUp() {
  const username = document.getElementById("username").value;
  const useremail = document.getElementById("useremail").value;
  const userpassword = document.getElementById("userpassword").value;

  const newUser = {
    name: username,
    email: useremail,
    password: userpassword,
  };

  // Check if already exists
  const userExist = users.find((user) => user.name === username);
  if (userExist) {
    alert("Username already exists... Please choose a different one.");
    return;
  }

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup Successful! You can now log in.");
  showView("login");
}

// Login
function login() {
  const userloginemail = document.getElementById("loginUseremail").value;
  const userloginpassword = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("users")) || [];
  const user = storedUser.find(
    (user) => user.email === userloginemail && user.password === userloginpassword
  );

  if (user) {
    localStorage.setItem("loggedUser", JSON.stringify(user));
    alert("Login successful!");
    showDashboard();
  } else {
    alert("Invalid credentials");
  }
}

// Show dashboard with a welcome message
function showDashboard() {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  document.getElementById(
    "usernameDisplay"
  ).innerText = `Hey ${user.name}, welcome!`;
  showView("dashboard");
}

// Logout function
function logout() {
  localStorage.removeItem("loggedUser");
  alert("You've successfully logged out!");
  showView("signup");
}
