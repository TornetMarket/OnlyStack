// Get references to the button and audio element
const restartButton = document.getElementById("restartButton");
const audio = document.getElementById("audio");

// Function to play the audio
function playAudio(song) {
    audio.src = song; // Set the audio source to the passed song
    audio.play(); // Play the song
}

// Event listener for the restart button click
restartButton.addEventListener("click", function () {
    // If game is not in progress (this can be adjusted based on game state logic)
    let gameInProgress = false; // Adjust this as needed based on your game's state

    // Play the first song when the button is clicked
    if (!gameInProgress) {
        playAudio("wet.mp3"); // Play the wet.mp3 song first
    }

    // Listen for the end of the first song, then switch to the second song
    audio.addEventListener("ended", function () {
        if (!gameInProgress) {
            playAudio("dry.mp3"); // Play the dry.mp3 song after the first one ends
        }
    });
});