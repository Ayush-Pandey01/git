function validate()
    {
        var username=document.getElementById("uname");
        var password=document.getElementById("pass");
        
        if(username.value.trim() ==""){
            alert("Please Enter the user name");
            return false;
        }
        else if(username.value.trim() !="Ayush_py"){
            alert("Invalid Username");
            return false;
        }
        else if (password.value =="")
        {
            alert("Please enter the  Password");
            return false;
        }
        else if (password.value !="Ayush@2077")
        {
            alert("Incorrect Password");
            return false;
        }
        

        else{
             return true;
        }
    }