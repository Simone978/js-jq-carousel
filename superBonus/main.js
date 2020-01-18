$(document).ready(
  function(){

    var prev = $('.prev');
    var next = $('.next');
    // creo la funzione per andare avanti
    next.click(function(){
      // variabili slider
      var imgActive = $('img.active');
      var imageNext = $('img.active').next();
      // variabili circles
      var circleActive = $('i.active');
      var circleNext = $('i.active').next();
      // motore slider
      imgActive.removeClass('active');
      imageNext.addClass('active');
      if(imgActive.hasClass('last')==true){
        imgActive.removeClass('active');
        $('img.first').addClass('active');
      }
      // motore circle
      circleActive.removeClass('active');
      circleNext.addClass('active');
      if(circleActive.hasClass('last')==true){
        circleActive.removeClass('active');
        $('i.first').addClass('active');
      }
    });

    // creo la funzione per tornare indietro
    prev.click(function(){
      // variabili slider
      var imgActive = $('img.active');
      var imagePrev = $('img.active').prev();
      // variabili circles
      var circleActive = $('i.active');
      var circlePrev = $('i.active').prev();
      // motore slider
      imgActive.removeClass('active');
      imagePrev.addClass('active');
      if(imgActive.hasClass('first')==true){
        imgActive.removeClass('active');
        $('img.last').addClass('active');
      }
      // motore circle
      circleActive.removeClass('active');
      circlePrev.addClass('active');
      if(circleActive.hasClass('first')==true){
        circleActive.removeClass('active');
        $('i.last').addClass('active');
      }
    });
  }
);

// creo la funzione che al click cambia l'immagine
$('.nav i').click(function(){
  // rimuovo la classe active dai tag i e l'aggiungo all'elemento selezionato
  $('.nav i').removeClass('active');
  $(this).addClass('active');
  // conservo in una variabile l'indice della posizione dell'elemento selezionato
  var position = $(this).index();
  var images = $('.images > img');
  // intercetto l'immagine corrispondente tramite la variabile-contatore position
  var imgreplace = $('.images > img').eq(position);
  // rimuovo la classe active dai tag img e l'aggiungo all'elemento selezionato
  images.removeClass('active');
  imgreplace.addClass('active');

});
