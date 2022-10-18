let number = +prompt('Enter a number');
let prime = true

if (number <= 1) prime = false
for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        prime = false;
        break;
    }
}
prime ? alert(`${number} is a prime number`) : alert(`${number} isn't a prime number`);