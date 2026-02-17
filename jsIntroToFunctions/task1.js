//Function Declaration (звернення і виклтк функції до її оголошення)

function areaDefinition(width, height) {
	// назва функції + параметри
	const area = width * height; // тіло функції
	return area; // повернення значення
}
const result1 = areaDefinition(5, 10); // виклик функції з аргументами
console.log(result1); // виведення результату в консоль

//Function Expression (оголошення функції після її звернення)

const areaDefinition2 = function (width, height) {
	// назва функції + параметри
	const areaCalc = width * height; // тіло функції
	return areaCalc; // повернення значення
};
const result2 = areaDefinition2(5, 10); // виклик функції з аргументами
console.log(result2); // виведення результату в консоль

//Arrow Function (стрілочна функція)
const areaDefinition3 = (width, height) => width * height; // назва функції + параметри + тіло функції + повернення значення
const result3 = areaDefinition3(5, 10); // виклик функції з аргументами
console.log(result3); // виведення результату в консоль
