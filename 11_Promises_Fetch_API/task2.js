function fetchToDo() {
	//Інструкція (опис який нічого не робить)
	// fetch запит до сервера за конкретною адресою
	// return обіцянка потім повернутися з результатом
	return fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
		// коли відповідь прийде тод 
		if (!response.ok) {
			// якшо відповідь 200
			throw new Error('An error occured'); // якшо сталася помилка
		}
		return response.json(); // поверни як обєкт
	});
}

function fetchUser() {
	return fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => {
		if (!response.ok) {
			throw new Error('An error occured for an user request');
		}
		return response.json();
	});
}

// Using Promise.all() - waits for all promises to resolve
Promise.all([fetchToDo(), fetchUser()])
	.then((results) => {
		console.log('Promise.all results:', results);
	})
	.catch((error) => console.error('Promise.all error:', error));

// Using Promise.race() - returns the first resolved promise
Promise.race([fetchToDo(), fetchUser()])
	.then((result) => {
		console.log('Promise.race result:', result);
	})
	.catch((error) => console.error('Promise.race error:', error));
