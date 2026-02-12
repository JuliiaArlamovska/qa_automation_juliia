function delayText(text, ms) {
	//Function and it arguments
	setTimeout(() => {
		console.log(text);
	}, ms);
}

// Приклад виклику:
delayText('Text appear in 5 sec', 5000);
delayText('Text appear in 10 sec', 10000);
