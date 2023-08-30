'use-strick'
// Imports
import { q, qa, CLICK } from './website/ux/dom.js';
// variables
const body = q('body');
const html = q('html');
// Canvases
let CANVAS_ONE = q('.CANVAS_ONE');
let CTX_ONE = CANVAS_ONE.getContext('2d');

let videoCenter = q('.center_tools');
let videoContainer = q('.video_player_container');
let video = q('.video');
let videoAllElement = qa('.top_tools,.bottom_tools,.video_timeLine,.video_toolbar,.video_social,.video_hello,.hello_control,.hello_control *');
let timeDetailsLeft = q('.timeDetails_left');
let timeDetailsRight = q('.timeDetails_right');
let videoTimeLine = q('.video_timeLine');
let videoFollower = q('.timeLine_follower');
let video_control_button = q('.control_container');
let playIcon = q('.play_button');
let pauseIcon = q('.pause_button');
let video_mute_button = q('.video_mute');
let video_sound_button = q('.video_sound');
let video_increase_button = q('.video_increase');
let video_decrease_button = q('.video_decrease');
const text = 'Hello Sir,I am Friday';
const rightDoubleClick = q('.right_double_click');
const leftDoubleClick = q('.left_double_click');
let timeStatusAmountRight = q('.time_status_amount_right');
let timeStatusAmountLeft = q('.time_status_amount_left');
let timeStatusAmountCount = 0;
let bufferedAmount = q('.buffered_amount');
let nextVideoContainer = q('.nextvideo_player_container');
let previousVideoContainer = q('.previousvideo_player_container');
let clickAndHoldButton = q('.click_and_hold');
let checkMarkContainer = q('.checkMark_container'),
    layerContainer = q('.layer_container'),
    fullScreenContainer = q('.fullScreen_container');
let vcstartX, vcstartY, vcmoveX, vcmoveY;
let startX, startY, moveX, moveY;
let dragStartX,dragStartY,dragMoveX,dragMoveY;
let x, y;
let helloSearcherDiv = q('.hello_searcher_div');
let holdDetectionFuction, holdDetection;
let mouseIsDown = false;
video.load();
let media_container_elements = q('.media_container');

// Custom AddeventListner
class clickandholdhard {
    constructor(target, callback) {
        this.target = target;
        this.callback = callback;
        this.isHeld = false;
        this.activeHoldTimeoutId = null;

        ['mousedown', 'touchstart'].forEach((type) => {
            this.target.addEventListener(type, this._onHoldStart.bind(this));
        });

        ['mouseup', 'touchend'].forEach((type) => {
            this.target.addEventListener(type, this._onHoldEnd.bind(this));
        });

    }
    _onHoldStart() {
        this.isHeld = true;
        this.activeHoldTimeoutId = setTimeout(() => {
            if (this.isHeld) {

                this.callback();
            }

        }, 2000)
    }
    _onHoldEnd() {
        this.isHeld = false;
        clearTimeout(this.activeHoldTimeoutId);
    }
}
class clickandhold {
    constructor(target, callback) {
        this.target = target;
        this.callback = callback;
        this.isHeld = false;
        this.activeHoldTimeoutId = null;

        ['mousedown', 'touchstart'].forEach((type) => {
            this.target.addEventListener(type, this._onHoldStart.bind(this));
        });

        ['mouseup', 'touchend'].forEach((type) => {
            this.target.addEventListener(type, this._onHoldEnd.bind(this));
        });

    }
    _onHoldStart() {
        this.isHeld = true;
        this.activeHoldTimeoutId = setTimeout(() => {
            if (this.isHeld) {

                this.callback();
            }

        }, 1000)
    }
    _onHoldEnd() {
        this.isHeld = false;
        clearTimeout(this.activeHoldTimeoutId);
    }
}
class clickandholdsoft {
    constructor(target, callback) {
        this.target = target;
        this.callback = callback;
        this.isHeld = false;
        this.activeHoldTimeoutId = null;

        ['mousedown', 'touchstart'].forEach((type) => {
            this.target.addEventListener(type, this._onHoldStart.bind(this));
        });

        ['mouseup', 'touchend'].forEach((type) => {
            this.target.addEventListener(type, this._onHoldEnd.bind(this));
        });

    }
    _onHoldStart() {
        this.isHeld = true;
        this.activeHoldTimeoutId = setTimeout(() => {
            if (this.isHeld) {

                this.callback();
            }

        }, 500)
    }
    _onHoldEnd() {
        this.isHeld = false;
        clearTimeout(this.activeHoldTimeoutId);
    }
}


