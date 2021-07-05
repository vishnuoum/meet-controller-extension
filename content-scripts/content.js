chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("hello")
    if (request.value != "90deg" && request.value != "180deg" && request.value != "270deg" && request.value != "360deg") {
        var audio = document.getElementsByTagName("audio");
        for (var i = 0; i < audio.length; i++) {
            audio[i].volume = request.value;
        }
    }
    else {
        var video = document.getElementsByTagName("video");
        for (var i = 0; i < video.length; i++) {
            video[i].style = "transform:rotatez(" + request.value + ")";
        }
    }
    sendResponse({ fromcontent: "This message is from content.js" })
});
