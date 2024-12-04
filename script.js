
class Book{
  constructor(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages=pages;
    this.read = read;
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

  // event.targe.reset();
}
function displayBooks(){
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';
  // 3. Loop through myLibrary and create rows for each book
  for (let i = 0; i < myLibrary.length; i++) {
    // Create a new row
    //ucan make a funcion called creat row wich hlds this 
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
function removeFromLibrary(index){
  myLibrary.splice(index, 1);
  // we add display so the changes get shown after removing a row.
  displayBooks();
}
function openModal() {
  document.getElementById('addBookModal').showModal();
}
function closeModal() {
  document.getElementById('addBookModal').close();
}

let myLibrary = [];
// Add a test book
myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 295, false));
// Function to open modal
// Add event listener to the form
document.getElementById('addBookForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form from submitting normally
  addBookToLibrary();
  displayBooks();
  closeModal();
});
// Add event listener to the button
document.getElementById('addBookBtn').addEventListener('click', openModal);
displayBooks();