// Complex Functionalities 
let friday_test = () => {

    try {

        // const utterance = new SpeechSynthesisUtterance(text);
        // speechSynthesis.speak(utterance);

    } catch (e) {
        return console.log(e.message);
    }


}
const video_control_status = () => {

    videoAllElement.forEach((videoAllElements) => {
        let display = getComputedStyle(videoContainer).display;
        let hide = () => {

            videoAllElements.style.display = 'none';

        }

        videoAllElements.remove();
    })
}
const video_control = () => {

    // thumbnail.style.display = 'none';
    video.paused ? video.play() : video.pause();
    if (video.paused) {

        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';

    } else {

        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';

    }
}
const setTimeLinePosition = (e) => {

    let { currentTime, duration, audioTracks } = e.target;
    let timeLineWidth = videoTimeLine.clientWidth;
    // let react = videoTimeLine.getBoundingClientRect();

    let currentTimeLine = (e.clientX / timeLineWidth) * 100;
    videoFollower.style.width = `${parseFloat(currentTimeLine).toFixed()}%`;
    video.currentTime = (e.clientX / timeLineWidth) * video.duration;
    timeDetailsLeft.innerText = formatTime(video.currentTime);
    // console.log(video.currentTime);
    // console.log(currentTime);
    // console.log(video.audioTracks);
}
const formatTime = (time) => {
    let seconds = Math.floor(time % 60),
        minutes = Math.floor(time / 60) % 60,
        hours = Math.floor(time / 3600)

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;

    if (hours == 0) return `${minutes}:${seconds}`;
    return `${hours}:${minutes}:${seconds}`;

}
const hider = (e) => {

    videoAllElement.forEach((videoAllElements) => {
        
        videoAllElements.classList.toggle('please');
        
    });
    videoCenter.classList.toggle('all');
}
const videoContainerDblclick = (e) => {


    timeStatusAmountCount = 1;
    // Removing Elements 
    if (videoCenter.classList.contains('Nooo')) {
        // console.log('No handler');
    } else {
        videoAllElement.forEach((videoAllElements) => {
            videoAllElements.classList.remove('please');
        })
    }
    // Left Right 
    if (e.clientX < videoContainer.clientWidth / 2) {
        // if(leftDoubleClick.classList.contains('canHandle')){
            
        //     video.currentTime -= 10;
            
        // }
        video.currentTime -= 10;
        videoContainer.classList.add('overflower');
        videoAllElement.forEach((videoAllElements) => {
            videoAllElements.classList.add('please');
        });
        videoCenter.classList.add('all');
        leftDoubleClick.style.display = 'flex';
        // leftDoubleClick.addEventListener('click', () => {
        //     // console.log('Left Clicked');
        // })
    } else {
        
        // if(rightDoubleClick.classList.contains('canHandle')){
            
            
        // }
            video.currentTime += 10;
        
        videoContainer.classList.add('overflower');
        videoAllElement.forEach((videoAllElements) => {
            videoAllElements.classList.add('please');
        });
        videoCenter.classList.add('all');
        rightDoubleClick.style.display = 'flex';
        // rightDoubleClick.addEventListener('click', () => {
        //     // console.log('Right Clicked');
        // })
    }
    let dblClickCloser = () => {
        if (rightDoubleClick.classList.contains('continue') || leftDoubleClick.classList.contains('continue')) {

            // console.log('Continue');
            

        } else {

            videoCenter.addEventListener('click', hider);
            videoContainer.classList.remove('overflower');
            videoCenter.classList.remove('all');
            videoAllElement.forEach((videoAllElements) => {

                videoAllElements.classList.remove('please');

            });
            leftDoubleClick.style.display = 'none';
            rightDoubleClick.style.display = 'none';
            clearInterval(theInterval);
            leftDoubleClick.classList.add('canHandle');
            rightDoubleClick.classList.add('canHandle');
            
            timeStatusAmountCount = 0;
            if (e.clientX < videoContainer.clientWidth / 2) {
                timeStatusAmountLeft.innerText = '-10s';
            }
            else{
                timeStatusAmountRight.innerText = '+10s';
                
            }
        }    
        rightDoubleClick.classList.remove('continue')
        leftDoubleClick.classList.remove('continue')

    }
    videoCenter.classList.add('Nooo')
    videoCenter.removeEventListener('click', hider);
    let theInterval = setInterval(dblClickCloser, 800);
    // timeStatusAmountCount = 0;
}
const helloSearcherDivMover = (e) => {

    vcmoveX = e.touches[0].clientX - helloSearcherDiv.clientWidth;
    vcmoveY = e.touches[0].clientY - helloSearcherDiv.clientHeight;
    let x = e.touches[0].clientX - e.touches[0].offsetX;
    let y = e.touches[0].clientY - e.touches[0].offsetY;

    if (helloSearcherDiv.classList.contains('canMoveTimeLine')) {
        
        // console.log('You hold Hello Searcher for 1s');
        // console.log('Mission Acomplished');
        helloSearcherDiv.style.left = `${vcmoveX}px`;
        helloSearcherDiv.style.top = `${vcmoveY}px`;
        videoContainer.style.overflowX = 'hidden';
        helloSearcherDiv.style.zIndex = '1';
        
    }


}


