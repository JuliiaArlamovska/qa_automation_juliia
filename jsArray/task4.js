// Відбір парних чисел
const differentNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 44.0, -8]; // масив чисел

// Використання методу filter для відбору парних чисел
// number це поточне значення
const evenNumbers = differentNumbers.filter((number) => number % 2 === 0);
console.log('Парні числа: ' + evenNumbers); // Виведе: Парні числа: 2,4,6,8,10,0,44.00,-8
