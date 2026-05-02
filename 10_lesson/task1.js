import Book from './Book.js';
import EBook from './EBook.js';

// Створення екземплярів Book
const book1 = new Book("Кобзар", "Тарас Шевченко", 1840);
const book2 = new Book("1984", "Джордж Орвелл", 1949);
const book3 = new Book("Відьмак", "Анджей Сапковський", 1986);

console.log("--- Інфо про звичайні книги ---");
book1.printInfo();
book2.printInfo();

// Створення екземпляра EBook
const ebook1 = new EBook("Чистий код", "Роберт Мартін", 2008, "PDF");

console.log("\n--- Інфо про електронну книгу ---");
ebook1.printInfo();

// Робота з геттерами/сеттерами
ebook1.fileFormat = "EPUB"; // Зміна формату через сеттер
console.log(`Новий формат для "${ebook1.title}": ${ebook1.fileFormat}`);

// Пошук найдавнішої книги
const allBooks = [book1, book2, book3, ebook1];
const oldest = Book.getOldestBook(allBooks);
console.log("\n--- Найдавніша книга в масиві ---");
oldest.printInfo();

// Використання статичного методу fromBook
const newEbookFromBook = EBook.fromBook(book2, "MOBI");
console.log("\n--- Створена EBook на основі існуючої книги ---");
newEbookFromBook.printInfo();