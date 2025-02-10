const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = [];
const particleCount = 80;

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.velocityX = Math.random() * 1.2 - 0.5;
        this.velocityY = Math.random() * 1.2 - 0.5;
        this.size = Math.random() * 2.5 + 1;
        this.hue = 180 + Math.random() * 100;
        this.alpha = Math.random() * 3.5 + 0.2;
    }

    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        
        if (this.x < -this.size || this.x > canvas.width + this.size || 
            this.y < -this.size || this.y > canvas.height + this.size) {
            this.reset();
        }
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = `hsla(${this.hue}, 50%, 30%, ${this.alpha})`;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 5;
    }
}


for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate);
}

animate();