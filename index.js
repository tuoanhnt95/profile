// find the target : book
// add event listener

const bookCover = document.querySelector('.book-cover');
const book = document.querySelector('.book');
const bookSide = document.querySelector('.book-side');
console.log(book);
console.log(bookCover);
book.addEventListener('click', function(){
  console.log('connect to book');
  // book.classList.toggle('falling-book')
  if (book.classList.contains('falling-book')) {
    book.classList.remove('falling-book');
    book.classList.add('flying-book');
    bookCover.classList.remove('cover-shrink');
    bookSide.classList.remove('side-shrink');
    console.log(book.classList);
  } else {
    book.classList.remove('flying-book');
    book.classList.add('falling-book');
    bookCover.classList.add('cover-shrink');
    bookCover.classList.add('side-shrink');
    console.log(book.classList);
  }
  ;
});
