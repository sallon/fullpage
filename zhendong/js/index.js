/**
 * Created by sallon on 2015/3/6.
 */
var core = 0;
var userName = "";
var title='';
$(function(){
    showPage0();
    $("#inputIn").on("focus",function(){
        var val = $(this).val();
        if(val == "输入TA的姓名"){
            $(this).val("");
        }
    }).on("blur",function(){
        var val = $(this).val();
        if(val == ""){
            $(this).val("输入TA的姓名");
        }else{
            userName =$(this).val();
        }
    })
    $("#q1a").on("tap",function(){
        changePage(1,2);
        changeFooterImg(2);
        core = core + 5;
    });
    $("#q1b").on("tap",function(){
        changePage(1,2);
        changeFooterImg(2);
        core = core + 12;
    });
    $("#q2a").on("tap",function(){
        changePage(2,3);
        changeFooterImg(3);
        core = core + 5;
    });
    $("#q2b").on("tap",function(){
        changePage(2,3);
        changeFooterImg(3);
        core = core + 12;
    });

    $("#q3a").on("tap",function(){
        changePage(3,4);
        changeFooterImg(4);
        core = core + 5;
    });
    $("#q3b").on("tap",function(){
        changePage(3,4);
        changeFooterImg(4);
        core = core + 12;
    });

    $("#q4a").on("tap",function(){
        changePage(4,5);
        changeFooterImg(5);
        core = core + 5;
    });
    $("#q4b").on("tap",function(){
        changePage(4,5);
        changeFooterImg(5);
        core = core + 12;
    });

    $("#q5a").on("tap",function(){
        changePage(5,6);
        changeFooterImg(6);
        core = core + 5;
    });
    $("#q5b").on("tap",function(){
        changePage(5,6);
        changeFooterImg(6);
        core = core + 12;
    });

    $("#q6a").on("tap",function(){
        changePage(6,7);
        changeFooterImg(7);
        core = core + 5;
    });
    $("#q6b").on("tap",function(){
        changePage(6,7);
        changeFooterImg(7);
        core = core + 12;
    });

    $("#q7a").on("tap",function(){
        changePage(7,8);
        changeFooterImg(8);
        core = core + 5;
    });
    $("#q7b").on("tap",function(){
        changePage(7,8);
        changeFooterImg(8);
        core = core + 12;
    });
    $("#q8a").on("tap",function(){
        changeFooterImg("9");
        core = core + 5;
        showScore();
    });
    $("#q8b").on("tap",function(){
        changeFooterImg("9");
        core = core + 12;
        showScore();
    });
    $("#shareBtn").on("tap",function(){
        $(".sharePop").removeClass("hide");
    })
    $(".sharePop").on("tap",function(){
        $(".sharePop").addClass("hide");
    })
    $("#againBtn").on("tap",function(){
        window.location.reload();
    });
    autoPlay();
})
function showPage0(){
    setTimeout(function(){
        $(".page-0").removeClass("hide");
    },50)
    setTimeout(function(){
        $("#text1").removeClass("hide").addClass("animated fadeInDown");
    },100);
    setTimeout(function(){
        $("#input").removeClass("hide").addClass("animated fadeInLeft");
    },200);
    setTimeout(function(){
        $("#text2").removeClass("hide").addClass("animated fadeInRight");
    },300);
    setTimeout(function(){
        $("#sanba").removeClass("hide").addClass("animated rotateIn");
    },400);
    setTimeout(function(){
        $("#text1").removeClass("animated fadeInDown")
        $("#input").removeClass("animated fadeInLeft");
        $("#input input").val("输入TA的姓名");
        $("#text2").removeClass("animated fadeInRight");
        $("#sanba").removeClass("animated rotateIn");
    },1000);

}
function showScore(){
    $(".page-8").addClass("animated slideOutUp");
    $("#score").html(core);
    $("#page-score").removeClass("hide").addClass("animated slideInDown");
    $("#advimg").attr("src","images/9.png")
    $("title").text("#"+$("#inputIn").val()+"#的三(chun)八(meng)指数竟然高达"+core+"%");
    setTimeout(function(){
        $("#inputIn").val("");
    },1000);

}
function changePage(num,num1){
    if(num == "1"){
        $(".page-1").addClass("hide");
        $(".page-"+num1).removeClass("hide").addClass("animated fadeInDown");
    }else{
        $(".page-"+num).addClass("animated fadeOutUp");
        $(".page-"+num1).removeClass("hide").addClass("animated fadeInDown");
    }

}
function changeFooterImg(num){
    if(num!="9"){
        $(".advimg img").remove();
        $(".advimg").html('<img src="images/newpage/'+num+'.png" class="advimg_img im'+num+'">');
        setTimeout(function(){
            if(num=="1"){
                $(".advimg .advimg_img").addClass("animated wobble");
                setTimeout(function(){
                    $(".advimg .advimg_img").removeClass("animated wobble");
                },300);
            }else if(num=="2"){
                $(".advimg .advimg_img").addClass("animated flip");
                $(".advimg .advimg_img").removeClass("im1");
                setTimeout(function(){
                    $(".advimg .advimg_img").removeClass("animated flip");
                },300);
            }else if(num=="3"){
                $(".advimg .advimg_img").addClass("animated wobble");
                $(".advimg .advimg_img").removeClass("im2");
                setTimeout(function(){
                    $(".advimg .advimg_img").removeClass("animated wobble");
                },300);
            }else if(num=="4"){
                $(".advimg .advimg_img").addClass("animated bounceIn");
                $(".advimg .advimg_img").removeClass("im3");
                setTimeout(function(){
                    $(".advimg .advimg_img").removeClass("animated bounceIn");
                },300);
            }else if(num=="5"){
                $(".advimg .advimg_img").addClass("animated flip");
                $(".advimg .advimg_img").removeClass("im4");
                setTimeout(function(){
                    $(".advimg .advimg_img").removeClass("animated flip");
                },300);
            }else if(num=="6"){
                $(".advimg .advimg_img").addClass("animated wobble");
                $(".advimg .advimg_img").removeClass("im5");
                setTimeout(function(){
                    $(".advimg .advimg_img").removeClass("animated wobble");
                },300);
            }else if(num=="7"){
                $(".advimg .advimg_img").addClass("animated bounceIn");
                $(".advimg .advimg_img").removeClass("im6");
                setTimeout(function(){
                    $(".advimg .advimg_img").removeClass("animated bounceIn");
                },300);
            }else if(num=="8"){
                $(".advimg .advimg_img").addClass("animated rubberBand");
                $(".advimg .advimg_img").removeClass("im7");
                setTimeout(function(){
                    $(".advimg .advimg_img").removeClass("animated rubberBand");
                },300);
            }
        },100);
    }else if(num == "9"){
        $(".advimg").addClass("hide");
        $(".lastBg").removeClass("hide");
    }
    //setTimeout(function(){
    //    $("#advimg").removeClass("hide").addClass("animated wobble");
    //    setTimeout(function(){
    //        $("#advimg").removeClass("animated wobble");
    //    },1000);
    //},500);
}
$("#starBtn").on("tap",function(){
    if($("#inputIn").val()=="" || $("#inputIn").val() == "输入TA的姓名"){
        $("#input").removeClass("fadeInLeft").addClass("animated shake");
        setTimeout(function(){
            $("#input").removeClass("animated shake");
        },1000)
    }else{
        $(".page-0").addClass("animated slideOutUp");
        $(".page-1").removeClass("hide").addClass("animated slideInDown");
        $(".footer").removeClass("hide").addClass("animated rotateInDownLeft");
    }
})
