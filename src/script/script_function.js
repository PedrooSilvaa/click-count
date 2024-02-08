    var t = 0;
    var quant1 = 0;
    var quant2 = 0;
    var quant3 = 0;
    var temp1 = 0;
    var temp2 = 0;
    var temp3 = 0;

function converterTemp(){
    // return temp + 1;
    t = t + 1;
    document.getElementById("saida").innerText = t;
    // alert( t++);
}
function reinicio(){
    t = 0;
    document.getElementById("saida").innerText = t;
}

function salvar(){
    if(quant1 < t){
        temp1 = quant1;
        quant1 = t;
        document.getElementById("salvar1").innerText = `1º lugar: ${t}`;
    }else{
        if( quant2 < t){
        temp2 = quant2;
        quant2 = t;
        document.getElementById("salvar2").innerText = `2º lugar: ${t}`;
    }else{
    if(quant3 < t){
        quant3 = t;
        document.getElementById("salvar3").innerText = `3º lugar: ${t}`;
    }
    }
    }

    if(temp1 < quant1){
        document.getElementById("salvar3").innerText = `3º lugar: ${quant2}`;
        quant2 = temp1;
        document.getElementById("salvar2").innerText = `2º lugar: ${quant2}`;
        temp1 = quant1;
    } else{
    if(temp2 < quant2){
        quant3 = temp2;
        document.getElementById("salvar3").innerText = `3º lugar: ${quant3}`;
        temp2 = quant2;
    }
    }
}