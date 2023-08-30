var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var myAudio = document.querySelector('audio');


// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
var source = audioCtx.createMediaElementSource(myAudio);

// Create a gain node
var gainNode = audioCtx.createGain();

// Create variables to store mouse pointer Y coordinate
// and HEIGHT of screen
var CurY;
var HEIGHT = window.innerHeight;

// Get new mouse pointer coordinates when mouse is moved
// then set new gain value

document.onmousemove = updatePage;

function updatePage(e) {
    CurY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

    gainNode.gain.value = CurY/HEIGHT;
}

// connect the AudioBufferSourceNode to the gainNode
// and the gainNode to the destination, so we can play the
// music and adjust the volume using the mouse cursor
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
