window.onload = function() {
    const Burger = document.getElementById('burger');
    const Close = document.getElementById('close-btn');
    const Pop = document.getElementById('menu-pop');
    const Header = document.getElementById('header');
    Burger.onclick = function() {
        Pop.style.height = '100vh';
        Pop.style.opacity = 1;
    }
    Close.onclick = function() {
        Pop.style.height = 0;
        Pop.style.opacity = 0;
    }
    /*Make header sticky on scroll*/
    window.onscroll = function() {
        stickyHeader()
    }
    function stickyHeader() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            Header.style.position = 'fixed';
        } else {
            Header.style.position = 'initial';
        }
    }
}