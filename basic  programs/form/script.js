document.getElementById("submitBtn").onclick = function(){
    let name;
    name=document.getElementById("aText").value;
        document.getElementById("a0Result").innerHTML= "Your first-name is:"+ name; 
    let last;
    last=document.getElementById("bText").value;
        document.getElementById("a1Result").innerHTML= "Your last-name is:"+ last; 
    let nationality;
    nationality=document.getElementById("cText").value;
        document.getElementById("a2Result").innerHTML= "Your Nationality is:"+ nationality; 
    let roll;
    roll=document.getElementById("dText").value;
        document.getElementById("a3Result").innerHTML= "Your name is:"+ roll; 
}
