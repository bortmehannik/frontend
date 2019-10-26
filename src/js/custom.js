function initDesktopSlick() {
    $('.carousel').slick({
        dots: true,
        slidesPerRow: 3,
        rows: 2,
        nextArrow: '<button type="button" class="slick-custom slick-next"><img src="src/images/arrow.png" alt="Вперед"></button>',
        prevArrow: '<button type="button" class="slick-custom slick-prev"><img src="src/images/arrow.png" alt="Назад"></button>',
        infinite: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesPerRow: 2
                }
            }
        ]
    })
}
function initMobileSlick() {
    $('.carousel').slick({
        dots: true,
        slidesPerRow: 1,
        rows: 1,
        nextArrow: false,
        prevArrow: false,
        infinite: false,
        centerMode: true,
        centerPadding: '30px'
    })
}
document.addEventListener("DOMContentLoaded", function(event) {
    let mob = true;
    if (window.innerWidth < 776) {
        initMobileSlick();
    } else {
        initDesktopSlick();
    }
    $( window ).on('resize',function() {
        if (window.innerWidth < 776) {
            if (mob) {
                $('.carousel').slick('unslick');
                initMobileSlick();
                mob = !mob;
            }
        } else {
            if (!mob) {
                $('.carousel').slick('unslick');
                initDesktopSlick();
                mob = !mob;
            }
        }
    });
});

