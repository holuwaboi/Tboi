var content = document.querySelector('.content')
var btn = document.querySelector('.btn')
var btn2 = document.querySelector('.btn-2')


btn.addEventListener('click',function(){
    content.classList.add('hide-div')
    btn.style.display='none'
    btn2.style.display='block'


})

btn2.addEventListener('click',function(){
    content.classList.remove('hide-div')
    btn.style.display='block'
    btn2.style.display='none'
})