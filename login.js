

var users=
[
    {
        username:"aritri",
        email:"aritri.basu2019@vitstudent.ac.in",
        password:"aritri",
    },

    {
        username:"kashish",
        email:"kashish.mittal2019@vitstudent.ac.in",
        password:"aritri",
    },

    {
        username:"elio",
        email:"elio.jordan2019@vitstudent.ac.in",
        password:"aritri",
    },
    {
        username:"anukriti",
        email:"anukriti.verma2019@vitstudent.ac.in",
        password:"aritri",
    },
    {
        username:"kaustubh",
        email:"kaustubh.shrivastava2019@vitstudent.ac.in",
        password:"aritri",
    }
];

function Login()
{
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value; 
    var u=0,e=0,p=0;
    for(var i=0;i<users.length;i++)
    {
        if (username==users[i].username)
        {
            u=1;
            if(email==users[i].email)
            {
                e=1;
                if(password==users[i].password)
                p=1;
            }
        }
    }//for
    if((u==1)&&(e==1)&&(p==1))
    {
        alert("Login successful!!");
    }
    else if(u==0)
       alert("Enter correct username!");
    else if(e==0)
        alert("Enter correct email!");
    else 
        alert("Enter correct password!");
}//func