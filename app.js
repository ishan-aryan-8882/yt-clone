var audio = new Audio('taur.mp3');

let navButton1 = document.querySelector(".song-box .song");
navButton1.addEventListener("click", () => {
  document.querySelector(".song-box .song").classList.add("backg");
  document.querySelector(".song-box .video").classList.remove("backg");
});
let navButton2 = document.querySelector(".song-box .video");
navButton2.addEventListener("click", () => {
  document.querySelector(".song-box .video").classList.add("backg");
  document.querySelector(".song-box .song").classList.remove("backg");
});

let laptop = document.querySelector(".fa-laptop");
laptop.addEventListener("click", () => {
  laptop.classList.toggle("fa-headphones");
});

let likeBtn = document.querySelector(".fa-thumbs-up");
let disLikeBtn = document.querySelector(".fa-thumbs-down");

likeBtn.addEventListener("click", () => {
  likeBtn.classList.toggle("fa-solid");
  likeBtn.classList.toggle("fa-regular");

  disLikeBtn.classList.remove("fa-solid");
  disLikeBtn.classList.add("fa-regular");
});

disLikeBtn.addEventListener("click", () => {
  disLikeBtn.classList.toggle("fa-solid");
  disLikeBtn.classList.toggle("fa-regular");

  likeBtn.classList.remove("fa-solid");
  likeBtn.classList.add("fa-regular");
});

let masterPlay = document.querySelector(".fa-circle-play");
let image = document.querySelector(".image");

masterPlay.addEventListener("click", () => {
  masterPlay.classList.toggle("fa-circle-pause");
  
  if (masterPlay.classList.contains("fa-circle-pause")) {
    image.classList.remove("op");
    audio.play();
    
  } else {
    image.classList.add("op");
    audio.pause();
  }
});

function updateSeekBar() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    
        const progress = (currentTime / duration) * 100;
        seekBar.value = progress;
}

audio.addEventListener("timeupdate", updateSeekBar);

seekBar.addEventListener("input", function() {
    const seekTime = (audio.duration / 100) * seekBar.value;
    audio.currentTime = seekTime;
});
