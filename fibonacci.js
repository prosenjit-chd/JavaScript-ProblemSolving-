// Fibonacci seris using function 
// function fibonacciSeries(num){
//     if(typeof num != 'number'){
//         return 'Please Give a Valid Number.' 
//     }
//     const fibo = [0, 1];
//     for (let i = 2; i<=num; i++){
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }
// const fiboseris  = fibonacciSeries('babu');
// console.log(fiboseris);

// Fibonacci seris using for loop

// const fibo = [0, 1];
// for (let i = 2; i <= 10; i++){
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

// Fibonacci Number using Recursive function 

function fibonacciNumber(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    return fibonacciNumber(n-1) + fibonacciNumber(n-2);
}
const myFibo = fibonacciNumber(6);
console.log(myFibo);

// Fibonacci Seris using Recursive function 

function fibonacciSeries(n){
    if(n==0){
        return [0];
    }
    if(n==1){
        return [0, 1];
    }
    const fibo = fibonacciSeries(n - 1);
    fibo[n] = fibo [n-1] + fibo [n-2];
    return fibo;
}
const myFiboSr = fibonacciSeries(6);
console.log(myFiboSr);