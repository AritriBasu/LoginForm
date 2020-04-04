
function Login()
{
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value; 
    var f=0;
    for(let i=0;i<5;i++)
    {
    fetch("http://f309063d.ngrok.io/users")
    .then(function(resp){return resp.json();})
    .then(function(data){
      if((username==data[i].username)&&(email==data[i].email)&&(password==data[i].password))
         {
         alert("Login Successful!");
         f=1;
         break;
         } 
      });
    }//for
    if(f==0)   
      alert("Login failed!Try Agin!");
  }//func Login


