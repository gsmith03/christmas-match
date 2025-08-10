let numberOfFaces = 5;

const theLeftSide = document.getElementById('leftSide');
const theRightSide = document.getElementById('rightSide');
const imageList = ['images/santa.png', 'images/reindeer.png', 'images/elf.png']

function generateFaces() {
    for(let i = 0; i < numberOfFaces; i++) {
       const face = document.createElement('img');
       face.src = imageList[0]

       const randImg = Math.floor(Math.random() * imageList.length);
       face.src = imageList[randImg];

       const randomTop = Math.floor(Math.random() * 400) + 1;
       const randomLeft = Math.floor(Math.random() * 400) + 1;

       face.style.top = randomTop + 'px';
       face.style.left = randomLeft + 'px';

        theLeftSide.appendChild(face);
    }

    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

    theLeftSide.lastChild.addEventListener('click', nextLevel);
    theLeftSide.addEventListener('click', gameOver);

}

function nextLevel(event) {
    event.stopPropagation();
    numberOfFaces += 5;

    while(theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }

    while(theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }

    generateFaces();

}

function gameOver() {
    alert('Game Over!');

    theLeftSide.lastChild.removeEventListener('click', nextLevel);
    document.body.removeEventListener('click', gameOver);
}

window.addEventListener('load', generateFaces);

document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
});

const musicPlayer = document.getElementById('jingle');

function playAudio() {
    musicPlayer.play();
}

function pauseAudio() {
    musicPlayer.pause();
}