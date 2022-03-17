var a = window.document.getElementById('clic')
a.addEventListener('mouseenter', clicar)
function clicar(){
    a.style.background = '#C95E20'
}
a.addEventListener('mouseleave', sair)

function sair(){
    a.style.background = '#FCA60F'
}