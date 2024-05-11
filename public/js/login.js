function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const apiUrl = "/api/login";

    fetch(window.location.origin + apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => {
            if (!response.ok) {

                throw new Error('Network response was not ok');
            }
            // If response is OK, parse JSON
            return response.json();
        })
        .then(data => {

            if (data != 0) {
                //alert(JSON.stringify(data));
                window.location.href = "/main.html";
            } else {
                // If login was not successful, display an error message
                alert("Login failed. Please check your username and password.");
            }
        })

    .catch(error => {
        // Handle errors
        alert("login failed, can you check user and password again ");
        // Display error message to the user or perform other actions
    });

}