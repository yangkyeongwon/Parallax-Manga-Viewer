
$(function(){
  var x = 0;
  var page_width = 480;
  $("#page_1").css("left", "480px");
  $("#page_2").css("left", "0px");
  $("#page_3").css("left", "-480px");
  $("#page_4").css("left", "-960px");
  $("#page_5").css("left", "-480px");
  $("#page_6").css("left", "-960px");
  var dy = 0;
  
  $(window).scroll(function(){
   dy = $(this).scrollTop();
   
   if(dy > page_width * 6){
   $("#page_5").css("left", "480px");
   $("#page_6").css("left", "0px");
   
   }else if(dy > page_width * 4){
   $("#page_5").css("left", dy - page_width * 5 +"px");
   $("#page_6").css("left", dy - page_width * 6 +"px");
   $("#page_3").css("left", "480px");
   $("#page_4").css("left", "0px");
   
    if(dy > page_width * 5){
        $("#page_counter_content").text("6 / 6");
        }else{
        $("#page_counter_content").text("5 / 6");
        }
   
   }if(dy > page_width * 3){
   $("#page_3").css("left", "480px");
   $("#page_4").css("left", "0px");
   
   }else if(dy > page_width * 1) {
   $("#page_3").css("left", dy - page_width * 2 +"px");
   $("#page_4").css("left", dy - page_width * 3 +"px");
   $("#page_1").css("left", "480px");
   $("#page_2").css("left", "0px");
   
    if(dy > page_width * 2){
        $("#page_counter_content").text("4 / 6");
        }else{
        $("#page_counter_content").text("3 / 6");
        }
   
   }else{
   $("#page_1").css("left", "480px");
   $("#page_2").css("left", "0px");
   $("#page_3").css("left", "-480px");
   $("#page_4").css("left", "-960px");
   $("#page_5").css("left", "-480px");
   $("#page_6").css("left", "-960px");
   
    if(dy > page_width * 0){
        $("#page_counter_content").text("2 / 6");
        }else{
        $("#page_counter_content").text("1 / 6");
        }
   
   }
   
   });
  });