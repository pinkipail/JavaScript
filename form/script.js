$(document).ready(function(){
    $(".default_option").click(function(event){
      $(this).parent().toggleClass("active");
   
    })


    $(".select_ul .option").click(function(){
      var currentele = $(this).html();
      $(this).parents(".select_wrap").children(".default_option").children(".option").html(currentele);
      $(this).parents(".select_wrap").removeClass("active");
    })
});