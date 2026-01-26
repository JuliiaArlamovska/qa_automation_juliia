
function divide (numerator, denominator) {  // назва функції divide і параметри numerator та denominator
    const result = numerator / denominator  // змінна result для збереження результату ділення
    if (denominator === 0 || isNaN (result)) {// перевірка на ділення на нуль  і чи є результат числом
        return "Error. Not a number";                // повертаємо повідомлення про помилку якщо умова виконується
    }
    return result + " is  a number"; // повертаємо результат ділення якщо умова не виконується
}
console.log(divide(10, 2) ); // Виклик функції з прикладом ділення 10 на 2
console.log(divide(10, 0)); // Виклик функції з прикладом ділення на нуль
console.log(divide(10, 'letter')); // Виклик функції з прикладом ділення на нечислове значення