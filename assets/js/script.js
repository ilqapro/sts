$(function() {

    let displaySize = 'mobile';
    let htmlWidth = $('html').width();

    if( htmlWidth >= 600 && htmlWidth < 991 ) {
        displaySize = 'tablet';
    } else if( htmlWidth >= 991 && htmlWidth < 1200 ) {
        displaySize = 'large';
    } else if( htmlWidth >= 1200 ) {
        displaySize = 'desktop';
    }

    let headerHeight = $('.header').outerHeight();
    
    if( displaySize == 'desktop' || displaySize == 'large' ) {

        let siteHeroHeight = $(window).height() - headerHeight;
        // console.log($('.siteHero').outerHeight(), siteHeroHeight, $('.siteHero').outerHeight() < siteHeroHeight)
        // из-за админ панели сверху могут быть баги
        if( $('.siteHero').outerHeight() < siteHeroHeight ) {
            $('.siteHero').css({
                'min-height': siteHeroHeight,
            }).addClass('resized')
        }
        
    }

    $('body').on('click', '[data-open_popup]', function(e) {
        e.preventDefault()
        $('.popup.active').removeClass('active')
        $('.popup#' + $(this).data('open_popup')).addClass('active')
    })
    $('body').on('click', '.popup__close', function() {
        $(this).closest('.popup').removeClass('active')
    })

    $('.dropdown-content').each(function() {

        let $wrapper = $('.dropdown-content');

        $wrapper.find('.button').on('click', function() {
            $wrapper.find('.button').hide()

            $wrapper.addClass('active')
    
            $('body, html').stop().animate({
                scrollTop:  $(this).closest('section').offset().top
            })
        })
    })

    tippy('[data-tippy-content]');

    $('.windowsCalc__lamination-input').on('change', function() {
        let isChecked = $(this).prop('checked');

        if( isChecked ) {
            $('.windowsCalc__lamination').addClass('activated')
        } else {
            $('.windowsCalc__lamination').removeClass('activated')
        }
    })

    $('.windowsCalc__color-select').on('change', function() {
        let color = $(this).find(':selected').data('color');
        $(this).closest('.calc-select-wrapper').attr('data-selected-color', color)
    }).trigger('change')

    $('input[type="tel"]').inputmask("+7 999 999 99-99");

    $('.sideFaq__item-header').on('click', function() {
        let $wrapper = $(this).closest('.sideFaq__item');

        $wrapper.toggleClass('active')
        
        if( $wrapper.hasClass('active') ) {
            $wrapper.find('.sideFaq__item-content').slideDown(300)
        } else {
            $wrapper.find('.sideFaq__item-content').slideUp(300)
        }
    }).first().trigger('click')

    new Swiper('.siteReviews__slider .swiper', {
        slidesPerView: 3,
        spaceBetween: 40,
        navigation: {
            nextEl: '.siteReviews__slider-next',
            prevEl: '.siteReviews__slider-prev',
        },
    })

    new Swiper('.siteCertificates__slider .swiper', {
        slidesPerView: 4,
        spaceBetween: 40,
        navigation: {
            nextEl: '.siteCertificates__slider-next',
            prevEl: '.siteCertificates__slider-prev',
        },
    })

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });
    
})