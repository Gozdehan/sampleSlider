$(document).ready(function(){
	var i = 0;
	var allWidth = 0;
	var width = $(".slider-top li").width();
	function animation(px){
      $(".slider-top").stop(false,false).animate({
        left:px*-1},2000);
	}

	var timer = setInterval(function(){
		allWidth = i*width;
		if(i==7){
			i=-1; //en başa sardıran kod. appendTo dene!!
		}
		animation(allWidth);
		i++;

	},5000);
   
    $(".slider-bottom a").click(function () {
          clearInterval(timer);

          var element = $(this);
          var number = element.attr("data-no") - 1;
          console.log(number);
          var genislik = $(".slider-top li").width();
          var hedefLeft = genislik * number;
          
           $(".slider-top").animate({
                  left:hedefLeft * -1}, 1000);
        }); 

});