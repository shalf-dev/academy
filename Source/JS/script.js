$(function() {
  
 //変数に要素を入れる
 var open = $('.header_modal-open'),
     close = $('.modal-close'),
     container = $('.modal-container'),
     container_a = $('.modal-container a'); 
     
 //開くボタンをクリックしたらモーダルを表示する
 open.on('click',function(){
  container.addClass('active');    
  return false;
 });

 //閉じるボタンをクリックしたらモーダルを閉じる
 close.on('click',function(){
  container.removeClass('active');
 });

 //モーダルの外側をクリックしたらモーダルを閉じる
 $(document).on('click',function(e){
  if(!$(e.target).closest('.modal-body').length){
   container.removeClass('active');
  }
 });

 //モーダルWindow内の目次をクリックしたらモーダルwindowを閉じる
 $(container_a).on('click',function(e){
   container.removeClass('active');
 });

 //Image画像を拡大した際の設定
 lightbox.option({
  'disableScrolling': true,
  'wrapAround': true
 });

});