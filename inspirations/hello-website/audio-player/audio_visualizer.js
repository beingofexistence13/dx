window.onload = () => {
  const canvas = document.querySelector('#canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  //debug
  const gui = new dat.GUI()
  class Microphone {
 constructor(fftSize) {
this.initialized = false
navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
    this.audioContext = new AudioContext()
    this.microphone = this.audioContext.createMediaStreamSource(stream)
    this.analyser = this.audioContext.createAnalyser()
    this.analyser.fftSize = fftSize
    const bufferlength = this.analyser.frequencyBinCount
    this.dataArray = new Uint8Array(bufferlength)
    this.microphone.connect(this.analyser)
    this.initialized = true
}.bind(this)).catch(function (error) { alert(error) })
 }
 getSamples() {
this.analyser.getByteTimeDomainData(this.dataArray)
let normSamples = [...this.dataArray].map(e => e / 128 -1 )
return normSamples
 }
 getVolume() {
this.analyser.getByteTimeDomainData(this.dataArray)
let normSamples = [...this.dataArray].map(e => e / (fftSize / 2) - 1)
let sum = 0
for (let i = 0; i < normSamples.length; i++) {
    sum += normSamples[i] * normSamples[i]
}
let volume = Math.sqrt(sum / normSamples.length)
return volume
 }
  }
  const barHeight={
    length: 100,
    rotation: 0,
    x: 2,
    y:270,
    posX:0,
    posY:0.6
  }
  gui.add(barHeight,'length',100,1000,100)
  gui.add(barHeight,'rotation',0,2,.1)
  gui.add(barHeight,'x',-2,2,.1)
  gui.add(barHeight,'y',0,500,10)
  gui.add(barHeight,'posX',0,1,.2)
  gui.add(barHeight,'posY',0,1,.2)
  const fftSize = 512
  const microphone = new Microphone(fftSize)
  let animeFrame;
  function draw() {
 if (microphone.initialized) {
ctx.clearRect(0, 0, canvas.width, canvas.height)
const samples = microphone.getSamples()
ctx.strokeStyle = 'white'
samples.forEach((elem, i) => {
   barHeight.length = elem * 1000
    ctx.fillStyle = `rgb(${i * 4},10,20)`
    ctx.save()
    ctx.beginPath()
    ctx.translate((canvas.width * barHeight.posX)/ 2, (canvas.height * barHeight.posY) / 2)
    ctx.rotate(i*barHeight.rotation)
    ctx.fillText('Stranger', 0, 0)
    ctx.fillRect(i * barHeight.x, barHeight.y, 5, (barHeight.length))
    ctx.fill()
    ctx.stroke()
    ctx.restore()
    console.log(samples);
})
 }
 animeFrame = requestAnimationFrame(draw)
  }
  draw()
  let state = true;
  onkeyup = function (e) {
 let k = e.key;
 // alert(k)
 if (k == 'p') {
if (state) {
    cancelAnimationFrame(animeFrame);
    state = false;
}
else {
    requestAnimationFrame(draw);
    state = true;
}
 }
  }
  window.addEventListener('resize', () => {
 canvas.width = window.innerWidth
 canvas.height = window.innerHeight
  })
   }
