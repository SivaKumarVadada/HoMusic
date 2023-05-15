var hedtit = document.getElementById('maiHead');
var subtit = document.getElementById('subHead');
function headerTitle()
{
    hedtit.style.transform = 'scale(1)';
    subtit.style.top = '53vh';
    subtit.style.filter = 'opacity(1)';
    subtit.style.transform = 'scale(1)';
}

var loginCont = document.getElementById('loginContainer');
function logOut()
{
    loginCont.style.display = 'flex';
}
var setTimeLogin = setTimeout(logOut, 5000);


// Login
function checkLogInfo()
{
    var signEmilPhone = window.localStorage.getItem('EmilPhone');
    var signPassWords = window.localStorage.getItem('PassWords');
    var wrngPasswords = document.querySelector('p');
    var formSubVerify = document.querySelector('form');
    var inpVal = document.querySelectorAll('input');

    var LognEmilPhone = inpVal[0].value;
    var LognPassWords = inpVal[1].value;

    if(signEmilPhone!=LognEmilPhone && signPassWords!=LognPassWords)
    {
        inpVal[0].style.border = '2px solid red';
        inpVal[1].style.border = '2px solid red';
        wrngPasswords.innerHTML = 'Wrong email and Wrong password'
    }
    else if(signEmilPhone!=LognEmilPhone && signPassWords==LognPassWords)
    {
        inpVal[0].style.border = '2px solid red';
        wrngPasswords.innerHTML = 'Wrong email or mobile number'
    }
    else if(signEmilPhone==LognEmilPhone && signPassWords!=LognPassWords)
    {
        inpVal[1].style.border = '2px solid red';
        wrngPasswords.innerHTML = 'Wrong password'
    }
    else
    {
        inpVal[2].type = 'submit';
        formSubVerify.action = './html/home.html';
    }
}

var passViHi = document.querySelectorAll('input');
function passView()
{
    document.querySelector('img').src = './assests/images/passView.png';
    passViHi[1].type = 'text';
}
function passHide()
{
    document.querySelector('img').src = './assests/images/passHide.png';
    passViHi[1].type = 'password';
}