/**
 * Created by sallon on 2015/3/17.
 */
$(function(){
    autoPlay();
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
    $("#page4").swipeDown(function(){//第四页向上滑上去显示第三页
        showPageThreeAgain();
    });

    $("#page5").swipeUp(function(){
        showPageSix();
    });
    $("#page5").swipeDown(function(){//第五页向上滑上去显示第三页
        showPageFourAgain();
    });

    $("#page6").swipeUp(function(){
        showPageSeven();
    });
    $("#page6").swipeDown(function(){
        showPageFiveAgain();
    });
    $("#page7").swipeDown(function(){
        showPageSixAgain();
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
    setTimeout(function(){
        $("#page2").css("display","none").removeClass("animated fadeInUp fadeOutDown");
        $("#text2").css("display","none").removeClass("animated fadeInDown");
        $(".map").css("display","none").removeClass("animated zoomIn");
        $(".yuan1").css("display","none").removeClass("animated zoomIn");
        $(".yuan2").css("display","none").removeClass("animated zoomIn");
        $(".yuan3").css("display","none").removeClass("animated zoomIn");
    },1000)
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
        //清除第一页上面的动画class
        $("#page1").css("display","none").removeClass("animated fadeIn fadeOutUp");
        $("#text1").css("display","none").removeClass("animated fadeInLeft");
    },1000)
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
    setTimeout(function(){
        $("#page3").css("display","none").removeClass("animated fadeInUp fadeOutDown");
        $(".gan1,.gan2,.gan3,.gan4").css("display","none").removeClass("animated fadeInDown");
        $(".jian1,.jian2,.jian3").css("display","none").removeClass("animated fadeIn");
        $("#text3").css("display","block").addClass("animated fadeInUp");
    },1000)
}

/*显示第三页*/
function showPageThree(){
    $("#page2").addClass("animated fadeOutUp");
    $("#page3").css("display","block").addClass("animated fadeInUp");
    setTimeout(function(){
        $(".gan1").css("display","block").addClass("animated fadeInDown");
    },1000)
    setTimeout(function(){
        $(".gan2").css("display","block").addClass("animated fadeInDown");
    },1700)
    setTimeout(function(){
        $(".gan3").css("display","block").addClass("animated fadeInDown");
    },2500)
    setTimeout(function(){
        $(".gan4").css("display","block").addClass("animated fadeInDown");
    },3200)
    setTimeout(function(){
        $(".jian1,.jian2,.jian3").css("display","block").addClass("animated fadeIn");
    },3700)
    setTimeout(function(){
        $("#text3").css("display","block").addClass("animated fadeInUp");
    },4500)
    //清楚第二页上面的动画
    setTimeout(function(){
        $("#page2").css("display","none").removeClass("animated fadeInUp fadeOutUp");
        $("#text2").css("display","none").removeClass("animated fadeInDown");
        $(".map").css("display","none").removeClass("animated zoomIn");
        $(".yuan1").css("display","none").removeClass("animated zoomIn");
        $(".yuan2").css("display","none").removeClass("animated zoomIn");
        $(".yuan3").css("display","none").removeClass("animated zoomIn");
        $(".yuan3").css("display","none").removeClass("animated zoomIn");
    },1000)
}

function showPageThreeAgain(){
    $("#page4").addClass("animated fadeOutDown");
    $("#page3").css("display","block").addClass("animated fadeInDown");
    setTimeout(function(){
        $(".gan1").css("display","block").addClass("animated fadeInDown");
    },1000)
    setTimeout(function(){
        $(".gan2").css("display","block").addClass("animated fadeInDown");
    },1700)
    setTimeout(function(){
        $(".gan3").css("display","block").addClass("animated fadeInDown");
    },2500)
    setTimeout(function(){
        $(".gan4").css("display","block").addClass("animated fadeInDown");
    },3200)
    setTimeout(function(){
        $(".jian1,.jian2,.jian3").css("display","block").addClass("animated fadeIn");
    },3700)
    setTimeout(function(){
        $("#text3").css("display","block").addClass("animated fadeInUp");
    },4500)
    //清楚第四页上面的动画
    setTimeout(function(){
        $("#page4").css("display","none").removeClass("animated fadeInUp fadeOutDown");
        $("#text4").css("display","none").removeClass("animated fadeInDown");
    },1000)
}

/*显示第四页*/
function showPageFour(){
    $("#page3").addClass("animated fadeOutUp");
    $("#page4").css("display","block").addClass("animated fadeInUp");
    setTimeout(function(){
        $("#text4").css("display","block").addClass("animated fadeInDown");
    },1000)
    //清楚第三页上面的动画
    setTimeout(function(){
        $("#page3").css("display","none").removeClass("animated fadeInDown fadeOutUp");
        $(".gan1,.gan2,.gan3,.gan4").css("display","none").removeClass("animated fadeInDown");
        $(".jian1,.jian2,.jian3").css("display","none").removeClass("animated fadeIn");
        $("#text3").css("display","none").removeClass("animated fadeInUp");
    },1000)
}
function showPageFourAgain(){
    $("#page5").addClass("animated fadeOutDown");
    $("#page4").css("display","block").addClass("animated fadeInDown");
    setTimeout(function(){
        $("#text4").css("display","block").addClass("animated fadeInDown");
    },1000)
    //清楚第五页上面的动画
    setTimeout(function(){
        $("#page5").css("display","none").removeClass("animated fadeInUp fadeOutDown");
        $("#text5").css("display","none").removeClass("animated fadeInRight");
    },2000)
}

/*显示第五页*/
function showPageFive(){
    $("#page4").addClass("animated fadeOutUp");
    $("#page5").css("display","block").addClass("animated fadeInUp");
    setTimeout(function(){
        $("#text5").css("display","block").addClass("animated fadeInRight");
    },1000)
    //清楚第四页上面的动画
    setTimeout(function(){
        $("#page4").css("display","none").removeClass("animated fadeInUp fadeOutUp");
        $("#text4").css("display","none").removeClass("animated fadeInDown");
    },1000)
}

function showPageFiveAgain(){
    $("#page6").addClass("animated fadeOutDown");
    $("#page5").css("display","block").addClass("animated fadeInDown");
    setTimeout(function(){
        $("#text5").css("display","block").addClass("animated fadeInRight");
    },1000)
    //清楚第四页上面的动画
    setTimeout(function(){
        $("#page6").css("display","none").removeClass("animated fadeInUp fadeOutDown");
            $(".xin").css("display","none").removeClass("animated zoomIn");
            $("#text6").css("display","none").removeClass("animated fadeInDown");
            $(".bottomImg").css("display","none").removeClass("animated fadeInUp");
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
    //清楚第五页上面的动画
    setTimeout(function(){
        $("#page5").css("display","none").removeClass("animated fadeInUp fadeOutUp");
        $("#text5").css("display","none").removeClass("animated fadeInDown");
    },1000)
}

function showPageSixAgain(){
    $("#page7").addClass("animated fadeOutDown");
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
    //清楚第七页上面的动画
    setTimeout(function(){
        $("#page7").css("display","none").removeClass("animated fadeInUp fadeOutDown");
        $(".countOfUser").hide();
        $(".qipao").css("display","none").removeClass("animated fadeInUp");
        $(".point").css("display","none").removeClass("animated flash");
        $(".countOfUser").hide();
        $(".leaf").css("display","none").removeClass("animated zoomIn");
        $(".makeSure").hide();
        $(".lastImg").hide();
        $(".makeSure").hide();
        $(".leaf").hide();
        $(".inputResult").css("display","none").removeClass("animated zoomIn");
        $(".invite").css("display","none").removeClass("animated fadeInDown");
        $(".countOfUserAgain").css("display","none").removeClass("animated zoomIn");
        $(".page7_2").css("display","none").removeClass("animated fadeIn");
        $(".page7_3").css("display","none").removeClass("animated fadeIn");
    },1000)
}
/*显示第七页*/
function showPageSeven(){
    $("#page6").addClass("animated fadeOutUp");
    $(".swipeImg").css("display","none");
    $("#page7").css("display","block").addClass("animated fadeInUp");
    setTimeout(function(){
        $(".countOfUser").show();
    },1000)
    setTimeout(function(){
        $(".qipao").css("display","block").addClass("animated fadeInUp");
    },1300)
    setTimeout(function(){
        $(".point").css("display","block").addClass("animated fadeInRight");
        setTimeout(function(){
            $(".point").removeClass("animated fadeInRight").addClass("animated flash");
            setTimeout(function(){
                $(".point").css("display","none").removeClass("animated flash");
                $(".page7_2").css("display","block").addClass("animated fadeIn");
            },3000)
        },3000)
    },2000)
    /*清除第六页上面的动画*/
    setTimeout(function(){
        $("#page6").css("display","none").removeClass("animated zoomIn");
        $(".xin").css("display","none").removeClass("animated zoomIn");
        $("#text6").css("display","none").removeClass("animated fadeInDown");
        $(".bottomImg").css("display","none").removeClass("animated fadeInUp");
    },1000)
}
/*点击叶子显示输入框*/
$(".page7_2").tap(function(){
    //$(".point").hide();

    $(".countOfUser").hide();
    $(".leaf").css("display","block").addClass("animated zoomIn");
    $(".page7_3").css("display","block").addClass("animated fadeIn");
    $(".makeSure").show();
})
$(".point").tap(function(){
    $(".point").hide();
    $(".countOfUser").hide();
    $(".leaf").css("display","block").addClass("animated zoomIn");
    $(".page7_3").css("display","block").addClass("animated fadeIn");
    $(".makeSure").show();
})
$(".makeSure").tap(function(){
    $(".makeSure").hide();
    $(".leaf").hide();
    $(".qipao").hide();
    $(".countOfUserAgain").css("display","block").addClass("animated zoomIn");
    $(".inputResult").css("display","block").addClass("animated zoomIn");
    $(".invite").css("display","block").addClass("animated fadeInDown");

});
$(".invite").tap(function(){
    $("title").text($("#sname").val()+"邀你一起为肝病患者加油！")
    $(".lastImg").show();
});
$(".lastImg").tap(function(){
    $(".lastImg").hide();
});