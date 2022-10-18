let number = +prompt('Введіть число')
const num = 3;
let result = false;

for (let i = 0; num ** i <= number; i++) {
    if (num ** i === number) {
        result = true;
        break;
    }
}
result ? alert('Число можна отримати шляхом зведення 3 в ступінь') : alert('Число не можна отримати шляхом зведення 3 в ступінь');