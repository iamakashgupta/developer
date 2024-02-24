function myFunction1(){

    console.log("hey akash")
    document.getElementById("para").innerHTML="akash is my name";
    alert("hey")
    a=prompt("bro wtf")
    console.log(a)
    //this is a single line comment
    /*this is surely multiline comment here
    i can't even understand */
    alert("hey bro");
    // alert
    // confirm
    // prompt== default and title  

    let name;
    name= prompt("what's your name",);
    alert(`your name is ${name}`)
}
// myFunction1();

function myFunction2(){
    // This is the second function
    // 0, null, undefined gives a false on checking the type of value it is 
    // a unary has a single operand
    //Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.
    // lexicographical
    // == converts but === doesn't
    alert('1' + 2 + 2); // "122" and not "14"
    alert( 6 - '2' ); // 4, converts '2' to a number
    let a = (1 + 2, 3 + 4);
    console.log(a);
    let age = 21;
    let message = age <30? "great":"wtf";
    console.log(message);
    
    
}
// myFunction2();

function myFunction3(){
    let begin;
    begin=prompt("what's the official name of js");
    if(begin=="ecma"){
        console.log("you are correct");
    }else{
        console.log("you don't know ecma");
    }
    //
    console.log("javascript is so cool")
    //
    

}
//false || myFunction3();
function myFunction4(){
    // conditional statement
    true || console.log("so cool js")
    false || console.log("hey so")
    false || console.log("hey akash")
    // only the falsy one going to run the environment
    
    console.log(true && false)
    console.log(true || false)
    console.log("this is a not statement",!true)
    /*
    // Precedence of AND && is higher than OR ||
    
    nullish colescing 
    The result of a ?? b is:

    if a is defined, then a,
    if a isn’t defined, then b.
    */


}
// myFunction4();
function myFunction5(){
// checking the age

    console.log("it's about loop my dear")
        let age;
    function checkAge(age){
        age=prompt("enter your age",18)
        age>=18? "true":confirm("Did your parent allow you?")
    }
    checkAge();
}
// myFunction5();
function myFunction6(){
    // checking the smallest number of the two
    function checkMin(num1,num2){
        
        return(num1<num2)? "num1 is smaller":"num2 is smaller";
    }
    let result=checkMin(prompt("enter the num1"), prompt("enter the num2"));
    console.log(result);

}
// myFunction6();
function myFunction7(){
    function checkPower(a,b){
        return a**b;
    }
    let result=checkPower(prompt("enter the number"),prompt("enter the power"));
    console.log(result);
}
// myFunction7();

function myFunction8(){
    function ask(question, yes, no) {
        if (confirm(question)) yes();//if statement
        else no();
      }
      
      ask(
        "Do you agree?",
        () => alert("You agreed."),
        () => alert("You canceled the execution.")
      );
}
myFunction8()
function myFunction9(){}
function myFunction10(){}
function myFunction11(){}
function myFunction12(){}
function myFunction813(){}
function myFunction14(){}
function myFunction15(){}
function myFunction16(){}
/*
function myFunction8(){}
function myFunction8(){}
function myFunction8(){}
function myFunction8(){}
function myFunction8(){}
function myFunction8(){}
function myFunction8(){}
function myFunction8(){}
function myFunction8(){}
*/