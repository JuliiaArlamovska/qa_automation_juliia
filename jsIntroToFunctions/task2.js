function ageResult(age) {
  // назва функції + параметри
  if (age >= 18) {
    // перевірка чи юзер повнолітній
    return "Adult"; // повернення значення
  } else {
    // інакше
    return "Not adult"; // повернення значення
  }
}
const resultAge1 = ageResult(25); // виклик функції з аргументами
const resultAge2 = ageResult(15); // виклик функції з аргументами
console.log("Age >= 18 " + resultAge1 + ", Age < 18: " + resultAge2); // виведення результату в консоль
