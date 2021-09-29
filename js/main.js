/* DISCOUNT ADRESS  */

$('.discount__adress').hover(
    function() {
        $(this).addClass('discount__text_hover')
        $(this).find('span').css('display', 'block')
    },
    function() {
        $('.discount__adress').find('span').css('display', 'none')
        $('.discount__adress').removeClass('discount__text_hover')
    })

$('.discount__item_show').click(function() {
    $(this).closest('.discount__item_wrapper').find('.discount__adress').toggleClass('discount__adress_open')
    $(this).closest('.discount__item_wrapper').find('.discount__item_name_block').toggleClass('border__add')
    $(this).closest('.discount__item_wrapper').find('.discount__item_text_block').toggleClass('border__add')
    $(this).closest('.discount__item_wrapper').find('.discount__item_coupon_block').toggleClass('border__add')
})

/* FAQ ITEM */

$('.faq__item').click(function() {

    if ($(this).find('.faq__item_answer').hasClass('faq__item_answer_open')) {
        $(this).find('.faq__item_status').text('+')
    } else {
        $(this).find('.faq__item_status').text('-')
    }

    $(this).find('.faq__item_answer').toggleClass('faq__item_answer_open');
    $(this).find('.faq__answer__text').toggleClass('faq__answer__text_visible')

    $(this).find('.faq__item_number').toggleClass('faq__item_number_open')
})

var bodyWidth = $('body').width()

if (bodyWidth < 491) {
    $('.info__full_logo').attr('src', 'image/logotypes__mb.png')

}

if (bodyWidth < 1024) {

    $('.coupon__price > img').attr('src', 'image/Component 16.png')
}