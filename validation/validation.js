function validateForm(){
    let name=document.getElementById('name').value;
    if(name==""){
      document.getElementById('fname').innerHTML="please enter the name";
      return false;
    }if(name.length<=4){
      document.getElementById('fname').innerHTML="please enter valid name greater than four";
      return false
    }if(name.length>=20){
      document.getElementById('fname').innerHTML=" please enter valid name must be lessthen  20";
      return false;
    };
  
  
    let sname=document.getElementById('secondname').value;
    if(sname==""){
      document.getElementById('second').innerHTML="envalid";
      return false;
    }if(sname.length<=2){
      document.getElementById('second').innerHTML="please enter valid name greater than 3";
      return false
    }if(sname.length>=10){
      document.getElementById('second').innerHTML=" please enter valid name must be lessthen  10";
      return false;
    };
  
    let a=document.myForm.email.value;
    if(a.indexOf('@')<=0){
      document.getElementById('emailes').innerHTML="invalid email";
      return false;
    }if((a.charAt(a.length-4)!='.') && (a.charAt(a.length-3)!='.')){
      document.getElementById('emailes').innerHTML="invalid @ email";
      return false;
    };
  
  
    let num=document.myForm.mobile.value;
    if(isNaN(num)){
      document.getElementById('mobi').innerHTML="please enter number";
      return false;
    }
  
    if(num.length>=11){
      document.getElementById('mobi').innerHTML="enter 10 digit no";
      return false
    }
    
  
    let pass=document.getElementById('password').value;
    let cpass=document.getElementById('cpassword').value;
    var lowercaseleters=/[a-z]/g;
    var uppercaseletter=/[A-z]/g;
    var numcaseletter=/[0-9]/g;
    var special=/[@]/g;
    if(pass!=cpass){
      document.getElementById('ppass').innerHTML="password not match";
      return false;
    }
    if(pass.match(uppercaseletter) && (pass.match(lowercaseleters)) &&(pass.match(numcaseletter)) && (pass.match(special))){
     document.getElementById('cpass').innerHTML="succes";
      return true;
    }
    else {
      document.getElementById('cpass').style.background='red'
      document.getElementById('cpass').innerHTML="invalid";
      return false
    }
  }