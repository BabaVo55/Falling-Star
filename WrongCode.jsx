// const canvas = document.getElementByName(canvas)
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

const fallTimer = Math.floor(Math.random() * 3)
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


class FallingNindo{
    constructor(size, x, y, image){
        this.size = size;
        this.x = Math.floor(Math.random() * canvas.width)
        this.y = 0
        this.speedX = speedX;
        this.speedY = speedY;
        this.image = new Image();
        this.image.src = image;

        this.image.onload = () => {
            this.loaded = true
        }
        this.loaded = false;
    }
    drop(){
        this.y =+ fallTimer
    }
}

function init(){
    for (let i = 0; i < Infinity; i++){
        const size = 100 + Math.random() * 20;
        const x = Math.random() * (canvas.width - size); // Random X position
        const y = Math.random() * (canvas.height - size); // Random Y position

        const image = images[Math.floor(Math.random() * images.length)];
        droppingImages.push(new FallingNindo(size, x, y, image))
    }
}

function animate() {
    ctx(0, 0, canvas.width, canvas.height){
        droppingImages.forEach((image) => {
            image.drop()
        })
        requestAnimationFrame(animate)
    }
}