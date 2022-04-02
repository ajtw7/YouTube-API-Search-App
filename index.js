/*
 YouTube Triple Jump Search API: 
https://www.googleapis.com/youtube/v3/search?part=snippet&q=triple-jump&key=AIzaSyDvzCwOEp-M31sFovCG9aeJhZgvFb27a8M
*/
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        var res = JSON.parse(xhttp.responseText);
        var videoData = res.items.map(function (item) {
            return item.snippet
        });

        var contentContainer = document.querySelector('#video-divs')
        videoData.forEach(function (video) {
            console.log(video);
            var videoDiv = document.createElement('div');
            videoDiv.classList.add('videoDiv')
            videoDiv.innerHTML = `
                <img src=${video.thumbnails.high.url} >
                <h3>${video.title}</h3>
                <p>${video.channelTitle}</p>
                <p>${new Date(video.publishTime).toLocaleString()}</p>
            `
            contentContainer.appendChild(videoDiv);

        })
    }
};
xhttp.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&q=triple-jump&maxResults=12&key=AIzaSyDvzCwOEp-M31sFovCG9aeJhZgvFb27a8M", true);
xhttp.send();