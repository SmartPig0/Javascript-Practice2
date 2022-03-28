const btn = document.querySelector('.btn')
btn.addEventListener('click',Trocar)
btn.style.background = 'black'
btn.addEventListener('mouseout',Outmouse)
btn.style.background = 'black'
btn.addEventListener('mouseout',Alerta)

function Trocar(){
    if(btn.style.background === 'black')
    btn.style.background = 'red'   
    else if(btn.style.background === 'red')
    btn.style.background = 'green'
    else if(btn.style.background === 'green')
    btn.style.background = 'blue'
    else if(btn.style.background === 'blue')
    btn.style.background = 'orange'
    else btn.style.background = 'black'
}

function Outmouse() {
    if(btn.style.background === 'blue')
    btn.style.background = 'green'
    else
    if(btn.style.background === 'black')
    btn.style.background ='pink'
    else btn.style.background = 'black'
}

function Alerta() {
    if(btn.style.background === 'black')
    alert("Ops, não é essa cor")
    else if(btn.style.background === 'pink')
    alert("Ops, não é essa cor")
    else if(btn.style.background === 'green')
    alert("Parabéns!!! Ao deixar o botão Azul e clicar fora do botão. Obtemos, enfim, a cor verde!!!")
}