// Function that executes a callback after 5 seconds
function delayedMessage(callback) {
    setTimeout(() => {
        callback();
    }, 5000);
}

// Function to fetch data from API
function fetchData() {
    fetch("https://dummyjson.com/posts") // API call
        .then(response => response.json())
        .then(data => {
            // Extract post titles
            let posts = data.posts.map(post => `• ${post.title}`).join("<br>");
            document.getElementById("output").innerHTML = posts;
        })
        .catch(error => {
            document.getElementById("output").innerText = "Error fetching data!";
            console.error("Error:", error);
        });
}

// Event listener for button click
document.getElementById("fetchBtn").addEventListener("click", function () {
    document.getElementById("output").innerText = "Waiting for 5 seconds...";

    // Call delayedMessage, then fetch data after delay
    delayedMessage(fetchData);
});


