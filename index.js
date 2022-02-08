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
        document.getElementById("emailid").innerHTML="";
        document.getElementById("pass").innerHTML="**plz fill the password";
        return false;
    }
    
    if((password.length<5 )||(password.length>20)){
        document.getElementById("emailid").innerHTML="";
        document.getElementById("pass").innerHTML="** paasword length should be between 6 to 20 letter";
        return false;
    }
    else {
      alert("you have logged in successfully!")
    }
}

// fetch("https://login-signup.p.rapidapi.com/public/v1/login.php", {
// 	"method": "POST",
// 	"headers": {
// 		"content-type": "application/x-www-form-urlencoded",
// 		"origin": "http://127.0.0.1",
// 		"x-rapidapi-host": "login-signup.p.rapidapi.com",
// 		"x-rapidapi-key": "189d8a742bmsha1eeb71bb07aedcp114ec7jsn0c89da457c82"
// 	},
// 	"body": {
// 		"api_key": "394e9338b73a9f061b1968ceaa050a",
// 		"email": "test@email.com",
// 		"password": "Qwerty_12345"
// 	}
// })
// .then(response => {
// 	alert(response);
// })
// .catch(err => {
// 	console.error(err);
// });