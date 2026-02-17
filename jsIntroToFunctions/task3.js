function checkOrder(available, ordered) {
	if (available < ordered) {
		return 'Your order is too large, we don’t have enough goods.';
	}
	if (ordered === 0) {
		return 'Your order is empty';
	}
	if (available > ordered) {
		return 'Your order is accepted';
	}
}
console.log(checkOrder(77, 8)); // виклик функції з аргументами
console.log(checkOrder(5, 0)); // виклик функції з аргументами
console.log(checkOrder(10, 15)); // виклик функції з арг