// AddeventListner Initialization
new clickandholdhard(videoCenter, () => {

    videoCenter.classList.add('canMoveTimeLine')
    // console.log('You hold for 1s on VideoCenter');
    // timeLineMove();
    // videoCenter.classList.remove('canMoveTimeLine');
    // videoContainer.removeEventListener('touchmove',helloSearcherDivMover)


})
new clickandhold(helloSearcherDiv, () => {

    helloSearcherDiv.classList.add('canMoveTimeLine');
    media_container_elements.removeEventListener('touchmove',media_container_elements_touchMove_function);
    // media_container_elements.addEventListener('touchmove',helloSearcherDivMover);
    helloSearcherDiv.classList.add('center');
})
video.addEventListener('timeupdate', (e) => {

    let { currentTime, duration } = e.target;
    let timePercent = (currentTime / duration) * 100;
    videoFollower.style.width = `${timePercent}%`;
    timeDetailsLeft.innerText = formatTime(currentTime);
    for (let i = 0; i < video.buffered.length; i++) {
        if (video.buffered.start(video.buffered.length - 1 - i) < video.currentTime) {
            bufferedAmount.style.width = (video.buffered.end(video.buffered.length - 1 - i) / duration) * 100 + "%";
            break;
        }
    }
    // console.log(videoFollower.clientWidth);
    // console.log(bufferedAmount.clientWidth);
    // if(videoFollower.clientWidth > bufferedAmount.clientWidth){
        
    //     console.log('Loading');
    // }

});
video.addEventListener('loadeddata', (e) => {

    let { currentTime, duration } = e.target;
    timeDetailsRight.innerText = formatTime(duration);

})
videoTimeLine.addEventListener('pointerdown', (e) => {

    videoTimeLine.setPointerCapture(e.pointerId);
    setTimeLinePosition(e);
    // video.load();
    videoTimeLine.addEventListener('pointermove', setTimeLinePosition);
    videoTimeLine.addEventListener('pointerup', () => {
        videoTimeLine.removeEventListener('pointermove', setTimeLinePosition);
        // thumbnail.style.display = 'none';
        video.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';


    }, { once: true })


});
videoTimeLine.addEventListener('click', (e) => {

    // thumbnail.style.display = 'none';
    setTimeLinePosition(e);

})
checkMarkContainer.addEventListener('click', () => {

    console.log('checkMarkContainer Search Is in Development');

})
layerContainer.addEventListener('click', () => {

    console.log('Layer Search Is in Development');

})
fullScreenContainer.addEventListener('click', () => {

    try {

        videoContainer.requestFullscreen();

    } catch (e) { console.log(e); }

})
videoCenter.addEventListener('click', hider);
// videoContainer.addEventListener('dblclick', videoContainerDblclick)
videoContainer.addEventListener('dblclick', videoContainerDblclick)
videoCenter.addEventListener('touchstart', (e) => {

    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    // console.log('All things are set');
    // if(videoContainer.classList.contains('canMoveTimeLine')){

    //     videoCenter.classList.add('canMoveTimeLine');   
    //     console.log('Analised');

    // }

})
// videoCenter.addEventListener('touchmove', (e) => {

//     const timeLineMove = () => {

