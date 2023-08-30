// selectors
const video_wrapper = document.querySelector(".video_wrapper");
const strong = video_wrapper.querySelector("strong");
const videoView = document.querySelector("#view");
const videoRecordered = document.querySelector("#recordered");
const btnStart = document.querySelector("#start");
const btnStop = document.querySelector("#stop");
const downloadBtn = document.querySelector("#download");

function capture() {
  btnStop.disabled = true;
  videoRecordered.classList.add("hide");
  btnStop.style.opacity = 0.5;
  navigator.mediaDevices
    .getUserMedia({
      audio: {
         echoCancellation: true,
         noiseSuppression: true,
         sampleRate: 44100
      },
      video: true
    })
    .then((stream) => {
      videoView.srcObject = stream;
      startReconding(stream);
    })
    .catch((err) => {
      console.log(err);
    });
}

function startReconding(stream) {
  // creating a media recorder
  const recorder = new MediaRecorder(stream);
  let chunks = [];

  // store media recordered into chunks
  recorder.ondataavailable = (e) => {
    chunks.push(e.data);
  };

  btnStart.addEventListener("click", () => {
    btnStart.disabled = true;
    btnStart.style.opacity = 0.5;
    // start recorder
    recorder.start();
    strong.textContent = "Recording...";
    btnStop.disabled = false;
    btnStop.style.opacity = 1;
  });

  btnStop.addEventListener("click", () => {
    btnStart.disabled = false;
    videoRecordered.classList.remove("hide");
    btnStart.style.opacity = 1;
    strong.textContent = "Ended...";
    chunks = [];
    recorder.stop();
  });

  // display data onstop
  recorder.onstop = () => {
    let blob = new Blob(chunks, { type: chunks[0].type });
    videoRecordered.src = URL.createObjectURL(blob);

    downloadBtn.onclick = () => {
      downloadBtn.href = blob;
      downloadBtn.download = "video.mp4";
    };
  };
}

window.addEventListener("load", capture);
// Object.assign(video, audio);
