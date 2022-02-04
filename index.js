function Validation(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    if(email==""){
        document.getElementById("emailid").innerHTML="**plz fill the email id or phone number";
        return false;
    }
    
    
    if(email.indexOf('@')<=0){
        document.getElementById("emailid").innerHTML="**position of @ is invalid";
        return false;
    }
      

    
    if(email.charAt(email.length-4)!='.' && (email.charAt(email.length-3)!='.')){
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
        alert("Congratulations, you have logged in successfully!")
}
    
    

    
}