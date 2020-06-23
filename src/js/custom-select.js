import $ from 'jquery'
import select2 from 'select2'
import SimpleBar from 'simplebar'

// Plugins setup & scroll to anchor link
$(document).ready(() => {

    // Custom select("select2" plugin)
    $('.form__select').select2({
        width: '100%',
        placeholder: 'Выберите тип системы',
        allowClear: false,
        minimumResultsForSearch: -1
    })

    // Custom scrollbar ("simplebar" plugin)
    $('.select2-container').on('click', () => {
        $('.select2-results__options').toggleClass('simplebar')

        if ($('.select2-results__options').hasClass('simplebar')) {
            new SimpleBar($('.simplebar')[0], {
                autoHide: false,
            })
        }
    })

    // Scroll to anchor (order section)
    $('a[href^="#"]').click(function () {
        const target = $(this).attr('href')
        $('html, body').animate({ scrollTop: $(target).offset().top }, 400)
        return false
    })
})
