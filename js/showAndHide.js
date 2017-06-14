$( document ).ready(function() {
$(".btn").click(function() {
  
   var lable = $(".btn").text().trim();

   if(lable == "HIDE") {
     $(".btn").text("SEE ALL");
     $(".hide-show").hide();
   }
   else {
     $(".btn").text("HIDE");
     $(".hide-show").show();
   }
    
  });
});