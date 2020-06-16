const glideConfig = {
    type: "carousel",
    autoplay: 5000
}

$(document).ready(function(){
    $('.ui.dropdown.item').dropdown()
    new Glide('.glide', glideConfig).mount()
});

