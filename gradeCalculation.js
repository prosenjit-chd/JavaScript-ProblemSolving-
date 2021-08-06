var marks = parseInt(prompt("Please inter a valid number: "));

if (marks > 100 || marks < 0){
    console.log("Please enter a valid number.")
}
else if (marks >= 80 && marks <= 100){
    console.log("You got A+");
}
else if (marks >= 700 && marks <= 79){
    console.log("You got A");
}
else if (marks >= 60 && marks <= 69){
    console.log("You got A-");
}
else if (marks >= 50 && marks <= 59){
    console.log("You got B");
}
else if (marks >= 40 && marks <= 49){
    console.log("You got C");
}
else if (marks >= 33 && marks <= 39){
    console.log("You got D");
}
else 
    console.log("You Fail");



