import './custom-select'

document.addEventListener('DOMContentLoaded', () => {

    // Get/Set input-range value
    const getRangeValue = () => {
        const range = document.querySelector('.form__range')
        const output = document.querySelector('.form__range-value')
        output.innerHTML = range.value + ' %'
        range.oninput = () => output.innerHTML = range.value + ' %'
    }

    // To fix the header on the scroll
    const headerFixed = () => {
        window.onscroll = () => {
            const header = document.querySelector('.header')
            if (window.pageYOffset > 70) {
                header.classList.add('header__fixed')
            } else {
                header.classList.remove('header__fixed')
            }
        }
    }

    // Show/hide hamburger (mobile) menu
    const getHamburger = () => {
        const hamburgerBtn = document.querySelector('.hamburger')
        const hamburgerNav = document.querySelector('.hamburger-nav')

        hamburgerBtn.addEventListener('click', () => {
            hamburgerNav.classList.toggle('hamburger-nav--active')
            document.body.classList.toggle('overflow-hidden')
            hamburgerBtn.classList.toggle('hamburger--active')
        })
    }

    getRangeValue()
    headerFixed()
    getHamburger()
})
