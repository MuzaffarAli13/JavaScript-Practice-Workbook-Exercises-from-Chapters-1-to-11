function Assign_1(){
     console.log("1.Alerts: Showing Messages to the User\nExercises:");
     console.log("Hello World");
     alert("Muzaffar Ali")
     alert(1)
     let message = "Hi Dear";
     console.log(message);
     let names = " Muzaffar Ali";
     alert(message + names)
     console.log(message + names);
     
}



function Assign_2(){
    console.log("2.Variables for Strings: Declaring and Using Text Data\nExercises");
    let userName = " Muzaffar Ali";
    let message = "welcome"
    alert(message + userName)
    let firstName = "Muzaffar";
    let lastName = " Ali"
    let combine = firstName + lastName
    console.log(combine);
    let favorite_quote = "You have to believe in yourself when no one else does."
    console.log(favorite_quote);
    let city = "karachi";
    alert(`Welcome to ${city}`)
    console.log(`Welcome to ${city}`);
    
} 


function Assign_3(){
    console.log("3.Variables for Numbers: Storing and Using Numerical Data\nExercises");
    let age = 19;
    let num1 = 10
    let num2 = 10
    let result = num1 + num2
    alert(result)
    console.log(` 10 + 10 =  ${result}`);
    console.log(num1 - 5);
    console.log(num1 * num2);
    console.log(`i'm ${age} years old`);
    
} 

function Assign_4(){
    console.log("4.Math Expressions: Performing Arithmetic Operations");
    
    let x = 10;
    let y = 5
    let result = x + y;
    console.log(result);
    alert(x - y)
    console.log(x * y);
    console.log(x/y);
    console.log(x&y);
    
} 

function Assign_5(){
   console.log("5.Prompt: Getting Input from the User");
   let name = prompt("What is your name?");
   alert("Hello, " + name);
   let num = Number(prompt("add number "))
   console.log(num+num);
   let user_age = prompt("enter your age: ")
   console.log((user_age));
   let fav_color= prompt("Enter your fav_color ")
   console.log(`Wow! I like ${fav_color} too`);
   let city = prompt("Enter your city name")
   console.log(`You are from ${city}`);
} 

function Assign_6(){
    console.log("6.If Statement and Comparison Operators: Controlling Flow");
    let user_age = Number(prompt("Enter your age"))
    if(user_age <30){
        console.log("You are still young man");
    }
    let user_num = Number(prompt("Enter any number: "))
    if(user_num == 7){
        console.log("Even number");
    }
    
}


