function getGithubUser(callback) {
    fetch("https://api.github.com/users/octocat")
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

getGithubUser(function(error, data) {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Callback Output:");
        console.log(data);
    }
});
