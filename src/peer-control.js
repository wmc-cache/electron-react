const EventEmitter = require("events")
const peer = new EventEmitter()
const { desktopCapture } = require("electron")

async function getScreenStream() {
    const sources = await desktopCapture.getScources({ types: ["screen"] })
    navigator.webkitGetUserMedia({
        audio: false,
        video: {
            mandatory: {
                chromeMediaSource: "desktop",
                chromeMediaSourceId: sources.id,
                Width: 1024,
                Height: 680
            }
        }
    }, (stream) => {
        peer.emit("add-stream", stream)

    }, (err) => {
        console.log(err)
    })

}
getScreenStream()

console.log("peer", peer)
module.exports = peer
