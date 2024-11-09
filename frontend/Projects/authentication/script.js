const users = JSON.parse(localStorage.getItem("users")) || [];
function showView(viewName) {
    // Hide all views
    document.querySelectorAll(".view").forEach(view => {
        view.style.display = "none";
    });

    // Show the specified view
    const targetView = document.getElementById(viewName);
    if (targetView) {
        targetView.style.display = "block";
    }
}
function signUp() {
    let username = document.getElementById("user").value;
    let email = document.getElementById("user-email").value;
    let password = document.getElementById("pass").value;
    let newUser = {
        name : username,
        email : email,
        password : password
    }
    let newU = users.find((user) => user.name === username);
    if(newU) {
        alert("alreate have that name");
        showView("login");
    }else {
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("register sucessfull");
        showView("login");
    }
}
document.getElementById("sign-up").addEventListener("click", signUp);
showView("register");