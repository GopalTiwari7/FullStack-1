function validateFirstName(){
    var fName = document.getElementById("firstName").value;
    var re1 = /^[A-Za-z\s\'\-']{2,15}$/;

    if(re1.test(fName)){
        document.getElementById("firstNamePrompt").style.color = "green";
        document.getElementById("firstNamePrompt").innerHTML = "<strong>valid</strong>";
        return true;
    }
    else{
        document.getElementById("firstNamePrompt").style.color = "red";
        document.getElementById("firstNamePrompt").innerHTML = "<strong>enter 2-15 chars</strong>";
        return false;
    }
}

function validateLastName(){
    var lName = document.getElementById("lastName").value;
    var re2 = /^[A-Za-z\s\'\-']{2,25}$/;

    if(re2.test(lName)){
        document.getElementById("lastNamePrompt").style.color = "green";
        document.getElementById("lastNamePrompt").innerHTML = "<strong>valid</strong>";
        return true;
    }
    else{
        document.getElementById("lastNamePrompt").style.color = "red";
        document.getElementById("lastNamePrompt").innerHTML = "<strong>enter 2-25 chars</strong>";
        return false;
    }
}
function validatePhone(){
    var phone = document.getElementById("Phone").value;
    var re3 = /^[0-9]{10}$/;

    if(re3.test(phone)){
        document.getElementById("phonePrompt").style.color = "green";
        document.getElementById("phonePrompt").innerHTML = "<strong>valid</strong>";
        return (true);
    }
    else{
        document.getElementById("phonePromot").style.color = "red";
        document.getElementById("phonePromot").innerHTML = "<strong> enter mobile number</strong>";
        return (false);
    }
}