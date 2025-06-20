    function btn_onclick_Executar_FOR(){
    let num = parseInt(document.getElementById("num").value);
    let resposta = document.getElementById('saida');
    let tabuada='';
  
    for(var count=1; count<=10 ; count++)
    tabuada += num+" x "+count+" = "+
                 num*count+"<br />";
    
    saida.innerHTML = tabuada;
    }

    function btn_onclick_Executar_While() {
        let num = parseInt(document.getElementById("num").value);
        let saida = document.getElementById('saida');
        let multiplicador = 1;
        let tabuada = '';
    
        while (multiplicador <= 10) {
            tabuada += num + " x " + multiplicador + " = " + num * multiplicador + "<br />";
            multiplicador++;
        }
    
        saida.innerHTML = tabuada;
    }
