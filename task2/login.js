function validate(event)
{
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    if(username=="karthika" && password=="123")
    {
        window.open("http://127.0.0.1:8887/task2/admin.html")
    }
    else{
        alert("login failed");
    }
}
