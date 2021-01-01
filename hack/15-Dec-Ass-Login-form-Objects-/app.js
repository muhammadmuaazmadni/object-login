
var arr = [];

function signUpForm() {
    let name = document.getElementById("names").value;
    let email = document.getElementById("emails").value;
    let gender = document.getElementById("gender").value;
    let number = document.getElementById("numbers").value;
    let nationality = document.getElementById("Nationality").value;
    let passwords = document.getElementById("passwords").value;

    let alreadyExist = false;
    var user = {
        name: name,
        email: email,
        gender: gender,
        number: number,
        nationality: nationality,
        passwords: passwords,
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].email === email) {
            alreadyExist = true;
            break;
        }
    }



    if (alreadyExist) {
        alert('This email address already exist')

    }
    else {
        arr.push(user);
        console.log(arr);
        // localStorage.setItem(email, JSON.stringify(user));
        localStorage.setItem("userData", JSON.stringify(arr));
        alert("Sign Up successfully")
        document.getElementById("names").value = "";
        document.getElementById("emails").value = "";
        document.getElementById("gender").value = "";
        document.getElementById("numbers").value = "";
        document.getElementById("Nationality").value = "";
        document.getElementById("passwords").value = "";
        // window.location.href = "signin.html";
    }

    return false;
}

var previousData = JSON.parse(localStorage.getItem("userData"));
;

function LoginForm() {

    let userNameS = document.getElementById("loginEmail").value;
    let passwordS = document.getElementById("loginPass").value;
    let isFound = false;

    for (let i = 0; i < previousData.length; i++) {
        if (previousData[i].email === userNameS) {

            isFound = i;
            localStorage.setItem('newSigninData', JSON.stringify(previousData[i]));
            break;
        }
    }
    if (previousData[isFound].passwords === passwordS) {
        alert("signed in succesfully");
        window.location.href = "profile.html"
    }
    else {
        alert("wrong password or email");
    }


    return false;
}


let currentuser = JSON.parse(localStorage.getItem("newSigninData"));
if (currentuser) {
    document.getElementById("NameP").innerHTML = currentuser.name;
    document.getElementById("EmailP").innerHTML = currentuser.email;
    document.getElementById("GenderP").innerHTML = currentuser.gender;
    document.getElementById("nationalityP").innerHTML = currentuser.nationality;
    document.getElementById("NumberP").innerHTML = currentuser.number;
}