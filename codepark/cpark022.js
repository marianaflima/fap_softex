//chamando prompt-sync
const prompt = require('prompt-sync')();

//decalaração das variaveis
let boolVar, bigIntVar, stringVar, symbolVar;


//output da primeira parte
console.log(`Valor 1 do booleano: `, boolVar);
console.log(`Valor 1 do big int: `, bigIntVar);
console.log(`Valor 1 da string: `, stringVar);
console.log(`Valor 1 do symbol: `, symbolVar);


//segunda parte - valor nulo
boolVar = bigIntVar = stringVar = symbolVar = 0;

//output da segunda parte
console.log(`Valor 2 do booleano: `, boolVar);
console.log(`Valor 2 do big int: `, bigIntVar);
console.log(`Valor 2 da string: `, stringVar);
console.log(`Valor 2 do symbol: `, symbolVar);


//terceira parte - valores
bigIntVar = BigInt(123);
boolVar = Boolean();
stringVar = 'Maria';
symbolVar = Symbol('yahoo');

//output da primeira parte
console.log(`Valor 3 do booleano: `, boolVar, '\nTipo:', typeof boolVar);
console.log(`Valor 3 do big int: `, bigIntVar, '\nTipo:', typeof bigIntVar);
console.log(`Valor 3 da string: `, stringVar, '\nTipo:', typeof stringVar);
console.log(`Valor 3 do symbol: `, symbolVar, '\nTipo:', typeof symbolVar);

