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