//         moveX = e.touches[0].clientX;
//         moveY = e.touches[0].clientY;
//         let videoContainerWidth = videoContainer.clientWidth;
//         let currentTimeLine;
//         currentTimeLine = (moveX / videoContainerWidth) * 100;
//         videoFollower.style.width = `${parseFloat(currentTimeLine).toFixed()}%`;
//         video.currentTime = (moveX / videoContainerWidth) * video.duration;
//         videoTimeLine.classList.add('hello_mode_video')
//         videoContainer.classList.add('hello_mode_video')

//     }
//     if (videoCenter.classList.contains('canMoveTimeLine')) {

//         timeLineMove();

//     }
//     if (startX + 100 < moveX) {

//         video.volume = '0.0';

//     }
//     else if (startX - 100 > moveX) {

//         video.style.filter = `brightness(100%)`;

//     }
//     if (startX + 100 < moveX || startX - 100 > moveX) {

//         if (startY + 100 < moveY || startY - 100 > moveY) {

//             // console.log('X To Y');
//         }

//     }
//     // Vary Vary Important
//     if(startY+100 < moveY || startY-100 > moveY){
//         if(startX+100 < moveX || startX-100 > moveX){

//             // console.log('Y To X');
//         }

//         let react = videoContainer.getBoundingClientRect();
//         let brightnessPercentBinary = (e.touches[0].clientY / videoContainer.clientHeight) * 10;
//         let contrastPercentBinary = (e.touches[0].clientY / videoContainer.clientHeight) * 10;
//         let volumePercentBinary = (e.touches[0].clientY / videoContainer.clientHeight) * 10;
//         let brightnessPercent = parseFloat(brightnessPercentBinary.toFixed());
//         let contrastPercent = parseFloat(brightnessPercentBinary.toFixed());
//         let volumePercent = parseFloat(volumePercentBinary.toFixed());

//         brightnessPercent > 0 ? localStorage.setItem('Console','Greateer') : brightnessPercent = 1;
//         brightnessPercent > 2 ? brightnessPercent = 2 : localStorage.setItem('Console','Less');
//         contrastPercent > 0 ? localStorage.setItem('Console','Greateer') : contrastPercent = 1;
//         contrastPercent > 2 ? contrastPercent = 1.5 : localStorage.setItem('Console','Less');
//         volumePercent > 0 ? localStorage.setItem('Console','Greateer') : volumePercent = 0;
//         volumePercent > 9 ? volumePercent = 9 : localStorage.setItem('Console','Less');

//         if (e.touches[0].clientX < videoContainer.clientWidth / 2) {

//             video.style.filter = `brightness(${brightnessPercent})`;


//         } else {

//             video.volume = `0.${volumePercent}`;

//         }     

//     }


// })
videoCenter.addEventListener('touchend', (e) => {

    videoCenter.classList.remove('canMoveTimeLine')
    // videoContainer.classList.remove('canMoveTimeLine');
    // mouseIsDown = false;
    // if(videoCenter.classList.contains('canMoveTimeLine')){

    //     // console.log('Good');
    //     videoCenter.classList.remove('canMoveTimeLine')
    //     videoContainer.addEventListener('touchmove',helloSearcherDivMover)

    // }else{

    //     // console.log('Hold For Some more time');

    // }

});
videoContainer.addEventListener('touchmove',helloSearcherDivMover)
videoContainer.addEventListener('touchend', (e) => {

    helloSearcherDiv.style.zIndex = '10';
    videoContainer.style.overflow = 'auto';
    helloSearcherDiv.classList.remove('canMoveTimeLine');
    videoTimeLine.classList.remove('hello_mode_video')
    videoContainer.classList.remove('hello_mode_video')
    // if(startX+100 < moveX || startX-100 > moveX){

    //     // console.log('XY On Touch End Direction');


    // }

});
rightDoubleClick.addEventListener('pointerdown', (e) => {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripples = document.createElement('span');
    ripples.classList.add('ripples');

    ripples.style.top = `${y}px`;
    ripples.style.left = `${x}px`;
    rightDoubleClick.appendChild(ripples);
    rightDoubleClick.style.background = '#FFFFFF4FBF';

    setTimeout(() => {
        ripples.remove();
    }, 500)

    timeStatusAmountCount++;
    timeStatusAmountRight.innerText = `+${10 * timeStatusAmountCount}s`;
    rightDoubleClick.classList.add('continue');
    video.currentTime += 10;


});
leftDoubleClick.addEventListener('pointerdown', (e) => {

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripples = document.createElement('span');
    ripples.classList.add('ripples');

    ripples.style.top = `${y}px`;
    ripples.style.left = `${x}px`;

    leftDoubleClick.appendChild(ripples);
    leftDoubleClick.style.background = '#FFFFFF4FBF';
    setTimeout(() => {
        ripples.remove();
    }, 500)
    timeStatusAmountCount++;
    leftDoubleClick.classList.add('continue');
    timeStatusAmountLeft.innerText = `-${10 * timeStatusAmountCount}s`;
    video.currentTime -= 10;

});
CLICK({ ELEMENT: body, FUNCTION: friday_test })
CLICK({ ELEMENT: video_control_button, FUNCTION: video_control })
CLICK({ ELEMENT: nextVideoContainer, FUNCTION: () => { console.log('Next Video but will use 10minutes add now!'); } })
CLICK({ ELEMENT: previousVideoContainer, FUNCTION: () => { console.log('Previous Video but will use 10minutes remove now!'); } })












