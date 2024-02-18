window.onload = function () {
  console.log("App started");
  booksList.init()
};

class Book {
  constructor(title, author){
    this.title = title;
    this.author = author;
    this.id = Date.now()//timestamp
  }
}

class BooksList {
  constructor(){
    this.books = []
  }

  init(){
    document.getElementById("saveButton").addEventListener("click", (e)=>{
      this.saveButton(e)
    })
    this.loadDataFromStorage()
  }

  loadDataFromStorage(){
    const data = storage.getItems()
    if(data === null || data === undefined) return

    this.books = data;

    data.forEach((value, index)=>{
      ui.addBookToTable(value)
    })
  }

  saveButton(e) {
    console.log('save data')
    const author = document.getElementById("bookAuthor").value
    const title = document.getElementById("bookTitle").value

    e.preventDefault()

    if(author === "" || title ==="") {
      console.log("Brak daty")
      return
    }
    const book = new Book(title, author)
    this.addBook(book);
  }

  addBook(book){
    this.books.push(book)
    ui.addBookToTable(book)
    this.saveData()
  }

  saveData(){
    storage.saveItemse(this.books)
  }
  removeBookById(bookId){
    this.books.forEach((el,index)=>{
      if(el.id == bookId) this.books.splice(index,1)
    });
  this.saveData()
  }
}

const booksList = new BooksList();


class Ui{
  deleteBook(e){
    console.log(e.target)
    const bookId = e.target.getAttribute("data-book-id")

    e.target.parentElement.parentElement.remove()
    booksList.removeBookById(bookId)
  }
  addBookToTable(book){
    const tbody = document.querySelector('#booksTable tbody')
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>
    <button type="button" data-book-id="${book.id}" class="btn btn-danger btn-sm delete">
    Skasuj
    </button>
    </td>
    `;
    tbody.appendChild(tr)

    let deleteButton = document.querySelector(
      `button.delete[data-book-id="${book.id}"]`
      )
      deleteButton.addEventListener("click", (e) => this.deleteBook(e))
    this.clearForm()
  }
  clearForm(){
    document.getElementById("bookTitle").value = ""
    document.getElementById("bookAuthor").value = ""
  }
}

const ui = new Ui();

class Storage {

  getItems(){
    let books = null;

    if(localStorage.getItem("books") !== null){
      books = JSON.parse(localStorage.getItem("books"));
    }else{
      books =[]
    }
    return books;
  }

  saveItemse(books){
    localStorage.setItem("books", JSON.stringify(books));
  }
}

const storage = new Storage();