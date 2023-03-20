/* 

onclick -> Disparado quando recebe um click.
ondblclick -> Disparado quando é click duplo.
onmouseover -> Disparado quando o mouse está sobre.
onmouseout -> Disparado quando o mouse é movido para fora do elemento.
onmousemove -> Disparado quando o mouse é movido no elemento.
onmousedown -> Disparado quando o click do botão foi pressionado.
onmouseup -> Disparado quando o click do botão é liberado.
onfocus -> Disparado quando o elemento recebe o foco. Pode ser usado por exemplo em um input.
onchange -> Disparado quando existe uma mudança no conteúdo. "Ao mudar".
onblur -> Disparado quando o elemento perde o foco.
onkeydown -> Disparado quando uma tecla é pressionada.
onkeypress -> Disparado quando uma tecla é pressionada e solta.
onkeyup -> Disparado quando uma tecla é solta sobre um elemento.
onload -> Disparado quando a página terminou de ser carregada. Body.
onresize -> Disparado quando há um redimencionamento da janela.

*/

function eventoClick() {
    document.body.style.backgroundColor = "yellow";
}

// ----------------------

function viraVermelho() {
    let div = document.getElementById("div2");
    div.style.backgroundColor = "red";
}

function viraAzul() {
    let div = document.getElementById("div2");
    div.style.backgroundColor = "blue";
}

// ----------------------