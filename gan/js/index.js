/**
 * Created by sallon on 2015/3/17.
 */
$(function(){
    $("#page1").swipeUp(function(){
        showPgaeTwo();
    });
    $("#page2").swipeUp(function(){
        showPageThree();
    });
    $("#page2").swipeDown(function(){
        showPageOneAgain();
    });
    $("#page3").swipeUp(function(){
        showPageFour();
    });
    $("#page4").swipeUp(function(){
        showPageFive();
    });
    $("#page5").swipeUp(function(){
        showPageSix();
    });
    $("#page6").swipeUp(function(){
        showPageSeven();
    });
});
/*显示第一页*/
function showPageOne(){
    $("#page1").css("display","block").addClass("animated fadeIn");
    $("#text1").css("display","block").addClass("animated fadeInLeft");
    //setTimeout(function(){
    //    $("#page1").css("display","none").removeClass("animated fadeIn");
    //    $("#text1").css("display","none").removeClass("animated fadeInLeft");
    //},1000);
}
function showPageOneAgain(){
    $("#page2").addClass("animated fadeOutDown");
    $("#page1").css("display","block").removeClass("animated fadeOutUp").addClass("animated fadeIn");
    $("#text1").css("display","block").addClass("animated fadeInLeft");
}
/*显示第二页*/
function showPgaeTwo(){
    $("#page1").addClass("animated fadeOutUp");
    $("#page2").css("display","block").addClass("animated fadeInUp");
    setTimeout(function(){
        $("#text2").css("display","block").addClass("animated fadeInDown");
    },1000)
    setTimeout(function(){
        $(".map").css("display","block").addClass("animated zoomIn");
    },2000)
    setTimeout(function(){
        $(".yuan1").css("display","block").addClass("animated zoomIn");
    },2500)
    setTimeout(function(){
        $(".yuan2").css("display","block").addClass("animated zoomIn");
    },3000)
    setTimeout(function(){
        $(".yuan3").css("display","block").addClass("animated zoomIn");
    },3500)
    setTimeout(function(){
        $(".yuan3").css("display","block").addClass("animated zoomIn");
    },3500)
    setTimeout(function(){

    },3500)
}
/*显示第三页*/
function showPageThree(){
    $("#page2").addClass("animated fadeOutUp");
    $("#page3").css("display","block").addClass("animated fadeInUp");
    setTimeout(function(){
        $(".gan").css("display","block").addClass("animated fadeInDown");
    },1000)
    setTimeout(function(){
        $("#text3").css("display","block").addClass("animated fadeInUp");
    },2000)
}
/*显示第四页*/
function showPageFour(){
    $("#page3").addClass("animated fadeOutUp");
    $("#page4").css("display","block").addClass("animated fadeInUp");
    setTimeout(function(){
        $("#text4").css("display","block").addClass("animated fadeInDown");
    },1000)
}

/*显示第五页*/
function showPageFive(){
    $("#page4").addClass("animated fadeOutUp");
    $("#page5").css("display","block").addClass("animated fadeInUp");
    setTimeout(function(){
        $("#text5").css("display","block").addClass("animated fadeInDown");
    },1000)
}
/*显示第六页*/
function showPageSix(){
    $("#page5").addClass("animated fadeOutUp");
    $("#page6").css("display","block").addClass("animated zoomIn");
    setTimeout(function(){
        $(".xin").css("display","block").addClass("animated zoomIn");
    },1000)
    setTimeout(function(){
        $("#text6").css("display","block").addClass("animated fadeInDown");
    },2000)
    setTimeout(function(){
        $(".bottomImg").css("display","block").addClass("animated fadeInUp");
    },2500)
}
/*显示第七页*/
function showPageSeven(){
    $("#page6").addClass("animated fadeOutUp");
    $(".swipeImg").css("display","none");
    $("#page7").css("display","block").addClass("animated fadeInUp");

    //setTimeout(function(){
    //    $(".xin").css("display","block").addClass("animated zoomIn");
    //},1000)
    //setTimeout(function(){
    //    $("#text6").css("display","block").addClass("animated fadeInDown");
    //},2000)
    //setTimeout(function(){
    //    $(".bottomImg").css("display","block").addClass("animated fadeInUp");
    //},2500)
}
