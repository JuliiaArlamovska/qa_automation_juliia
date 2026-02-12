// Count positive, negative, and zero numbers in an array
const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0; // Ініціалізація лічильника для позитивних чисел
let negativeCount = 0; // Ініціалізація лічильника для негативних чисел
let zeroCount = 0; // Ініціалізація лічильника для нулів
for (let i = 0; i < numbers.length; i++) {
	// Ітерація через масив для перевірки кожного числа
	const currentNum = numbers[i]; // Поточне число з масиву для перевірки
	if (currentNum > 0) {
		// Перевірка чи число позитивне
		positiveCount++; // Збільшення лічильника позитивних чисел на 1
	} else if (currentNum < 0) {
		// Перевірка чи число негативне
		negativeCount++; // Збільшення лічильника негативних чисел на 1
	} else zeroCount++; // Якщо число не позитивне і не негативне, воно є нулем, збільшуємо лічильник нулів на 1
}
// Виведення результатів в консоль
console.log(`Positive numbers: ${positiveCount}`);
console.log(`Negative numbers: ${negativeCount}`);
console.log(`Zeros: ${zeroCount}`);
