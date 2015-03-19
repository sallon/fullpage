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
    $("#page3").swipeDown(function(){//第三页向上滑上去显示第二页
        showPgaeTwoAgain();
    });

    $("#page4").swipeUp(function(){
        showPageFive();
    });
    $("#page4").swipeUp(function(){//第四页向上滑上去显示第三页
        showPageThreeAgain();
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
}
function showPageOneAgain(){
    $("#page2").addClass("animated fadeOutDown");
    $("#page1").css("display","block").removeClass("animated fadeOutUp").addClass("animated fadeIn");
    $("#text1").css("display","block").addClass("animated fadeInLeft");
    //清楚第二页上面的动画
    $("#page2").css("display","none").removeClass("animated fadeInUp fadeOutDown");
    $("#text2").css("display","none").removeClass("animated fadeInDown");
    $(".map").css("display","none").removeClass("animated zoomIn");
    $(".yuan1").css("display","none").removeClass("animated zoomIn");
    $(".yuan2").css("display","none").removeClass("animated zoomIn");
    $(".yuan3").css("display","none").removeClass("animated zoomIn");
    $(".yuan3").css("display","none").removeClass("animated zoomIn");
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
    //清除第一页上面的动画class
    $("#page1").css("display","none").removeClass("animated fadeIn fadeOutUp");
    $("#text1").css("display","none").removeClass("animated fadeInLeft");
}

function showPgaeTwoAgain(){
    $("#page3").addClass("animated fadeOutDown");
    $("#page2").css("display","block").addClass("animated fadeInDown");
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
    //清楚第三页上面的动画
    $("#page3").css("display","none").removeClass("animated fadeInUp fadeOutDown");
    $(".gan").css("display","none").removeClass("animated fadeInDown");
    $("#text3").css("display","none").removeClass("animated fadeInUp");
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
    //清楚第二页上面的动画
    $("#page2").css("display","none").removeClass("animated fadeInUp fadeOutUp");
    $("#text2").css("display","none").removeClass("animated fadeInDown");
    $(".map").css("display","none").removeClass("animated zoomIn");
    $(".yuan1").css("display","none").removeClass("animated zoomIn");
    $(".yuan2").css("display","none").removeClass("animated zoomIn");
    $(".yuan3").css("display","none").removeClass("animated zoomIn");
    $(".yuan3").css("display","none").removeClass("animated zoomIn");
}

function showPageThreeAgain(){
    $("#page4").addClass("animated fadeOutDown");
    $("#page3").css("display","block").addClass("animated fadeInUp");
    setTimeout(function(){
        $(".gan").css("display","block").addClass("animated fadeInDown");
    },1000)
    setTimeout(function(){
        $("#text3").css("display","block").addClass("animated fadeInUp");
    },2000)
    //清楚第四页上面的动画
    $("#page4").css("display","none").removeClass("animated fadeInUp fadeOutDown");
    $("#text4").css("display","none").removeClass("animated fadeInDown");
}

/*显示第四页*/
function showPageFour(){
    $("#page3").addClass("animated fadeOutUp");
    $("#page4").css("display","block").addClass("animated fadeInUp");
    setTimeout(function(){
        $("#text4").css("display","block").addClass("animated fadeInDown");
    },1000)
    //清楚第三页上面的动画
    $("#page3").css("display","none").removeClass("animated fadeInUp fadeOutUp");
    $(".gan").css("display","none").removeClass("animated fadeInDown");
    $("#text3").css("display","none").removeClass("animated fadeInUp");
}

/*显示第五页*/
function showPageFive(){
    $("#page4").addClass("animated fadeOutUp");
    $("#page5").css("display","block").addClass("animated fadeInUp");
    setTimeout(function(){
        $("#text5").css("display","block").addClass("animated fadeInDown");
    },1000)
    //清楚第四页上面的动画
    $("#page4").css("display","none").removeClass("animated fadeInUp fadeOutUp");
    $("#text4").css("display","none").removeClass("animated fadeInDown");
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
    //清楚第五页上面的动画
    $("#page5").css("display","none").removeClass("animated fadeInUp fadeOutUp");
    $("#text5").css("display","none").removeClass("animated fadeInDown");
}
/*显示第七页*/
function showPageSeven(){
    $("#page6").addClass("animated fadeOutUp");
    $(".swipeImg").css("display","none");
    $("#page7").css("display","block").addClass("animated fadeInUp");

}
