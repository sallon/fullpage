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
    $("#page3").swipeUp(function(){
        showPageFour();
    });
    $("#page4").swipeUp(function(){
        showPageFive();
    });
    $("#page5").swipeUp(function(){
        showPageSix();
    });
});
/*��ʾ��һҳ*/
function showPageOne(){
    $("#page1").css("display","block").addClass("animated fadeIn");
    $("#text1").css("display","block").addClass("animated fadeInLeft");
    setTimeout(function(){
        $("#page1").removeClass("animated fadeIn");
        $("#text1").removeClass("animated fadeInLeft");
    },1000);
}
/*��ʾ�ڶ�ҳ*/
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
}
/*��ʾ����ҳ*/
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
/*��ʾ����ҳ*/
function showPageFour(){
    $("#page3").addClass("animated fadeOutUp");
    $("#page4").css("display","block").addClass("animated fadeInUp");
    setTimeout(function(){
        $("#text4").css("display","block").addClass("animated fadeInDown");
    },1000)
}

/*��ʾ����ҳ*/
function showPageFive(){
    $("#page4").addClass("animated fadeOutUp");
    $("#page5").css("display","block").addClass("animated fadeInUp");
    setTimeout(function(){
        $("#text5").css("display","block").addClass("animated fadeInDown");
    },1000)
}
/*��ʾ����ҳ*/
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
