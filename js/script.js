
const course_Btn = document.querySelector('.courses-dropdown-btn')
const absolute_Drd = document.querySelector('.absolute-dropdown')
const absolute_Drd_sm = document.querySelector('.dropdown-menu-1')

    // document.addEventListener('click', e => {
    //     absolute_Drd.classList.remove('absolute-dropdown-2')
    // })
course_Btn.addEventListener('click', e => {
    absolute_Drd.classList.toggle('absolute-dropdown-2')
    absolute_Drd_sm.classList.toggle('dropdown-menu-2')
    // console.log(absolute_Drd_sm)
})