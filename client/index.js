'use strict';

$(document).ready(init);

var $target;
var $source;

function init(){
  $('#disk1').text('1').css('width', '20%');
  $('#disk2').text('2').css('width', '40%');
  $('#disk3').text('3').css('width', '60%');

  $('.disk').click(selectDisk);
  $('.tower').click(dropTower);



  function selectDisk() {
    // if(!$('.tower').css('b'))
    // $(this).clone().remove();
    event.stopPropagation();
    $source = $(this);
    $(this).detach();
    console.log('this: ', this);
  }

  function dropTower(){
    console.log('tower');
    $target = $(this);
    console.log($target);
    moveDisk();
    // $target.prepend($source);
    // $target.css('background-color','green');

  }

  function moveDisk(){
    console.log('src',$source.text());
    console.log('tgt',$target.text());
    if( $source.text() < $target.text() || isNaN(parseInt($target.text()))){
      $target.prepend($source);
    } else {
      alert('illegal move');
    }
  //  $target = null;
  //  $source = null;



  }

/*
  $('.tower').click(function(){
    $target = $(this);
    $target.css('background-color','gray');
  //  $(this).clone().remove();
    $target.prepend($source);
  });



  $('#disk1').click(function(){
    $source = this;
    $(this).clone().remove();
  //  $('#tower2').prepend(this);
  $target.prepend(this);

  });

  $('#disk2').click(function(){
    $(this).clone().remove();
    $('#tower2').prepend(this);
  });

  $('#disk3').click(function(){
    $(this).clone().remove();
    $('#tower2').prepend(this);
  });

*/


}
