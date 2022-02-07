function Validation(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
   

    if(email==""){
        document.getElementById("emailid").innerHTML="**plz fill the email id or phone number";
        return false;
    }
    
    if((email.indexOf('@')<=0) && (isNaN(email))){
        document.getElementById("emailid").innerHTML="**position of @ is invalid";
        return false;
    }

    if(!isNaN(email) && (email.length!=10)){
        document.getElementById("emailid").innerHTML="**number should be of 10 digit only";
        return false;
    }
   
    if(email.charAt(email.length-4)!='.' && (email.charAt(email.length-3)!='.') &&(isNaN(email))){
        document.getElementById("emailid").innerHTML="**position of. is invalid";
        return false;

    }
    if(password==""){
        document.getElementById("pass").innerHTML="**plz fill the password";
        return false;
    }
    
    if((password.length<5 )||(password.length>20)){
        document.getElementById("pass").innerHTML="** paasword length should be between 6 to 20 letter";
        return false;
    }
    else {
        document.getElementById("emailid").innerHTML="";

      alert("you have logged in successfully!")
    }
}