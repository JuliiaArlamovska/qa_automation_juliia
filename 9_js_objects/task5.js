const users = [{ name: 'Juliia', email: 'juliia@example.com', age: 33 }];
for (const { name, email, age } of users) {
	console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
