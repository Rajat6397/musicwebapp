const fileUpload = document.getElementById('file-upload');
        const audioPlayer = document.getElementById('audio-player');
        const playButton = document.getElementById('play-btn');
        const pauseButton = document.getElementById('pause-btn');
        const seekBar = document.getElementById('seek-bar');

        fileUpload.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const fileURL = URL.createObjectURL(file);
                audioPlayer.src = fileURL;
                audioPlayer.style.display = 'block';
            }
        });

        playButton.addEventListener('click', () => {
            audioPlayer.play();
        });

        pauseButton.addEventListener('click', () => {
            audioPlayer.pause();
        });

        // Update the seek bar as the song plays
        audioPlayer.addEventListener('timeupdate', () => {
            const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            seekBar.value = progress;
        });

        // Allow seeking through the song
        seekBar.addEventListener('input', () => {
            const seekTime = (seekBar.value / 100) * audioPlayer.duration;
            audioPlayer.currentTime = seekTime;
        });