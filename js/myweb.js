/* 创建于2018/5/17 */

/* 上一步，下一步的效果 */

$(function(){
    $(".nexta").click(
        function(){
        /* 刚用click没反应，是a有个默认行为 */
        /*$("#nextdiv").css({"display":"none"});
        $("#prediv").css({"display":"block"});*/
            $("#nextdiv").fadeOut();   //淡出，出去了即隐藏
            $("#prediv").fadeIn();
        }
    );

    $(".prea").click(
        function(){
            $("#nextdiv").fadeIn();  //slideDown向下滑动显示
            $("#prediv").fadeOut();     //slideUp隐藏
        }
    );
});



window.onload=function(){
    var nexta=document.getElementsByClassName("nexta");
    var prea=document.getElementsByClassName("prea");
    var nextdiv=document.getElementById("next");
    var prediv=document.getElementById("pre");

    nexta.onclick=function(){
        nextdiv.addClassName="hide";
        prediv.addClassName="show";
    }
}






