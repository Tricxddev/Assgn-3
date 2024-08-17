// Function to change the background color based on the response
function changeBackgroundColor(response) {
    const textElement = document.getElementById('myTxt');

    if (response === 'success') {
        textElement.style.backgroundColor = 'green';
    } else if (response === 'error') {
        textElement.style.backgroundColor = 'red';
    } else {
        textElement.style.backgroundColor = 'yellow';
    }
}

// Get the button and add a click event
const colorButton = document.getElementById('colorBtn');
colorButton.onclick = () => {
    const response = 'success'; // You can change this to 'error' or anything else

    changeBackgroundColor(response);
};
