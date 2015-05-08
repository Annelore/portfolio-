var main = function() { "use strict"
  $("li").on("click", function(){
    $("home").toggleClass("hidden");
    $("about").toggleClass("hidden");
    

  });
}

$("document").ready(main);