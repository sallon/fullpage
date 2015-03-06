/**
 * Created by sallon on 2015/3/6.
 */
var core = 0;
var userName = "";
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
        core = core + 5;
        showScore();
    });
    $("#q8b").on("tap",function(){
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
    $("#advimg").addClass("animated flipOutY");
    setTimeout(function(){
        $("#advimg").removeClass("animated flipOutY");
    },500);
    $("#advimg").attr("src","images/"+num+".png?v=1");
    setTimeout(function(){
        $("#advimg").removeClass("hide").addClass("animated flipInX");
        setTimeout(function(){
            $("#advimg").removeClass("animated flipInX");
        },1000);
    },1000);
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

var imgUrl = 'http://zhendongtg.duapp.com/images/home/share.jpg';  // 分享后展示的一张图片
var lineLink = 'http://zhendongtg.duapp.com/index.html'; // 点击分享后跳转的页面地址
var descContent = $("#inputIn").val() + ""+core;  // 分享后的描述信息
var shareTitle = 'xx';  // 分享后的标题
var appid = '';  // 应用id,如果有可以填，没有就留空

function shareFriend() {
    WeixinJSBridge.invoke('sendAppMessage',{
        "appid": appid,
        "img_url": imgUrl,
        "img_width": "200",
        "img_height": "200",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function(res) {
        //_report('send_msg', res.err_msg);  // 这是回调函数，必须注释掉
    })
}
function shareTimeline() {
    WeixinJSBridge.invoke('shareTimeline',{
        "img_url": imgUrl,
        "img_width": "200",
        "img_height": "200",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function(res) {
        //_report('timeline', res.err_msg); // 这是回调函数，必须注释掉
    });
}
function shareWeibo() {
    WeixinJSBridge.invoke('shareWeibo',{
        "content": descContent,
        "url": lineLink
    }, function(res) {
        //_report('weibo', res.err_msg);
    });
}
// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    // 发送给好友
    WeixinJSBridge.on('menu:share:appmessage', function(argv){
        shareFriend();
    });
    // 分享到朋友圈
    WeixinJSBridge.on('menu:share:timeline', function(argv){
        shareTimeline();
    });
    // 分享到微博
    WeixinJSBridge.on('menu:share:weibo', function(argv){
        shareWeibo();
    });
}, false);