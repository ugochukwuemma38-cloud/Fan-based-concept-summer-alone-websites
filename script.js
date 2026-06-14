console.log("script connected");

//Tracklist//
const trackNames = [
 "Am actually done with myself",
 "Heaven interdule",
 "That 80's party",
 "333"
];

const trackFiles = [
 "Donewithmyself.m4a",
 "Interdule.m4a",
 "that80sparty.m4a",
 "333.m4a"
];



//Grab elements from page//
const trackButtons = document.querySelectorAll(".music-toggler button");
const playPauseBtn = document.querySelector("#playPauseBtn");
const shuffleBtn = document.querySelector("#shuffleBtn");
const playerTrackName = document.querySelector("#trackNameSpan");

 
//Audio-player//
const audio = new Audio();
let currentTrackIndex = 0;
let isPlaying = false;


//functions//
function playTrack(index){
 currentTrackIndex = index;
 audio.src = trackFiles[index];
 audio.play();
  playerTrackName.textContent = trackNames[index];
  isPlaying = true;
}

//tracklist-button//
trackButtons. forEach(
 function(button, index) {
  button.addEventListener("click",
   function() {
    playTrack(index)
   }
  );
 }
);


playPauseBtn.addEventListener("click",
function(){
 if(isPlaying) {
  audio.pause()
  isPlaying = false
  playPauseBtn.textContent = "play";
 } else {
  audio.play()
  isPlaying = true
 playPauseBtn.textContent = "pause";
 }
}
);


//*shufflebtn//
shuffleBtn.addEventListener("click",
function() {
 let randomIndex = Math.floor(Math.random() * trackNames.length);
 playTrack(randomIndex);
}
);