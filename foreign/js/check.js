/**
 * Created by SALLON on 2015/4/27.
 */
$(function () {
    $("input[type='checkbox']").change(function(){
        if($(this).is(":checked")){
            $(this).parent().addClass("checked");
        }else{
            $(this).parent().removeClass("checked");
        }
    });
    $("input[type='radio']").change(function(){
        if($(this).is(":checked")){
            $(this).parents(".sRadio").find(".radioBox").removeClass("openRadio");
            $(this).parent().addClass("openRadio");
        }else{
            $(this).parent().removeClass("openRadio");
        }
    });
})
