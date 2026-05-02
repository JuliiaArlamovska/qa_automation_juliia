class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    // Геттери та сеттери з валідацією
    get title() { return this._title; }
    set title(value) {
        if (typeof value !== 'string' || value.length === 0) throw new Error("Назва має бути рядком");
        this._title = value;
    }

    get author() { return this._author; }
    set author(value) {
        if (typeof value !== 'string') throw new Error("Автор має бути рядком");
        this._author = value;
    }

    get year() { return this._year; }
    set year(value) {
        if (typeof value !== 'number' || value > new Date().getFullYear()) {
            throw new Error("Некоректний рік видання");
        }
        this._year = value;
    }

    printInfo() {
        console.log(`Книга: "${this.title}", Автор: ${this.author}, Рік: ${this.year}`);
    }

    // Статичний метод для пошуку найдавнішої книги
    static getOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) return null;
        return books.reduce((oldest, current) => (current.year < oldest.year ? current : oldest));
    }
}

export default Book;