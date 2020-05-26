// console.log("hello world");    // console.log($("#my_footer")); $("#my_footer");


$(document).ready(function() {
    // adds then removes background colour when its button is on then off it respectively
       $("#stream1_btn").mouseenter(function() {
          $(".stream1").removeClass('highlight_stream');
          $(".stream2").removeClass('highlight_stream');
          $(".stream3").removeClass('highlight_stream');
          $(".stream1").addClass('highlight_stream');
   });
       $("#stream2_btn").mouseenter(function() {
          $(".stream1").removeClass('highlight_stream');
          $(".stream2").removeClass('highlight_stream');
          $(".stream3").removeClass('highlight_stream');
          $(".stream2").addClass('highlight_stream');
   });
      $("#stream3_btn").mouseenter(function() {
          $(".stream1").removeClass('highlight_stream');
          $(".stream2").removeClass('highlight_stream');
          $(".stream3").removeClass('highlight_stream');
          $(".stream3").addClass('highlight_stream');
   });


   //when cursor hovers over button, respective streams highlight also
       $("#stream1_btn").mouseleave(function() {
          $(".stream1").removeClass('highlight_stream');
          $(".stream2").removeClass('highlight_stream');
          $(".stream3").removeClass('highlight_stream');
        // $(".stream1").addClass('highlight_stream');
   });
        $("#stream2_btn").mouseleave(function() {
          $(".stream1").removeClass('highlight_stream');
          $(".stream2").removeClass('highlight_stream');
          $(".stream3").removeClass('highlight_stream');
        // $(".stream2").addClass('highlight_stream');
   });
        $("#stream3_btn").mouseleave(function() {
          $(".stream1").removeClass('highlight_stream');
          $(".stream2").removeClass('highlight_stream');
          $(".stream3").removeClass('highlight_stream');
        // $(".stream3").addClass('highlight_stream');
   });


    //hides respective info blocks with the same stream classes
        $("#stream1_btn").mouseenter(function() {
          $(".stream1").hide("slow");
          $(".stream2").hide("slow");
   });

    //brings back respective info blocks with the same stream classes
        $("#stream1_btn").mouseenter(function() {
          $(".stream1").show("slow");
          $(".stream2").show("slow");
   });

       //hidesrespective info blocks with the same stream classes AGAIN
        $("#stream1_btn").mouseenter(function() {
          $(".stream1").toggle("slow");
          $(".stream2").toggle("slow");
   });

    //slides the respective classes upwards
        $("#stream1_btn").mouseenter(function() {
          $(".stream3").slideUp("fast");
   });

    //slides the respective classes downwards
        $("#stream1_btn").mouseenter(function() {
          $(".stream3").slideDown(1000);
   });

    //does opposite of the respective's current slideup/down position
        $("#stream1_btn").mouseenter(function() {
          $(".stream3").slideToggle("slow");
   });

    //fades out respective's position
        $("#stream2_btn").mouseenter(function() {
          $(".stream1").fadeOut("3000");
   });

    //fades in respective's position
        $("#stream2_btn").mouseenter(function() {
          $(".stream1").fadeIn("slow");
   });

    //does opposite of current fade in/out position
        $("#stream2_btn").mouseenter(function() {
          $(".stream1").fadeToggle("slow");
   });

    //fades element at a certain speed rate to opaque
        $("#stream3_btn").mouseenter(function() {
          $(".stream3").fadeTo("slow", 0);
   });

    //fades element at a certain speed rate to transparent
        $("#stream3_btn").mouseenter(function() {
          $(".stream3").fadeTo("slow", 1);
   });

    //attr tells you the attribute values for the said attribute you put in
        console.log($(".stream3").attr("class"));

       
       $("#stream2_btn").mouseenter(function() {
        $(".stream1").slideDown().slideUp();
      });   

        $(".stream1 p").removeClass("card_para").addClass("underline")
        $("a").attr("href", "wiki.com");

        $("button").mouseenter(function(){
            $("button").addClass("hover-in").removeClass("hover-out");
        });
        
        $("button").mouseleave(function(){
            $("button").addClass("hover-out").removeClass("hover-in");
        });      
        
        













































}); 





