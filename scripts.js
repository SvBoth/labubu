document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('reveal-button');
    const surpriseMessage = document.getElementById('surprise-message');
    const surpriseAudio = document.getElementById('surprise-audio');

    revealButton.addEventListener('click', () => {
        surpriseMessage.classList.remove('hidden');
        revealButton.classList.add('hidden');
        surpriseAudio.play();
    });
});