// Canvas
window.onload = function() {
    
    //debug
    let hue = 0;
    const gui = new dat.GUI()
    const spectrume = {
        y:CANVAS_ONE.height/2,
        length: 0.05,
        amplitude: 10,
        frequency: 0.01
    }
    const strokeColor = {
        
        h: 200,
        s:50,
        l:50
        
    }
    const backgroundColor = {
        
        r:0,
        g:0,
        b:0,
        a:0.01
        
    }
    
    const spectrumeOS = gui.addFolder('spectrumeOS');
    spectrumeOS.add(spectrume, 'y', 0,CANVAS_ONE.height)
    spectrumeOS.add(spectrume, 'length', -0.01,0.09)
    spectrumeOS.add(spectrume, 'amplitude', -50, 50)
    spectrumeOS.add(spectrume, 'frequency', 0.01,1)
    spectrumeOS.open();
    const stroke = gui.addFolder('stroke');
    stroke.add(strokeColor,'h',0,255);
    stroke.add(strokeColor,'s',0,50);
    stroke.add(strokeColor,'l',0,50);
    stroke.open();
    const background = gui.addFolder('background');
    background.add(backgroundColor,'r',0,255);
    background.add(backgroundColor,'g',0,255);
    background.add(backgroundColor,'b',0,255);
    background.add(backgroundColor,'a',0.01,1);
    background.open();
    
    let increment = spectrume.frequency;
    const animate = ()=>{
        
        CTX_ONE.fillStyle = `rgba(${backgroundColor.r},${backgroundColor.g},${backgroundColor.b},${backgroundColor.a})`;
        CTX_ONE.fillRect(0,0,CANVAS_ONE.width,CANVAS_ONE.height);
        
        requestAnimationFrame(animate);
        CTX_ONE.beginPath();
        
        CTX_ONE.moveTo(0,CANVAS_ONE.height/2)
        for(let i = 0;i<CANVAS_ONE.clientWidth;i++){
            
            CTX_ONE.lineWidth = 2;
            CTX_ONE.lineTo(i,spectrume.y + Math.sin(i * spectrume.length + increment) * spectrume.amplitude);
            
        }
        CTX_ONE.strokeStyle = `hsl(${hue},${strokeColor.s}%,${strokeColor.l}%)` ;
        CTX_ONE.stroke();
        
        increment += spectrume.frequency;
        hue++;
    }
    animate();



}



let media_container_elements_touchMove_function = (e)=>{
    
    dragMoveX = e.touches[0].clientX,
    dragMoveY = e.touches[0].clientY;
    
    helloSearcherDiv.style.width = `${dragMoveX}px`;
    helloSearcherDiv.style.height = `${dragMoveY}px`;
    
    // console.log(dragMoveX);
    // console.log(dragMoveY);
}

// Drag for Search 
media_container_elements.addEventListener('touchstart',(e)=>{
    dragStartX = e.touches[0].clientX;
    dragStartY = e.touches[0].clientY;
})
media_container_elements.addEventListener('touchmove',media_container_elements_touchMove_function);




// let autoplay = setInterval(()=>{
//     videoAllElement.forEach((Elements)=>{
//         Elements.classList.add('please');
//     })
//     videoCenter.classList.add('all');
// },2000);
// media_container_elemeants.addEventListener('click',()=>{
//     clearInterval(autoplay);
    
// });
