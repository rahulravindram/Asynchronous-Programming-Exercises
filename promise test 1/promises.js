function fetchDataWithPromise() {
    document.getElementById("output").textContent = "Loading...";

    const fetchPromise = new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject("Operation timed out."), 5000);

        fetch("https://dummyjson.com/posts")
            .then(response => response.json())
            .then(data => {
                clearTimeout(timeout);
                resolve(data.posts.map(post => post.title).join("<br>"));
            })
            .catch(() => reject("Error fetching data!"));
    });

    fetchPromise
        .then(data => document.getElementById("output").innerHTML = data)
        .catch(error => document.getElementById("output").textContent = error);
}

