const body = document.querySelector("body");
const darkModeBtn = document.querySelector(".dark-mode");

// Toggle dark mode and move the toggle button
darkModeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// Fetch Books by Category
async function allCategories() {
  const response = await fetch(
    `https://books-backend.p.goit.global/books/top-books`
  );

  const books = await response.json();
  console.log("hello");

  console.log(books);

  const bookContainer = document.querySelector(".book-container");
  bookContainer.innerHTML = ""; // Clear previous books
  books.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.className = "book";
    bookElement.innerHTML = `<div class="imgae-box">
            <img src="${book.books[0].book_image}" alt="">
          </div>
          <p class="title">${book.books[0].title}</p>
          <p class="author">${book.books[0].author}</p></p>`;
    bookElement.onclick = () => showBookDetails(book.books[0]._id);
    bookContainer.appendChild(bookElement);
  });
}

// Fetch Categories
async function fetchCategories() {
  const response = await fetch(
    "https://books-backend.p.goit.global/books/category-list"
  );
  const categories = await response.json();

  const bookSearchContainer = document.querySelector(".book-search-container");
  categories.forEach((category) => {
    const categoryElement = document.createElement("li");
    categoryElement.innerText = category.list_name;
    categoryElement.onclick = () => fetchBooksByCategory(category.list_name);
    bookSearchContainer.appendChild(categoryElement);
  });
}

// Fetch Books by Category
async function fetchBooksByCategory(category) {
  const response = await fetch(
    `https://books-backend.p.goit.global/books/category?category=${category}`
  );
  const books = await response.json();
  console.log(books);

  const bookContainer = document.querySelector(".book-container");
  bookContainer.innerHTML = ""; // Clear previous books
  books.forEach((book) => {
    const heading = document.getElementById("heading");
    heading.innerText = `${book.list_name}`;
    const bookElement = document.createElement("div");
    bookElement.className = "book";
    bookElement.innerHTML = `<div class="imgae-box">
            <img src="${book.book_image}" alt="">
          </div>
          <p class="title">${book.title}</p>
          <p class="author">${book.author}</p></p>`;

    bookElement.onclick = () => showBookDetails(book._id);
    bookContainer.appendChild(bookElement);
  });
}

//   Fetch and Show Book Details
async function showBookDetails(bookId) {
  console.log(bookId, "bookId");

  const response = await fetch(
    `https://books-backend.p.goit.global/books/${bookId}`
  );
  const book = await response.json();
  const overlayContainer = document.getElementById("overlay-container");
  overlayContainer.innerHTML = `<div id="overlay">
        <img
          src="${book.book_image}"
          alt=""
        />
        <div class="details">
          <p class="details-title">${book.title}</p>
          <p class="details-author">${book.author}</p>
          <p class="details-description">${book.description}
          </p>
        </div>
      </div>
      <button id="close-modal">Close</button>`;

  overlayContainer.style.display = "block";

  // Close Modal
  document.getElementById("close-modal").addEventListener("click", () => {
    overlayContainer.style.display = "none";
  });
}

allCategories();
// Initial Fetch of Categories
fetchCategories();
