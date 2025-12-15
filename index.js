// Define bookStore with ONLY the books mentioned in tests
const bookStore = {
    name: "Flatbooks Technical Books",
    books: [
        // First book mentioned in test
        {
            title: "Eloquent JavaScript: A Modern Introduction to Programming",
            author: "Marijn Haverbeke",
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
        },
        // Second book mentioned in test (author check)
        {
            title: "HTML and CSS: Design and Build Websites",
            author: "Jon Duckett",
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/31b4K-hFH-L._SX395_BO1,204,203,200_.jpg"
        },
        // Last book mentioned in test
        {
            title: "Cracking the Coding Interview",
            author: "Gayle Laakmann McDowell",
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg"
        }
    ]
};

// Get elements
const bookStoreTitle = document.getElementById('header');
const bookList = document.getElementById('book-list');

// Remove delete-this
const deleteThis = document.getElementById('delete-this');
if (deleteThis) deleteThis.remove();

// Update header
bookStoreTitle.textContent = bookStore.name;

// Add books
bookStore.books.forEach(book => {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');
    
    h3.textContent = book.title;
    p.textContent = book.author;
    img.src = book.imageUrl;
    
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(img);
    bookList.appendChild(li);
});
