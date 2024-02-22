function myCode1(){
    console.log("hey mom, i am learning js")
    console.log("hey, I  learning js on vs code")
    console.log("i am akash gupta and i am learning js")
    window.alert("so you are Akash gupta")

    //alert and prompt
    window.alert("hey akash")
    a=window.prompt("type your name")

    // arrays
    let fruits=["apple","banana"]
    fruits.push("lemon");
    fruits.pop();
    fruits.unshift("ki");
    fruits.push("lemon");
    fruits.push("lemon");

    
    console.log(fruits)



}

function myCode2(){
    let firstName="bro";
    let age=20;
    let student= true;

    console.log(firstName);
    console.log(age);
    console.log(student);

    //template literals
    console.log(`your age is ${age}, and you are my ${firstName} , also i have $${age}` );


   
    
    //arithmetic operation
    //augmented assignment operator
    let a =20;
    console.log(a+=1);

     //math 
     let x;
     let y;  
     let z;
     
     x=Math.round(7.8);
     console.log(x);
     x=Math.floor();
     x=Math.pow();
     x=Math.sqrt(x);
     x=Math.floor();
     x=Math.floor();


     //ternary operator
     checkWinner(false);
     function checkWinner(win){
        win? console.log("you win") : console.log("you loose")
     }
}
function myCode3(){
     //hypotenuse of a triangle
        document.getElementById("submitButton").onclick = function(){
        a=document.getElementById("aTextBox").value;
        a=Number(a);

        b=document.getElementById("bTextBox").value;
        b=Number(b);

       c=Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));

       document.getElementById("cLabel").innerHTML= "side c:"+ c;
    }
}

function myCode4(){
     //to locale strings
     

     let money=12345564356.678;
     money=money.toLocaleString("hi-IN", {style: "currency", currency:"INR"});
     console.log(money);
    
     
    }
function myCode5(){
  // temperature converter
  document.getElementById("submitButton").onclick= function(){
    let temp;


    if (document.getElementById("celsiusTemp").checked) {
      temp=document.getElementById("textLabel").value;
      temp=Number(temp);

      temp=toCelsius(temp);
      document.getElementById("tempResult").innerHTML= "Your temperature in celsius is:",temp;
      
    }else if(document.getElementById("fahrenheitTemp").checked){
      temp=document.getElementById("textLabel").value;
      temp=Number(temp);

      temp=toFahrenheit(temp);
      document.getElementById("tempResult").innerHTML= "Your temperature in fahrenheit is:",temp;
    }else{
      document.getElementById("tempResult").innerHTML="please select one";
    }
  }
  
  function toCelsius(temp){
    return(temp-32)*5/9
  } 
  function toFahrenheit(temp){
    return temp *9/5 +32
  } 
}
function myCode6(){
  // Object oriented programming
  const car={
    model: "mustang",
    year: 2023,

    drive: fun
  }

}
//myCode6();
function myCode7(){
  confirm("are you the killer")
  console.log("hey");
}
myCode7();
function myCode8(){}
function myCode9(){}
function myCode10(){}
function myCode11(){}
function myCode12(){}
function myCode13(){}
function myCode14(){}
function myCode16(){}
function myCode16(){}
function myCode17(){}
function myCode18(){}
function myCode19(){}
function myCode20(){}




/*function askUserForFunction() {
    var userInput = prompt('Which function do you want to run? Enter a number between 1 and 20:');

    // Convert the user input to a number
    var selectedFunctionNumber = parseInt(userInput);

    // Check if the input is a valid number and within the range of 1 to 20
    if (!isNaN(selectedFunctionNumber) && selectedFunctionNumber >= 1 && selectedFunctionNumber <= 20) {
      // Build the function name dynamically and call it
      var functionName = 'myCode' + selectedFunctionNumber;
      window[functionName]();
    } else {
      alert('Invalid input. Please enter a number between 1 and 20.');
    }
  }

  // Call the function to start the process
  askUserForFunction();
  */