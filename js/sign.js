var inpVal = document.querySelectorAll('input');
var selVal = document.querySelectorAll('select');
var forVal = document.querySelector('form');
console.log(inpVal)
function signUserInfo()
{
    var FirstName = inpVal[0].value;
    window.localStorage.setItem('FirstName', FirstName);
    var LasstName = inpVal[1].value;
    window.localStorage.setItem('LasstName', LasstName);
    var EmilPhone = inpVal[2].value;
    window.localStorage.setItem('EmilPhone', EmilPhone);
    var PassWords = inpVal[3].value;
    window.localStorage.setItem('PassWords', PassWords);
    var BirthDate = selVal[0].value;
    window.localStorage.setItem('BirthDate', BirthDate);
    var BirthMnth = selVal[1].value;
    window.localStorage.setItem('BirthMnth', BirthMnth);
    var BirthYear = selVal[2].value;
    window.localStorage.setItem('BirthYear', BirthYear);

    forVal.action = '../index.html';
}
function genderVal(a)
{
    window.localStorage.setItem('UsrGender', a);
}