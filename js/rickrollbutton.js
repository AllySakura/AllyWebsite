//JavaScript for Button
  document.getElementById('buttonClick').addEventListener('click', function() {
  let audio = document.getElementById('rickSound');
  audio.play();
});

document.getElementById('stopButton').addEventListener('click', function() {
  let audio = document.getElementById('rickSound');
  audio.pause();
  audio.currentTime = 0; // Resets the audio and pauses
});
