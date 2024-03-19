const botao = document.querySelector('#botao')

botao.addEventListener('click', ()=>{
    window.scroll({left: window.innerWidth, behavior: "smooth"})
})