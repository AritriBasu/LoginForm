function Login()
{
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value; 
    var f=0;
    
    fetch("https://6cda39c5.ngrok.io/users")
    .then(function(resp){return resp.json();})
    .then(function(data){
    for(let i=0;i<5;i++)
    {
      if((username==String(data[i].username))&&(email==String(data[i].email))&&(password==String(data[i].password)))
         {
         alert("Login succesful!");
         f=1;
         break;
         } 
     }//for
    });
   if(f==0)   
      alert("Login failed!Try Agin!");
  }//func Login
