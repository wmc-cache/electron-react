import { useEffect } from 'react'
//const peer = require("./peer-control")
//console.log("peer", peer)
function App() {

  useEffect(() => {

    //peer.on("add-stream", (stream) => { play(stream) })
  })
  const play = (stream) => {
    let video = document.getElementById("video");
    video.srcObject = stream;
    video.onloadedmetadata = function () {
      video.play()
    }


  }

  return (
    <div>
      123
      <video id="video"></video>
    </div>
  );
}



export default App;
