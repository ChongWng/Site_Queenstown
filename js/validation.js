function validateForm() {
    var name = document.forms["myForm"]["fname"].value;
    var surname = document.forms["myForm"]["lname"].value;
    var email = document.forms["myForm"]["email"].value;
	var agree = document.forms["myForm"]["checkAgree"].checked;
    var patt = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");

    var result = true;

    if (name == null || name == "") {
		alert("Name must be filled out");
		result = false;
    }
    else if(name.length < 3)
    {  
		alert("Name must contain at least 3 letters");
       	result = false;
    } 

    if (surname == null || surname == "") {
		alert("Surname must be filled out");
		result = false;
    }
    else if(surname.length < 5)
    {  
    	alert("Surname must contain at least 5 letters");
       	result = false;
    } 

    if (email == null || email == "") {
        alert("Email address must be filled out");
         result = false;
    }
    else if (patt.test(email) != true ) {
        alert("You have entered a wrong email format");
       result = false;
    }

    if (agree != true) {
        alert("You must agree with the term of service");
         result = false;
    }

    return result;
}