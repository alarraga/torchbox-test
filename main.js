var navList = document.getElementById('menu')
if (navList) {
    let children = navList?.children
    for (let i = 0; i < children.length; i++) {
        children[i].style.transitionDelay = i * 0.1 + "s";
    }
}