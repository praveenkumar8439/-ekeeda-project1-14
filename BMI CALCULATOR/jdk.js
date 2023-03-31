let age=document.getElementById("text");
let height=document.getElementById("Height");
let weight=document.getElementById("Weight");
let female=document.getElementById("checkbox");
let male=document.getElementById("male");
let Form =document.getElementById("form");

function validateform(){
   if(age.value == ""||
   height.value == ""||
   weight.value == ""||
   (male.checked == false && female.checked == false)
   ){
    alert("all field are modatery");
    document.getElementById("submit").removeEventListener("click",countbmi);
   }else{
    countbmi();
   }
      
}
document.getElementById('submit').addEventListener("click",validateform);
function countbmi(){
    Array = [age.value,height.value,weight.value ];
    if(male.checked){
        Array.push("male");
    }else if(female.checked){
        Array.push("female");
    }
    Form.reset();


    var bmi = Number(Array[2])/(((Number(Array[1])/100)*Number(Array[1]))/100);
    var result ="";
    if(bmi<18.9){
        result = "Underweight";
        
    }else if(18.9 <=bmi  && bmi<=24.5 ){
        result = "Healthy";
    }else if(24.5 <= bmi && bmi<=29.9){
        result = "Over weight";
    }else if(29.9<= bmi && bmi<=34.9){
        result = "Obese";
    }else if(35 <= bmi){
        result="Extremly obese";
    }
    // creating element tag
    var h1 =document.getElementById("h1");
    var h3 =document.getElementById("h2");
    var t =document.createTextNode(result);
    var b=document.createTextNode("BMI :");
    var r=document.createTextNode(parseFloat(bmi).toFixed(2));
    h1.appendChild(t);
    h3.appendChild(b);
    h3.appendChild(r);
    document.body.appendChild(h1);
    document.body.appendChild(h3);
    
    document.getElementById("submit").removeEventListener("click",countbmi);
    document.getElementById("submit").removeEventListener("click",validateform);


}
document.getElementById("submit").addEventListener("click",countbmi);