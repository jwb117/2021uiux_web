
$(document).ready(function(){
  // 1menu
  const oneTop = $("#v01s").offset().top;
  const twoTop = $("#v02s").offset().top;
  const threeTop = $("#v03s").offset().top;

  // $(".menu > a").eq(0).on("click", function(){}); 온다음에 클릭이벤트, 무명함수 지정형

  // $(".menu > a").eq(0).click(function(){
  //   $("html, body").animate({scrollTop:oneTop}, 1000);
  // });
  // $(".menu > a").eq(1).click(function(){
  //   $("html, body").animate({scrollTop:twoTop}, 1000);
  // });
  // $(".menu > a").eq(2).click(function(){
  //   $("html, body").animate({scrollTop:threeTop}, 1000);
  // });

  // for(let i=0; i< $(".menu>a").length; i++){
  //   $(".menu>a").eq(i).click(function(){
  //     $("html, body").animate({scrollTop:$(".scene").eq(i).offset().top}, 1000);
  //   });
  // }

    // $(".menu>a").click(function(){
    //   let i = $(this).index();
    //   const st = $(".scene").eq(i).offset().top
    //   $("html, body").animate({scrollTop:st}, 1000);
    // });

    $(".menu>a").click(function(){
      let target = $(this.hash);
      console.log(target);
      const st = target.offset().top;
      $("html,body").animate({scrollTop:st}, 1000);
    });

    // $(window).scroll(function(){
    //   let scrollY = $(window).scrollTop();
    //   console.log(scrollY);
    //   if(scrollY >= $(".scene").eq(0).offset().top){
    //     $(".menu>a").removeClass("active").eq(0).addClass("active");
    //   }
    //   if(scrollY >= $(".scene").eq(1).offset().top){
    //     $(".menu>a").removeClass("active").eq(1).addClass("active");
    //   }
    //   if(scrollY >= $(".scene").eq(2).offset().top){
    //     $(".menu>a").removeClass("active").eq(2).addClass("active");
    //   }
    // });
    $(window).scroll(function(){
    for(i=0; i<$(".scene").length; i++){
      let scrollY = $(window).scrollTop();
      console.log(scrollY);
      let st = $(".scene").eq(i).offset().top
        if(scrollY >= st){$(".menu>a").removeClass("active").eq(i).addClass("active");
       }
     }
    });

});
