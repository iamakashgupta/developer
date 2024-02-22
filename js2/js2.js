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




}   
myFunction2();
