// Завдання. Копіювання з мутацією

const initialArray = [1, 2, 3, 4, 5];
// Використання методу map для створення нового масиву, де кожен елемент помножений на його індекс

const duplicatedArray = initialArray.map((number, index) => number * index);

// Виведення результату
console.log(duplicatedArray); // Виведе: [0, 2, 6, 12, 20]