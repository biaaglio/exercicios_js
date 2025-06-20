    function btn_onclick_atribuir_texto(){
        let texto = document.getElementById("text").value;
        let div = document.getElementById("saida");

        div.textContent = texto
    }

    function btn_onclick_concatenar_texto() {
        let texto = document.getElementById("text").value;
        let div = document.getElementById("saida");
        let conteudoAtual = div.textContent;
        div.textContent = conteudoAtual + texto;
    }

    function btn_onclick_limpar_texto() {
        let div = document.getElementById("saida");
        div.textContent = " ";
    }
   

