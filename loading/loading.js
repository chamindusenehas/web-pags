
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    const progressBar = document.querySelector('.loader-progress-bar');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        progressBar.style.width = progress + '%';
        
        if(progress >= 100) {
            clearInterval(interval);
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800);
        }
    }, 300);
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.loader').style.display = 'flex';
});