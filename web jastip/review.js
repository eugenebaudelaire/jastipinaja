// Default reviews untuk pertama kali load
const defaultReviews = [
    {
        name: "Tasya Pemda",
        stars: 5,
        text: "Great service! Highly recommended.",
        image: "https://via.placeholder.com/50"
    },
    {
        name: "Chyntia Tugu",
        stars: 4,
        text: "The product was good, but shipping was slow.",
        image: "https://via.placeholder.com/50"
    },
    {
        name: "Rama EHEHE",
        stars: 5,
        text: "Loved the quality of the items!",
        image: "https://via.placeholder.com/50"
    },
    {
        name: "Gidas Blej",
        stars: 3,
        text: "Average experience. Could be better.",
        image: "https://via.placeholder.com/50"
    },
    {
        name: "Arya Kripca",
        stars: 5,
        text: "Absolutely perfect! Will buy again.",
        image: "https://via.placeholder.com/50"
    }
];

// Load reviews dari localStorage atau gunakan default reviews
let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

// Memastikan bahwa data default hanya ditambahkan jika localStorage kosong
if (reviews.length === 0) {
    reviews = defaultReviews.slice(); // Copy default reviews
    saveToLocalStorage(); // Simpan ke localStorage untuk pertama kali
}

// Fungsi untuk menyimpan data review ke localStorage
function saveToLocalStorage() {
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

// Fungsi untuk render reviews
const reviewsContainer = document.getElementById('reviews-container');

function renderReviews() {
    reviewsContainer.innerHTML = ''; // Kosongkan container setiap kali render ulang
    reviews.forEach((review, index) => {
        const reviewCard = document.createElement('div');
        reviewCard.classList.add('review-card');
        reviewCard.innerHTML = `
            <img src="${review.image}" alt="Profile">
            <h3 contenteditable="true" onblur="updateReviewName(${index}, this.innerText)">${review.name}</h3>
            <div class="stars">${'★'.repeat(review.stars)}${'☆'.repeat(5 - review.stars)}</div>
            <p>${review.text}</p>
            <button class="delete-btn" onclick="deleteReview(${index})">Delete</button>
        `;
        reviewsContainer.appendChild(reviewCard);
    });
}

// Fungsi untuk menghapus review
function deleteReview(index) {
    reviews.splice(index, 1); // Menghapus review dari array
    saveToLocalStorage(); // Update localStorage setelah penghapusan
    renderReviews(); // Render ulang
}

// Fungsi untuk memperbarui nama reviewer
function updateReviewName(index, newName) {
    reviews[index].name = newName; // Update nama reviewer
    saveToLocalStorage(); // Simpan ke localStorage
}

// Fungsi untuk menambahkan review baru
document.getElementById('reviewForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah halaman refresh

    const name = document.getElementById('reviewerName').value;
    const stars = parseInt(document.getElementById('reviewStars').value);
    const text = document.getElementById('reviewText').value;
    
    const newReview = {
        name: name,
        stars: stars,
        text: text,
        image: "https://via.placeholder.com/50" // Placeholder image
    };

    reviews.push(newReview); // Tambah review baru ke array
    saveToLocalStorage(); // Simpan ke localStorage
    renderReviews(); // Render ulang tampilan review

    // Clear form setelah submit
    document.getElementById('reviewForm').reset();
});

// Render reviews saat pertama kali halaman dimuat
renderReviews();
