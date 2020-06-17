$("div.ui.container .item").removeClass("active")

$("#collaborations-button").css({
    "background": "whitesmoke",
    "color": "#525E67",
    "font-weight": "800"
})



// Carousel Set Up
const glideConfig = {
    type: "carousel",
}

$(document).ready(function(){
    new Glide('.glide', glideConfig).mount()
});

// Stop Videos on Click

// const video_selectors = $(".video-selector")
// const youtubevideos = $(".youtubevideo")

// video_selectors.forEach(selector, function(){
//     selector.addEventListener("click", function(){
//         youtubevideos.forEach(video, function(){
//             stopVideo(video)
//         })
//     })
// })


// function stopVideo ( element ) {
// 	var iframe = element.querySelector( 'iframe');
// 	var video = element.querySelector( 'video' );
// 	if ( iframe ) {
// 		var iframeSrc = iframe.src;
// 		iframe.src = iframeSrc;
// 	}
// 	if ( video ) {
// 		video.pause();
// 	}
// };