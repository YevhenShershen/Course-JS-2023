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

  function updateVideoProgress(){
    progressInput.value = (video.currentTime / video.duration) * 100;
    let minutes = Math.floor(video.currentTime / 60)
    if(minutes < 10) minutes = "0" + minutes
    let seconds = Math.floor(video.currentTime % 60)
    if(seconds < 10) seconds = "0" + seconds
    videoProgress.innerHTML = `${minutes} : ${seconds}`
  }

  function init(){
    console.log("start")
    playPauseButton.addEventListener("click", playPauseClicked)
    video.addEventListener("play", updatePlayPauseIcon)
    video.addEventListener("pause", updatePlayPauseIcon)
    video.addEventListener("pause", updatePlayPauseIcon)
    muteButton.addEventListener("click", muteButtonClicked)
    video.addEventListener("timeupdate", updateVideoProgress)

  }


  window.onload = init
})(window, document)

