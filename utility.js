function delay(){
        const PauseTime = 1000 - SpeedSlider.value;
        return new Promise((resolve)=>{
                setTimeout(resolve,PauseTime);
        });
}


const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Function to play a sound
function playSound(frequency, duration) {

    const oscillator = audioContext.createOscillator(); // Generate sound waves
    oscillator.type = "sine"; // Type of wave: "sine", "square", etc.
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime); // Set frequency

    oscillator.connect(audioContext.destination); // Connect to output (speakers)

    oscillator.start(); // Start playing the sound
    oscillator.stop(audioContext.currentTime + duration / 1000); // Stop after duration (in ms)
}