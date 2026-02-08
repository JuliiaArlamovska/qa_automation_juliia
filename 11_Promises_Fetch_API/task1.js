// Task 1: Using setTimeout to display messages after a delay
function showMessage (message, sec) {

// This function will be called after a specified delay to display a message
    console.log(`${message}, ${sec}`)
};
// Schedule the showMessage function to be called after 3 seconds and 5 seconds with different messages
setTimeout(showMessage, 3000, 'Seconds', '3'); 
setTimeout(showMessage, 5000, 'Seconds', '5');
// Task 2: Using setInterval to display messages at regular intervals
setInterval(showMessage,4000, 'Seconds', '4');