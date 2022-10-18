const dollar = 27;
let result = '';

for (i = 10; i <= 100; i += 10) {
    result = dollar * i;
    console.log(`${i} UAH = ${result} USD`);
}