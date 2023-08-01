let i, num = 0, numPares = 0;

for (i = 0; i < 50;) {
    num += 1;
    if (num % 2 == 0) {
        i++
        numPares += num;
    }
}
console.log(numPares)