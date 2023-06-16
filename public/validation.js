var x=document.getElementById("l");
var y=document.getElementById("s");
var z=document.getElementById("b");
function signup() {
    x.style.left="-300px";
    y.style.left="0px";//contols the horizontal movement
    z.style.left="160px";
}
function login() {
    x.style.left="10px";
    y.style.left="450px";
    z.style.left="0";
}

// This is validation at client side i.e Browser

//Final :-

function validateForm(formName) {
    //event.p
    reventDefault(); // Prevent default form submission behavior
    var returnval = true; // Assuming it is true

    if (formName === 'loginF') {
        var name = document.forms['loginF']['fname'].value;
        var pass = document.forms['loginF']['fpass'].value;


        if (name.length < 3) {
            seterror('name', '*Length of name is too short');
            returnval = false;
        }

        if (pass.length !== 8) {
            seterror('pass', '*Password should be of 8 characters');
            returnval = false;
        }

        if (pass[0] !== pass[0].toUpperCase()) {
            seterror('pass', '*First letter should be capital');
            returnval = false;
        }
    } else if (formName === 'signupF') {
        var sname = document.forms['signupF']['sname'].value;
        var susn = document.forms['signupF']['susn'].value;
        var spass = document.forms['signupF']['spass'].value;

        var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        clearErrors();

        if (sname.length < 3) {
            seterror('sname', '*Length of name is too short');
            returnval = false;
        }

        if (susn.length !== 10) {
            seterror('susn', '*USN should be of 10 characters');
            returnval = false;
        }

        if (specialChars.test(sname)) {
            seterror('sname', '*Name should not contain special characters');
            returnval = false;
        }

        if (specialChars.test(spass)) {
            seterror('spass', '*Password should not contain special characters');
            returnval = false;
        }
    }

    console.log('returnval:', returnval);

    if (returnval == true) {
        window.location = "http://localhost:3000/login";
    }
    return returnval;
}

function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let i of errors){
        i.innerHTML ="";
    }
}

function seterror(id, error) {
    // Sets error inside tag of id
    var element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

    

  