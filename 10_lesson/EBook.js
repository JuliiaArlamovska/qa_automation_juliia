import Book from './Book.js';

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }

    get fileFormat() { return this._fileFormat; }
    set fileFormat(value) {
        const validFormats = ['PDF', 'EPUB', 'MOBI'];
        if (!validFormats.includes(value.toUpperCase())) {
            throw new Error("Непідтримуваний формат файлу");
        }
        this._fileFormat = value;
    }

    printInfo() {
        console.log(`E-Book: "${this.title}", Автор: ${this.author}, Рік: ${this.year}, Формат: ${this.fileFormat}`);
    }

    // Статичний метод для створення EBook з Book
    static fromBook(bookInstance, fileFormat) {
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
    }
}

export default EBook;