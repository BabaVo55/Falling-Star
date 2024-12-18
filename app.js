const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let mouseX = null;
let mouseY = null;

const droppingImages = [];
const images = [
    "imgs/gojo.jpg",
    "imgs/haikyuu.jpg",
    "imgs/kakashi.jpg",
    "imgs/killua.jpg",
    "imgs/naruto.jpg",
    "imgs/saitama.jpg",
    "imgs/zoro.jpg",
];

class FallingNindo {
    constructor(size, image) {
        this.size = size;
        this.x = Math.random() * (canvas.width - size); // Random starting X position
        this.y = -size; // Start above the screen
        this.speedY = 1 + Math.random() * 3; // Random falling speed
        this.image = new Image();
        this.image.src = image;

        this.image.onload = () => {
            this.loaded = true;
        };
        this.loaded = false;
    }

    drop() {
        this.y += this.speedY; // Increment Y position to make the image fall
    }

    draw() {
        if (this.loaded) {
            ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
        }
    }
}

function spawnImage() {
    const size = 50 + Math.random() * 50; // Random size between 50 and 100
    const image = images[Math.floor(Math.random() * images.length)];
    droppingImages.push(new FallingNindo(size, image));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw each image
    droppingImages.forEach((image, index) => {
        image.drop();
        image.draw();

        // Remove images that are off-screen
        if (image.y > canvas.height) {
            droppingImages.splice(index, 1);
        }
    });

    requestAnimationFrame(animate);
}

// Spawn images at random intervals
setInterval(() => {
    spawnImage();
}, Math.random() * 3000 + 500); // Random interval between 0.5s and 3s

animate();




// ctx.fillStyle = 'blue';
// ctx.fillRect(20, 20, 150, 100);

// // Draw a circle
// ctx.beginPath();
// ctx.arc(300, 70, 50, 0, Math.PI * 2); // Center (300, 70), radius 50
// ctx.fillStyle = 'green';
// ctx.fill();

// // Draw a line
// ctx.beginPath();
// ctx.moveTo(50, 200); // Starting point
// ctx.lineTo(200, 300); // Ending point
// ctx.strokeStyle = 'black';
// ctx.lineWidth = 3;
// ctx.stroke();