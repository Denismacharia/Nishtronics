$(document).ready(function (){
  var maxHeight = 0;
  for(i=0;i<$(".card").length;i++){
    if($(".card").eq(i)){
      var currentHeight = $(".card").eq(i).height();
      if(currentHeight>=maxHeight){
        maxHeight = currentHeight;
      }
    }
    else{
      break;
    }
  }
  $(".card").height(maxHeight);
});
