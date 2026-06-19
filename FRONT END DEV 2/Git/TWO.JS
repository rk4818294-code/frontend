function getGithubUserPromise() {
    return new Promise((resolve, reject) => {
        fetch("https://api.github.com/users/octocat")
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

getGithubUserPromise()
.then(data => {
    console.log("Promise Output:");
    console.log(data);
})
.catch(error => {
    console.log("Error:", error);
});
