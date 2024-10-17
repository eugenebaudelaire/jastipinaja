const reviewsContainer = document.getElementById('reviews-container');

// Function to add review to the page
function addReview(name, stars, text) {
    const reviewCard = document.createElement('div');
    reviewCard.classList.add('review-card');
    reviewCard.innerHTML = `
        <img src="https://via.placeholder.com/50" alt="Profile">
        <h3>${name}</h3>
        <div class="stars">${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}</div>
        <p>${text}</p>
    `;
    reviewsContainer.appendChild(reviewCard);
}

// Function to handle form submission
document.getElementById('reviewForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('reviewerName').value;
    const stars = parseInt(document.getElementById('reviewStars').value);
    const text = document.getElementById('reviewText').value;
    
    addReview(name, stars, text);

    // Clear the form
    document.getElementById('reviewForm').reset();
});
