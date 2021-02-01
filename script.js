// let burger = document.getElementsByClassName('menu');
// let remove = document.getElementsByClassName('btn-remove');
// let nav = document.getElementsByClassName('nav-list');

// burger.addEventListener('click', function(){
//     nav.classList.toggle('nav-list-activ');
// })

const windowWidth = window.innerWidth;
$('.menu').click(function(){
    $('.nav-list').toggleClass('nav-list-activ');
    $('.content').toggleClass('content-activ');
    body.classList.toggle('active');
    if (windowWidth <= 480) {
        $('.content').removeClass('content-activ');
        $('body').classList.toggle('active');
    }

})
$('.btn-remove').click(function(){
    $('.nav-list').removeClass('nav-list-activ');
    $('.content').removeClass('content-activ');
    $('body').removeClass('active');
})
$('.nav-links li').click(function() {
    $('.nav-list').removeClass('nav-list-activ');
    $('.content').removeClass('content-activ');
})

