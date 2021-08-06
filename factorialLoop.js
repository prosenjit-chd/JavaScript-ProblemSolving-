// function factorial(number){
//     var fac = 1;
//     var i = 1;
//     while(i<=number){
//         fac = fac * i;
//         i++;
//     }
//     return fac;
// }
//  var myFactorialInput = factorial(1500);
//  console.log(myFactorialInput);


function recursiveFactorial(n){
    if(n==1){
        return 1;
    }
    return n * recursiveFactorial(n-1);
}

var myInput = recursiveFactorial(5);
console.log(myInput);