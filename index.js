let menuicon    = document.getElementById('menuicon')
let sidenavbar  = document.getElementById('sidenavbar')
let closenav  = document.getElementById('closenav')

menuicon.addEventListener('click',function(){
    sidenavbar.style.right = 0;
})

closenav.addEventListener('click',function(){
    sidenavbar.style.right = "-50%"
})