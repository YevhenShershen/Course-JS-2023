(function(window, document){

  const video = document.getElementById("video");
  const playPauseButton = document.getElementById("play-pause");
  const progressInput = document.getElementById("progress-input");
  const videoProgress = document.getElementById("video-progress");
  const muteButton = document.getElementById("mute");
  const videoControls = document.getElementById("controls");
  const videoContainer = document.getElementById("video-container");
  const fullscreenButton = document.getElementById("fullscreen");

  function playPauseClicked(){
    if(video.paused){
      video.play()
    }else{
      video.pause()
    }
  }

  function updatePlayPauseIcon(){
    if(video.paused){
      playPauseButton.innerHTML = '<i class="fa fa-play"></i>'
    }else{
      playPauseButton.innerHTML = '<i class="fa fa-pause"></i>'
    }
  }

  function muteButtonClicked(){
    video.muted = !video.muted;
    if(video.muted){
      muteButton.innerHTML = '<i class="fa fa-volume-mute"></i>'
    }else{
      muteButton.innerHTML = '<i class="fa fa-volume-up"></i>'
    }
  }

  function init(){
    console.log("start")
    playPauseButton.addEventListener("click", playPauseClicked)
    video.addEventListener("play", updatePlayPauseIcon)
    video.addEventListener("pause", updatePlayPauseIcon)
    video.addEventListener("pause", updatePlayPauseIcon)
    muteButton.addEventListener("click", muteButtonClicked)
  }


  window.onload = init
})(window, document)

