function navigateToNextPage() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    if (username === "" || password === "") {
        errorMessage.textContent = "Please enter both username and password!";
        errorMessage.style.color = "red";
    } else if (username === "24100634@o6u.edu.pk" && password === "24100634HHH") {
        // Navigate to the next page
        window.location.href = "url.html";
    } else {
        errorMessage.textContent = "Invalid username or password!";
        errorMessage.style.color = "red";
    }
}




    // // Reference elements
    // const loginButton = document.getElementById("submitLogin");
    // const usernameInput = document.getElementById("username");
    // const passwordInput = document.getElementById("password");
    // const errorMessage = document.getElementById("errorMessage");

    // // Simulated login action
    // loginButton.addEventListener("click", function () {
    //     const username = usernameInput.value.trim();
    //     const password = passwordInput.value.trim();

    //     if (username === "" || password === "") {
    //         errorMessage.textContent = "Please enter both username and password!";
    //         errorMessage.style.color = "red";
    //     } else {
    //         // Simulate login success (replace with actual logic)
    //         if (username === "24100634@o6u.edu.pk" && password === "24100634HHH") {
                

    //             window.open("http://127.0.0.1:5501/url.html", "_blank"); // Redirect to another page
    //         } else {
    //             errorMessage.textContent = "Invalid username or password!";
    //             errorMessage.style.color = "red";
    //         }
    //     }
    // });

    // // Handle "Forget Password" click
    // document.getElementById("forgotPassword").addEventListener("click", function () {
    //     alert("Redirecting to the forgot password page...");
    //     // Add actual redirection logic if needed
    // });

    // // Handle "Language" link
    // document.getElementById("languageLink").addEventListener("click", function (event) {
    //     event.preventDefault();
    //     alert("Language switched to Arabic!");
    // });

    // // Add form submission with Enter key
    // document.getElementById("loginPanel").addEventListener("keypress", function (event) {
    //     if (event.key === "Enter") {
    //         loginButton.click();
    //     }
    // });