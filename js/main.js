$(document).ready(function(){
$(".point").click(function( event ) {
	let $this = $(this);
	$this.toggleClass("point_active");
	$this.parent().parent().find('.box-info__body-title-cross .cross-item').toggleClass('cross-item_active');
	$this.parent().parent().parent().find('.box-info__body-text').toggleClass('box-info__body-text_active');
	 
	    

 });
});