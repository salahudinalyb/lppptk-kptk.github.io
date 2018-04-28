$(document).ready(function(){
        $(window).scroll(function() {
            var wScroll = $(this).scrollTop();
            console.log(wScroll);
            const $navigation = $('#navigation-home');

            const $list = $('.a.nav-link.text-white')

            if(wScroll > 60) {
                $navigation.fadeIn(200);
            } else if(wScroll < 70) {
                $navigation.fadeOut(200);
            }
        })
})


