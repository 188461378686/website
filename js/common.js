
    var timer=setInterval(function(){
        $('.click-label img').toggleClass('click-btn')

    },500);
    $(".btn").on("click",function(){
        $(".main-wrap").animate({
            left:'-=200',
        },500);
       $('.nav-btn').animate({
           opacity:'0',
           zIndex:'0',
       },16);
        $('.hide-nav-btn').animate({
            opacity:'1',
            zIndex:'1111',
        },16)
        $('.click-label img').css('display','none');
    });
    $(".hide-btn").add(".main-nav").on("click",function(){
        $(".main-wrap").animate({
            left:'0'
        },500);
        $('.nav-btn').animate({
            opacity:'1',
            zIndex:'1111',
        },16);
        $('.hide-nav-btn').animate({
            opacity:'0',
            zIndex:'0',
        },16)
    })


$(".options li a").on("click",function(){
     let cla=$(this).attr("href");
    $(cla).addClass("active").siblings().removeClass("active");

});
/*手风琴效果 开始*/
    $(".solution-item li").eq(0).css('width','375px');
    $(".num").mouseenter(function(){//如果要点击效果,把mouseenter改成click
        $(".solution-item li").stop(true,true);
        $(this).css({"background-color":"#81aa98"}).find("h1").css({"color":"#fff"}).find('img').attr('src','./images/RISS2.png');
        $(this).parent().siblings().find(".num").css({"background-color":"#e5e5e5"}).find("h1").css("color","#8a8a8a").find('img').attr('src','./images/RISS2-1.png');
        $(this).parent().animate({width:"407px"},500).siblings('li').animate({width:'60px'},500);
    });

/*手风琴效果 结束*/



