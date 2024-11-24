let myLibrary = [];
function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages=pages;
  this.read = read;
}
// Add a test book
myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 295, false));

function displayBooks(){
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';
  // 3. Loop through myLibrary and create rows for each book
  for (let i = 0; i < myLibrary.length; i++) {
     // Create a new row
     const row = bookList.insertRow();
    
     // Create cells for each piece of book information
     const titleCell = row.insertCell(0);
     const authorCell = row.insertCell(1);
     const pagesCell = row.insertCell(2);
     const readCell = row.insertCell(3);
     const actionCell = row.insertCell(4);
    
     // Fill the cells with book information
     titleCell.textContent = myLibrary[i].title;
     authorCell.textContent = myLibrary[i].author;
     pagesCell.textContent = myLibrary[i].pages;
    
     // Add a checkbox for read status
     const readCheckbox = document.createElement('input');
     readCheckbox.type = 'checkbox';
     readCheckbox.checked = myLibrary[i].read;
     readCell.appendChild(readCheckbox);
    
     // Add a remove button
     const removeButton = document.createElement('button');
     removeButton.textContent = 'Remove';
     removeButton.onclick = () => removeFromLibrary(i);
     actionCell.appendChild(removeButton);
  }
}
function addBookToLibrary(){
  // event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  const newBook = new Book(title,author,pages,read);
  myLibrary.push(newBook);
  displayBooks();
  closeModal();
  // event.targe.reset();
}
function removeFromLibrary(index){
  myLibrary.splice(index, 1);
  // we add display so the changes get shown after removing a row.
  displayBooks();
}
// Function to open modal
function openModal() {
  document.getElementById('addBookModal').showModal();
}

// Function to close modal
function closeModal() {
  document.getElementById('addBookModal').close();
}
// Add event listener to the form
document.getElementById('addBookForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form from submitting normally
  addBookToLibrary();
});
// Add event listener to the button
document.getElementById('addBookBtn').addEventListener('click', openModal);
displayBooks();