async function fetchPosts() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Loading..."; // Show loading text

    try {
        // Create a timeout promise to handle long delays
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Request Timeout! Try again.")), 5000)
        );

        // Fetch API Data
        const response = await Promise.race([
            fetch("https://dummyjson.com/posts"),
            timeoutPromise
        ]);

        if (!response.ok) {
            throw new Error("Failed to fetch data!");
        }

        const data = await response.json();

        // Display post titles
        outputDiv.innerHTML = data.posts
            .map(post => `<p>${post.title}</p>`)
            .join("");

    } catch (error) {
        outputDiv.innerHTML = `<span style="color: red;">${error.message}</span>`;
    }
}