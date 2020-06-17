const glideConfig = {
    type: "carousel",
    autoplay: 5000
}

$(document).ready(function(){
    new Glide('.glide', glideConfig).mount()
});
