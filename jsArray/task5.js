// Об'єднання масивів

const array1 = [1, 2, 66.33, -9]; // перший масив чисел
const array2 = [5, 8, 99, -100]; // другий масив чисел

// Використання методу concat для об'єднання двох масивів
// arrayFull це новий масив, який містить елементи з array1 та array2

const arrayFull = array1.concat(array2);
console.log(arrayFull); // Виведе: [1, 2, 66.33, -9, 5, 8, 99, -100]
