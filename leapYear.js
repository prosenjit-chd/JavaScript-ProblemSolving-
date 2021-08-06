var userInput = parseInt(prompt("Please inter a year: "));

if(userInput % 4 == 0  && userInput % 100 != 0 || userInput % 400 == 0)
{
    console.log(userInput +" that you input is a Leap Year");
}
else
{
    console.log(userInput +" that you input not a Leap Year");
}
