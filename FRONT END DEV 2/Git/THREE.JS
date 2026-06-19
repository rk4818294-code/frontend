async function getGithubUserAsync() {
    try {
        const response = await fetch("https://api.github.com/users/octocat");
        const data = await response.json();

        console.log("Async/Await Output:");
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getGithubUserAsync();
