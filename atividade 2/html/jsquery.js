$(function(){
    $('#blue').click(function(){
        $('h1').css("color","blue");
        $('h1').fadeOut();
        $('h1').delay(3000);
        $('h1').fadeIn();
    });
    $('#red').click(function(){
        $('h1').css("color","red");
        $('#mensagem').text("A cor do texto foi alterada");
        $('#mensagem').css('color','red');
        $('#mensagem').fadeOut();
        $('#mensagem').delay(8000);
    });
});
