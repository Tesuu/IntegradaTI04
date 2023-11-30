
$(document).ready(function(){
    $(".botao-contat").click(function (){
        $(".titles-cont").show();
        $(".contatos").show();
    });
    $(".botao-fechar").click(function (){
        $(".titles-cont").hide();
        $(".contatos").hide();
    });
});