// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    // <div id="player"></div>
    new YT.Player('player', {
        // height: '360',
        // width: '640',    굳이 필요없음
        // events: {
        //     'onReady': onPlayerReady,
        //     'onStateChange': onPlayerStateChange
        // }
        videoId: 'ymaIzkXY8nQ',    //최소 재생할 유튜브영상ID
        //An6LvWQuj_8 <스타벅스
        playerVars: {
            autoplay: true,
            loop: true,
            playlist: 'ymaIzkXY8nQ'
        },
        events: {
            // onReady 상태를 이벤트로 받아서 함수 실행
            onReady: function(event) {
                event.target.mute()
            }
        }
    });
}