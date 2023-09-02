
let a = Array(20), b = [];

for (let i = 0; i < a.length; i++) {
    a[i] = Number(prompt('Digite um número'));
    b.unshift(a[i]);
}

console.log(a);
console.log(b);