document.addEventListener("DOMContentLoaded", () => {
    const postIdInput = document.getElementById("postId");
    const searchButton = document.getElementById("searchButton");
    const postContainer = document.getElementById("postContainer");
    const commentsButton = document.getElementById("commentsButton");

    searchButton.addEventListener("click", () => {
        const postId = postIdInput.value;
        if (postId >= 1 && postId <= 100) {
            fetchPostById(postId)
                .then((post) => {
                    displayPost(post);
                    commentsButton.disabled = false;
                    commentsButton.dataset.postId = postId;
                })
                .catch((error) => {
                    console.error("Помилка:", error);
                    commentsButton.disabled = true;
                });
        } else {
            alert("Ід має бути від 1 до 100");
            commentsButton.disabled = true;
        }
    });

    commentsButton.addEventListener("click", () => {
        const postId = commentsButton.dataset.postId;
        fetchComments(postId)
            .then((comments) => {
                displayComments(comments);
            })
            .catch((error) => {
                console.error("Помилка:", error);
            });
    });

    function fetchPostById(postId) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Пост не знайдено");
                }
                return response.json();
            });
    }

    function fetchComments(postId) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Коментарі не знайдено");
                }
                return response.json();
            });
    }

    function displayPost(post) {
        postContainer.innerHTML = `
            <div class="post">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>
        `;
    }

    function displayComments(comments) {
        postContainer.innerHTML += ('<h1>Коментарі</h1>');
        const commentsContainer = document.createElement("div");
        commentsContainer.className = "comments";

        comments.forEach((comment) => {
            const commentElement = document.createElement("div");
            commentElement.className = "comment";
            commentElement.innerHTML = `
                <h3>${comment.name}</h3>
                <p>${comment.body}</p>
            `;
            commentsContainer.appendChild(commentElement);
        });

        postContainer.appendChild(commentsContainer);
    }
});
