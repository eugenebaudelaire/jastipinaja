// Array untuk menyimpan jumlah barang tiap produk
let quantities = Array(12).fill(0); // Asumsi ada 12 produk, sesuaikan dengan jumlah produk yang ada

// Fungsi untuk menambah jumlah produk
function increaseQuantity(index) {
    quantities[index]++;
    updateQuantityDisplay(index);
}

// Fungsi untuk mengurangi jumlah produk
function decreaseQuantity(index) {
    if (quantities[index] > 0) {
        quantities[index]--;
    }
    updateQuantityDisplay(index);
}

// Fungsi untuk memperbarui tampilan quantity di halaman
function updateQuantityDisplay(index) {
    document.getElementById(`quantity-${index}`).innerText = quantities[index];
}

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(index, productName, price) {
    const quantity = quantities[index]; 
    if (quantity > 0) {
        alert(`Added ${quantity} of ${productName} to the cart at $${price * quantity}`);
        // Logika keranjang belanja bisa ditambahkan di sini
    } else {
        alert("Please select at least one item before adding to the cart.");
    }
}
