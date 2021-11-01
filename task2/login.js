function validate(event)
{
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    if(username=="karthika" && password=="123")
    {
        alert("login successfull")
        return false;
    }
    else{
        alert("login failed");
    }
}