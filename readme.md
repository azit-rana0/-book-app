# Book App

This project is a dynamic Book App that fetches book data from an external API and displays it in an interactive user interface. The app allows users to browse books by category, view details for a selected book, and includes functionality like dark mode and user authentication (Sign Up / Login).

# [Live](https://azit-rana0.github.io/-book-app/)

## Features

1. **Dynamic UI**
   - Books are displayed dynamically by fetching data from the API.
   - Clicking on a category filters books based on the selected category.

2. **Dark Mode**
   - Users can toggle between light and dark mode for a better viewing experience.

3. **Book Details Modal**
   - Clicking on a book displays detailed information such as the author, description, and purchase links in a modal.

4. **Authentication**
   - Users can sign up and log in to personalize their experience.

5. **Responsive Design**
   - The app is fully responsive and works seamlessly across devices.

## API Endpoints Used

1. **Top Books:**
   - Endpoint: `https://books-backend.p.goit.global/books/top-books`
   - Description: Fetches a list of top books.

2. **Categories List:**
   - Endpoint: `https://books-backend.p.goit.global/books/category-list`
   - Description: Fetches a list of available book categories.

3. **Books by Category:**
   - Endpoint: `https://books-backend.p.goit.global/books/category?category={CATEGORY_NAME}`
   - Description: Fetches books for a specific category.

4. **Book Details:**
   - Endpoint: `https://books-backend.p.goit.global/books/{BOOK_ID}`
   - Description: Fetches detailed information about a specific book.

## Project Structure

```plaintext
|-- index.html       // Main HTML file
|-- styles.css       // CSS for styling
|-- script.js        // JavaScript for functionality
```


## How to Run the Project

1. Clone the repository from GitHub.
2. Open the `index.html` file in any modern web browser.
3. Ensure you have an active internet connection to fetch data from the API.

## Tools & Technologies

- **HTML5** for structure.
- **CSS3** for styling.
- **JavaScript (ES6)** for interactivity and API handling.
- **REST API** for fetching book data.

## Folder Structure
```plaintext
|-- index.html
|-- styles.css
|-- script.js
```

## Challenges Faced

1. Handling API errors gracefully.
2. Ensuring the UI remains responsive and user-friendly.
3. Encoding category names correctly to avoid 404 errors.

## Future Improvements

1. Add pagination for book listings.
2. Enhance authentication to support user sessions.
3. Allow users to save favorite books.

---

## Thank you for exploring the project! Feel free to contribute or provide feedback.

