var objetivo = "";
var acertos = 0;

$(document).ready( function () {
  ajustaLista();
  desabilitaTudo();
} );

function ajustaLista(){
  var alturaLista = $(".list").height();
  $(".lines").css("height",alturaLista);
};

$("#start").click(function(){
   /*Sortear uma palavra*/
  sorteioDePalavra();
  
  $('#area-vidas').text("6");
  $('#start').text("Clique para Começar")
});

 $(document).keyup(function (e) {
   	if(e.which == 13){
      if($('#area-input').val().length !=" " ){
        captura();
      }
    } 
 });

function captura(){
  var letra = $('#area-input').val().toLowerCase();
  checarAcertos(letra);
  $('#area-input').val("");

}
function incrementarAcertos(){
  acertos = acertos + 1;
}
function zerarAcertos(){
    acertos = 0;
}
function limparErros(){
    $("#area-erro").empty();
}
function checarAcertos(letra){
  var n = objetivo.indexOf(letra);
  var acertosTmp = 0;
  /*VERIFICAR ACERTOS*/
  if(n<0){
    reduzVida(letra);
  }else{
    for(var i=0; i<objetivo.length; i++){
      if(letra==objetivo[i]){
        $("#"+i+"letra").empty();
        $("#"+i+"letra").append(letra);
        
        incrementarAcertos();
        console.log('incrementando acertos: '+acertos);
      }
    }
  }
  
  if(acertos==objetivo.length){
    vitoriaJogador();
    console.log('Ele vai vencer');
  }
}

function vitoriaJogador(){
  $('#area-input').prop('disabled', true);
  $('#area-input').css('background', '#99ff99');
  $('#start').text("Meus parabens, você venceu! Clique aqui para jogar novamente!");
  zerarAcertos();
}

function reduzVida(letra){
  var vidas = $("#area-vidas").text();
  vidas = vidas-0;
  vidas = vidas-1;
  $("#area-vidas").empty();
  if(vidas == 0){
    $("#area-vidas").append("PERDEU, a resposta era: "+objetivo);
    zerarAcertos();
    desabilitaTudo();
    
  }else{
    $("#area-vidas").append(vidas);
  }
  $("#area-erro").append("<b>"+letra+"</b>");
}

function desabilitaTudo(){
  $('#area-input').prop('disabled', true);
  $('#area-input').css('background', '#ff8080');
}

function habilitaTudo(){
  $('#area-input').prop('disabled', false);
  $('#area-input').css('background', '#96e8dd');
  limparErros();
}

function sorteioDePalavra(){
  var arrayObjetivos = ["girafa",
  "leao",
  "gamba",
  "canguru",
  "coala",
  "chimpanze",
  "elefante",
  "lemure",
  "Castor",
  "preguiça",
  "tatu-canastra",
  "tamandua",
  "morcego",
  "hamster",
  "camundongo",
  "morcego",
  "boi",
  "urso",
  "doninha",
  "cavalo",
  "anta",
  "sagui",
  "mico-leao-dourado",
  "macaco",
  "lobo-guara",
  "raposa",
  "jaguatirica",
  "gato",
  "onça",
  "leopardo",
  "furao",
  "lontra",
  "hipopotamo",
  "baleia",
  "golfinho"];
  var palavra = Math.floor(Math.random() * 100);
  objetivo = arrayObjetivos[palavra];
  console.log("Palavra", objetivo);
  habilitaTudo();
  desenhaTela();
};

function desenhaTela(){
  var counter = objetivo.length;
  $("#area-resposta").empty();
  for(var i=0; i<counter;i++){
    $("#area-resposta").append("<span class='space' id='"+ i+"letra'>_</span>")
  }
   ajustaLista();
};
