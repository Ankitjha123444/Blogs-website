document.addEventListener('DOMContentLoaded', () => {
    // Get all comment forms on the page
    const commentForms = document.querySelectorAll('.comment-form');

    // Loop through each form and add a submit event listener
    commentForms.forEach(form => {
        form.addEventListener('submit', (event) => {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Get the post ID from the data attribute
            const postId = form.getAttribute('data-post-id');

            // Get the input values from the specific form
            const nameInput = form.querySelector('input[type="text"]');
            const commentInput = form.querySelector('textarea');

            const name = nameInput.value;
            const comment = commentInput.value;

            // Check if both fields are filled
            if (name && comment) {
                // Find the comments list for the current post
                const commentsList = document.querySelector(`#${postId} .comments-list`);

                // Create a new comment element
                const newComment = document.createElement('div');
                newComment.classList.add('comment');
                newComment.innerHTML = `
                    <p class="comment-author"><strong>${name}</strong></p>
                    <p>${comment}</p>
                `;

                // Add the new comment to the list
                commentsList.appendChild(newComment);

                // Clear the form inputs after submission
                nameInput.value = '';
                commentInput.value = '';
            }
        });
    });
});