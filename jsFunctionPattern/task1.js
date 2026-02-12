// Стрілочні функції + колбек-функції
// Main function

const handleNum = (number, evenCallback, oddCallback) => {
	// Перевірка парності
	number % 2 === 0 ? evenCallback() : oddCallback(); // Теренарний оператор для виклику відповідної функції
};

// Callback functions
const handleEven = () => console.log('number is even'); // Функція для парних чисел
const handleOdd = () => console.log('number is odd'); // Функція для непарних чисел

// Виклик
handleNum(42, handleEven, handleOdd); // number is even
