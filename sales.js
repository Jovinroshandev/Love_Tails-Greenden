let menuicon    = document.getElementById('menuicon')
let sidenavbar  = document.getElementById('sidenavbar')
let closenav  = document.getElementById('closenav')

menuicon.addEventListener('click',function(){
    sidenavbar.style.right = 0;
})

closenav.addEventListener('click',function(){
    sidenavbar.style.right = "-50%"
})

// Functionality for search box
let productContainer = document.getElementById('productContainer')
let searchbox = document.getElementById('searchbox')
let productList = productContainer.querySelectorAll('div') 
searchbox.addEventListener('keyup',function(){
    let enteredValue  = event.target.value.toUpperCase()
    for (count=0;count<productList.length;count=count+1){
        let productName  = productList[count].querySelector('h2').textContent
        if (productName.toUpperCase().indexOf(enteredValue)<0){
            productList[count].style.display = 'none'
        }
        else{
            productList[count].style.display = 'block'
        }
    }
})
