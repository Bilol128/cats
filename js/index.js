const button = document.querySelector('.burger')
const menu = document.querySelector('.burger-menu')
const input = document.querySelector('.result__input')
const cats_before = document.querySelector('.before-cats')
const cats_beforeImage = document.querySelector('.before-cats__image')
const loader = document.querySelector('.loader')
const body = document.querySelector('body')
const nav = document.querySelector('.navbar')

button.addEventListener('click' , function(){
    if(!menu.classList.contains('active')){
        menu.classList.add('active')
        button.classList.add('activeButton')
        body.classList.add('body-overflow')
    }else{
        menu.classList.remove('active')
        button.classList.remove('activeButton')
        body.classList.remove('body-overflow')
    }
})

console.log(input.value);
var cats_beforeWidth = cats_before.left

setInterval(() => {
//   var actuallwidth =  cats_beforeWidth = input.value 
  var kfd =  `${input.value}%`
  cats_before.style.left = kfd
}, 200);



document.body.onload = function() {
    setTimeout(() => {
        if (!loader.classList.contains('loader_active')) {
            loader.classList.add('loader_active')
        }
    }, 1000);
}

window.addEventListener('scroll' , function(){
    if(scrollY  > 1 ){
      nav.classList.add('navbar-fixed')
    }else{
        nav.classList.remove('navbar-fixed')
    }
})