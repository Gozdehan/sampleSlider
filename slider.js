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

$(document).ready(function(){
  var click=0;
  var allWidth=0;
  var width=$(".slider-bottom ul li").width()*4;
  var animasyon = false;

  function animasyon2(px){
  	$("slider-bottom ul").stop(false,false).animate({
  		left:px*-1
  	},1000);
  }

  $(".left-control").click(function(){
    if(animasyon == true){
    	return;
    }
    allWidth=click*width;
    animasyon=true;
     $($(".slider-bottom ul")[1]).detach().prependTo($($(".slider-bottom")))
         $(".slider-bottom").css("left", "-812px");
         $(".slider-bottom").animate({left: 0}, 1000, function (){
           animasyon=false;
         });
         animasyon2(allWidth);
         click++;
  });

});

$(document).ready(function(){
 var click = 0;
 var allWidth = 0;
 var width = $(".slider-bottom ul li").width()*4;
 var animasyon=false;

 function animasyon2(px){
 	$("slider-bottom ul").stop(false,false).animate({
 		left:px*-1
 	},1000);
 }
$(".right-control").click(function(){
          if (true == animasyon) {
            return;
          }

          allWidth=click*width;
          animasyon = true;

         if ($(".slider-bottom").css('left')!='-812px') {
             $(".slider-bottom").animate({left: -812}, 1000, function () {
              animasyon = false;
             });
          }
         else {
            $($(".slider-bottom ul")[0]).detach().appendTo($(".slider-bottom"));
            $(".slider-bottom").css("left", "0px");
            $(".slider-bottom").animate({left: -812}, 1000, function () {
              animasyon = false;
            });
        }
        click++;
});
});