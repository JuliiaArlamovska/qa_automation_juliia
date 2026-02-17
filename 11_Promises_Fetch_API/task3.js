function fetchToDo() {
	//Інструкція (опис який нічого не робить)
	// fetch запит до сервера за конкретною адресою
	// return обіцянка потім повернутися з результатом
	return fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
		// коли відповідь прийде тоді
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

// Using async/await to execute both requests
async function executeRequests() {
	try {
		// Execute both requests sequentially
		const todo = await fetchToDo();
		const user = await fetchUser();

		console.log('Async/await - ToDo:', todo);
		console.log('Async/await - User:', user);

		return { todo, user };
	} catch (error) {
		console.error('Async/await error:', error);
	}
}

// Using async/await with Promise.all() - waits for all promises to resolve in parallel
async function executeWithPromiseAll() {
	try {
		const [todo, user] = await Promise.all([fetchToDo(), fetchUser()]);
		console.log('Promise.all with async/await:', { todo, user });
		return { todo, user };
	} catch (error) {
		console.error('Promise.all error:', error);
	}
}

// Using async/await with Promise.race() - returns the first resolved promise
async function executeWithPromiseRace() {
	try {
		const result = await Promise.race([fetchToDo(), fetchUser()]);
		console.log('Promise.race with async/await:', result);
		return result;
	} catch (error) {
		console.error('Promise.race error:', error);
	}
}

// Call the async functions
executeRequests();
executeWithPromiseAll();
executeWithPromiseRace();
