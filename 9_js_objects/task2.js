// const book object with properties title, author, and year
const book = {
    title : "JS for begginners",
    author : "JS",
    year : 2026
}

const {title, author, year} = book; // Destructuring assignment to extract properties
console.log('This is a book title: ' + title + '.'); // Log the title property
console.log('Author: '+ author + '.'); // Log the author property