window.onload = () => {
    document.body.classList.remove("container");

    // Music Button Functionality
    document.getElementById('musicButton').addEventListener('click', function () {
        let music = document.getElementById('bgMusic');
        if (music.paused) {
            music.play();
            this.innerText = "⏸ Pause Music";
        } else {
            music.pause();
            this.innerText = "🎶 Play Music";
        }
    });

    // Enable Sound on Button Click
    document.getElementById('enableAudio').addEventListener('click', function () {
        document.getElementById('bgMusic').play();
        this.style.display = 'none';
    });
};
