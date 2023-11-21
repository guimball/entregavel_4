// sum.js
export function sum(a, b) {
    return a + b;
    }
    // isPrime.js
    export function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
    return false;
    }
    }
    return num > 1;
    }
    // tests.js
    import { sum } from './sum.js';
    import { isPrime } from './isPrime.js';
    let input = process.argv[2];
    test('Soma dois números positivos', () => {
    if(input === 'sum') {
    expect(sum(1, 2)).toBe(3);
    }
    });
    test('Soma um número positivo e um negativo', () => {
    if(input === 'sum') {
    
    expect(sum(1, -2)).toBe(-1);
    }
    });
    test('Verifica se um número primo é primo', () => {
    if(input === 'isPrime') {
    expect(isPrime(5)).toBe(true);
    }
    });
    test('Verifica se um número não primo não é primo', () => {
    if(input === 'isPrime') {
    expect(isPrime(4)).toBe(false);
    }
    });
    // Executa os testes
    require('./tests');