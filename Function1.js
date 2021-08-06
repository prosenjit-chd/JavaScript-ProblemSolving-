

// function celToFar(cel){
//     var farenheit =  (cel * 9/5) + 32;
//     console.log("its Farenheit number is "+ farenheit + "F.");
//     return farenheit;
// }
// celToFar(45);



function celToFar(){
    var userInput = parseInt(prompt("Please inter Celcious: "));
    var farenheit =  (userInput * 9/5) + 32;
    console.log(userInput +"its Farenheit number is "+ farenheit + "F.");
    return farenheit;
}
celToFar();