var userFiNam = localStorage.getItem('FirstName');
var userLaNam = localStorage.getItem('LasstName');

var hedtit = document.querySelector('h1');
var subtit = document.querySelector('h3');
function headerTitle()
{
    document.getElementById('userName').innerHTML = `${userFiNam} ${userLaNam}`;
    // title.style.transform = 'translate(32vw, 30vh)';
    hedtit.style.transform = 'scale(1)';
    subtit.style.top = '53vh';
    subtit.style.filter = 'opacity(1)';
    subtit.style.transform = 'scale(1)';
}

var changePoster = document.getElementById('playPoster');
var playSong = document.getElementById('playSong');
function playSongs(val)
{
    changePoster.src = `../assests/images/${val}.jpg`;
    playSong.src = `../assests/audios/${val}.mp3`;
    playSong.controls = 'true';
    playSong.autoplay = 'true';
    if(val==1)
    {
        document.querySelector('#songTit').innerHTML = 'Ee Raathale - Raadhe Shyam';
    }
    else if(val==2)
    {
        document.querySelector('#songTit').innerHTML = 'Naatu Naatu - RRR';
    }
    else if(val==3)
    {
        document.querySelector('#songTit').innerHTML = 'Masteru Masteru - Sir';
    }
    else if(val==4)
    {
        document.querySelector('#songTit').innerHTML = 'Srivalli - Pushpa';
    }
    else if(val==5)
    {
        document.querySelector('#songTit').innerHTML = 'Dheera Dheera - KGF';
    }
    else
    {
        document.querySelector('#songTit').innerHTML = 'Pilla Padesave - Love Today';
    }
}

function logOut()
{
    document.getElementById('logout').href = '../index.html';
}