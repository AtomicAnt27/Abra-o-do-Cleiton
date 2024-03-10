
function comecar(){
    var name = document.getElementById("exampleFormControlInput1").value;

    show(name);
}

function show(name){
    document.getElementById("nomePrint").textContent = name;
    var div = document.getElementById("selects-div");
    if(name && name.trim() !== ""){
        div.style.display = "flex";
        document.getElementById("exampleFormControlInput1").style.background = "none";
    }else{
        document.getElementById("error").style.display = "flex";
        div.style.display = "none";
    }
}

function fechar(){
    document.getElementById("error").style.display = "none";
    document.getElementById("exampleFormControlInput1").style.background = "lightpink";
}

function calcularTotal(){
    var selectArtesanatos = document.getElementById("select_artesanatos");
    var selectGemasBrutas = document.getElementById("select_gemasbrutas");
    var selectGemasLapidadas = document.getElementById("select_gemaslapidadas");
    var selectGeodos = document.getElementById("select_geodos");
    var selectRolados = document.getElementById("select_rolados");
    var resultadoSpan = document.getElementById("resultado");

    var total = 0;
    var artesanatos = 0;
    var gemasBrutas = 0;
    var gemasLapidadas = 0;
    var geodos = 0;
    var rolados = 0;

    switch(selectArtesanatos.value){
        case "...":
            total += 0;
            artesanatos = 0;
            break;
        case "Árvore de Ametista":
            total += 69,90;
            artesanatos = 69,90;
            break;
        case "Árvore de Citrino":
            total += 69,90;
            artesanatos = 69,90;
            break;
        case "Brinco de Jade":
            total += 89,90;
            artesanatos = 89,90;
            break;
        case "Pássaro Lápis-Lazúli":
            total += 323,90;
            artesanatos = 323,90;
            break;
        case "Colar Opala de Fogo":
            total += 349,90;
            artesanatos = 349,90;
            break;
        case "Pulseira Turmalina Melancia":
            total += 129,90;
            artesanatos = 129,90;
            break;
    }

    switch(selectGemasBrutas.value){
        case "...":
            total += 0;
            gamesBrutas = 0;
            break;
        case "Ametista":
            total += 11,90;
            gemasBrutas = 11,90;
            break;
        case "Citrino":
            total += 11,90;
            gemasBrutas = 11,90;
            break;
        case "Jade":
            total += 18,90;
            gemasBrutas = 18,90;
            break;
        case "Lápis-Lazúli":
            total += 11,90;
            gemasBrutas = 11,90;
            break;
        case "Opala de Fogo":
            total += 39,90;
            gemasBrutas = 39,90;
            break;
        case "Turmalina Melancia":
            total += 59,90;
            gemasBrutas = 59,90;
            break;
    }

    switch(selectGemasLapidadas.value){
        case "...":
            total += 0;
            gemasLapidadas = 0;
            break;
        case "Ametista":
            total += 99,90;
            gemasLapidadas = 99,90;
            break;
        case "Citrino":
            total += 110,90;
            gemasLapidadas = 110,90;
            break;
        case "Jade":
            total += 149,90;
            gemasLapidadas = 149,90;
            break;
        case "Lápis-Lazúli":
            total += 59,90;
            gemasLapidadas = 59,90;
            break;
        case "Opala de Fogo":
            total += 80,90;
            gemasLapidadas = 80.90;
            break;
        case "Turmalina Melancia":
            total += 89,90;
            gemasLapidadas = 89,90;
            break;
    }

    switch(selectGeodos.value){
        case "...":
            total += 0;
            geodos = 0;
            break;
        case "Ametista":
            total += 49,90;
            geodos = 49,90;
            break;
        case "Citrino":
            total += 535,49;
            geodos = 535,49;
            break;
        case "Jade":
            total += 69,90;
            geodos = 69,90;
            break;
        case "Lápis-Lazúli":
            total += 34,90;
            geodos = 34,90;
            break;
        case "Opala de Fogo":
            total += 39,90;
            geodos = 39,90;
            break;
        case "Turmalina Melancia":
            total += 39,90;
            geodos = 39,90;
            break;
    }

    switch(selectRolados.value){
        case "...":
            total += 0;
            rolados = 0;
            break;
        case "Ametista":
            total += 19,90;
            rolados = 19.90;
            break;
        case "Citrino":
            total += 19,90;
            rolados = 19,90;
            break;
        case "Jade":
            total += 29,90;
            rolados = 29,90;
            break;
        case "Lápis-Lazúli":
            total += 19,90;
            rolados = 19,90;
            break;
        case "Opala de Fogo":
            total += 29,90;
            rolados = 29,90;
            break;
        case "Turmalina Melancia":
            total += 24,90;
            rolados = 24,90;
            break;
    }

    resultadoSpan.textContent = `R$ ${total.toFixed(2)}`
    document.getElementById("artesanato-pronto").innerHTML = artesanatos.toFixed(2);
    document.getElementById("gemabruta-pronto").innerHTML = gemasBrutas.toFixed(2);
    document.getElementById("gemalapidada-pronto").innerHTML = gemasLapidadas.toFixed(2);
    document.getElementById("geodo-pronto").innerHTML = geodos.toFixed(2);
    document.getElementById("roloado-pronto").innerHTML = rolados.toFixed(2);
}

const limpar = () => {
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").textContent = "";
    document.getElementById("select_artesanatos").value = "Selecione um artesanato";
    document.getElementById("select_gemasbrutas").value = "Selecione uma gema bruta";
    document.getElementById("select_gemaslapidadas").value = "Selecione uma gema lapidada";
    document.getElementById("select_geodos").value = "Selecione um geodo";
    document.getElementById("select_rolados").value = "Selecione uma gema rolada";
    document.getElementById("artesanato-pronto").textContent = "";
    document.getElementById("gemabruta-pronto").textContent = "";
    document.getElementById("gemalapidada-pronto").textContent = "";
    document.getElementById("geodo-pronto").textContent = "";
    document.getElementById("roloado-pronto").textContent = "";
}

var totalPedido = document.getElementById("resultado");

const fazerPedido = () => {
    var numTel = "5"
    var idPedido = parseInt(Math.random() * 1000);
    

    var linkWhatsApp = "https://wa.me/" + numTel + "?text=Pedido Número: " + idPedido;
    window.open(linkWhatsApp, "_blank");
}

var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});