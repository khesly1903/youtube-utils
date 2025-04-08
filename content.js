function addSpeedButtons() {
    const video = document.querySelector('.html5-main-video');
    const player = document.querySelector('.html5-video-player');  
    if (!video || !player) return;
  
    let wrapper = document.getElementById('yt-speed-overlay');
    if (!wrapper) {
        wrapper = document.createElement('div');
        wrapper.id = 'yt-speed-overlay';
        wrapper.innerHTML = `
            <div id="speed-label">Speed: 1.00</div>
            <button id="speed-down">-</button>
            <button id="speed-up">+</button>
        `;
        document.body.appendChild(wrapper);

        wrapper.querySelector('#speed-up').onclick = () => {
            video.playbackRate = Math.min(video.playbackRate + 0.25, 4);
            updateSpeedLabel();
        };
        wrapper.querySelector('#speed-down').onclick = () => {
            video.playbackRate = Math.max(video.playbackRate - 0.25, 0.25);
            updateSpeedLabel();
        };
    }

    function updateSpeedLabel() {
        const speedLabel = document.querySelector('#speed-label');
        speedLabel.textContent = `Speed: ${video.playbackRate.toFixed(2)}`;
    }

    
    // cursor üstünde olsa bile autohide alıyor ve wrapper'ı gizliyor
    if (player.classList.contains('ytp-autohide')) {
        wrapper.style.display = 'none';  
    } else {
        wrapper.style.display = 'flex';  
    }

    
}

setInterval(addSpeedButtons, 500);
