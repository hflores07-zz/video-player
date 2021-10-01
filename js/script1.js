const $video =document.querySelector('video')
const $play =document.querySelector('#play')
const $pause =document.querySelector('#pause')
const $backward=document.querySelector('#backward')
const $forward=document.querySelector('#forward')

$play.addEventListener('click',handlePlay)
$pause.addEventListener('click',handlePause)
$backward.addEventListener('click',handleBackward)
$forward.addEventListener('click',handleFordward)

// Esto se puede hacer con un if o con un ciclo? 

function handlePlay(a){
    $video.play()
    $play.hidden=true;
    $pause.hidden=false;    
}

function handlePause(){
    $video.pause()
    $play.hidden=false;
    $pause.hidden=true;
    
}

function handleBackward(){
    $video.currentTime=$video.currentTime-10;
}
function handleFordward(){
    $video.currentTime=$video.currentTime+10;
}

const $progress= document.querySelector('#progress') 

$video.addEventListener('loadedmetadata',handleLoaded)
$video.addEventListener('timeupdate',handleTimeupdate)

function handleLoaded(){
    
    $progress.max= $video.duration
}

function handleTimeupdate(){
    $progress.value=$video.currentTime;
}

$progress.addEventListener('input',handleInput)

function handleInput(){
    $video.currentTime=$progress.value;
}