var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var pp = document.getElementById("pp");

function EventoClick1() {
    div1.style.display = "none";
    div2.style.display = "flex";
}

function EventoClick2() {
    div2.style.display = "none";
    div3.style.display = "flex";
}

function EventoClick3() {
    pp.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam atque fuga cupiditate modi. Debitis enim excepturi aliquam beatae aspernatur corporis? <br> Reiciendis illo et facilis voluptatem neque perferendis quis vel deleniti.";
    pp.style.color = "black";
}
    