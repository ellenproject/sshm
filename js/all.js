$(document).ready(function(){
    //打字效果
    const str = "我是西亞船主，我們的船預計從阿拉伯半島地區，歷經數個月到東南亞及中國進行貿易。";

    const spans = '<span>'+str.split('').join('</span><span>')+'</span>';
    $(spans).hide().appendTo('.typing').each(function(i){
        $(this).delay(150*i).css({
            display: 'inline',
            opacity: 0,
        }).animate({
            opacity: 1,
        }, 100);
    })
    

    //popup
    $('.button').on('click', function(e){
        event.preventDefault();
        let item = $(this).data("item");
        $(`.show--${item}`).addClass('visible').siblings().removeClass('visible');
    });
    $('.overlay').on('click', function(e){
        // event.preventDefault();
        if($(event.target).is('.close') || $(event.target).is('.overlay')){
            // event.preventDefault();
            $(this).removeClass('visible');
        }
    })

    
    const gameAudio = document.querySelector(".game-audio")
    const rightAudio = document.querySelector(".right-audio")
    const wrongAudio = document.querySelector(".wrong-audio")
    const sailAudio = document.querySelector(".sail-audio")
    const list = document.querySelector(".list")
    const vid = document.querySelector(".myVideo")
    
    $(".mute-video").click(function(){
        if($("video").prop("muted")){
            
            $("video").prop("muted", false);
            $(".play").addClass("active");
            $(".pause").removeClass("active");
            
            
            if($("audio").prop("muted", false)){
                // if(!$(".show--4").hasClass("visible")){
                //     gameAudio.play();
                // }
                if(!$(".show--3").hasClass("visible") && !$(".show--4").hasClass("visible") && !$(".show--5").hasClass("visible")){
                    gameAudio.play();
                }else if(!$(".show--4").hasClass("visible")){
                    gameAudio.play();
                    list.addEventListener('click', function(e){
                        for(i=0; i<li.length; i++){
                            if(e.target.getAttribute("data-num") == "1"){
                                wrongAudio.play();
                                wrongAudio.currentTime = 0;
                            }else if(e.target.getAttribute("data-num") == "2"){
                                rightAudio.play();
                                rightAudio.currentTime = 0;
                                if(op4.classList.contains('op--4selected')){
                                    setTimeout(() => {
                                        gameAudio.pause();
                                        sailAudio.play();
                                    }, 4000);
                                }
                            }else if(e.target.getAttribute("data-num") == "3"){
                                wrongAudio.play();
                                wrongAudio.currentTime = 0;
                            }else if(e.target.getAttribute("data-num") == "4"){
                                rightAudio.play();
                                rightAudio.currentTime = 0;
                                if(op2.classList.contains('op--2selected')){
                                    setTimeout(() => {
                                        gameAudio.pause();
                                        sailAudio.play();
                                    }, 4000);
                                }
                            }
                        }
                    })
                }else if(!$(".show--5").hasClass("visible")){
                    gameAudio.pause();
                    sailAudio.play();
                }
                
                $(".button").on('click', function(e){
                    list.addEventListener('click', function(e){
                        for(i=0; i<li.length; i++){
                            if(e.target.getAttribute("data-num") == "1"){
                                wrongAudio.play();
                                wrongAudio.currentTime = 0;
                            }else if(e.target.getAttribute("data-num") == "2"){
                                rightAudio.play();
                                rightAudio.currentTime = 0;
                                if(op4.classList.contains('op--4selected')){
                                    setTimeout(() => {
                                        gameAudio.pause();
                                        sailAudio.play();
                                    }, 4000);
                                }
                            }else if(e.target.getAttribute("data-num") == "3"){
                                wrongAudio.play();
                                wrongAudio.currentTime = 0;
                            }else if(e.target.getAttribute("data-num") == "4"){
                                rightAudio.play();
                                rightAudio.currentTime = 0;
                                if(op2.classList.contains('op--2selected')){
                                    setTimeout(() => {
                                        gameAudio.pause();
                                        sailAudio.play();
                                    }, 4000);
                                }
                            }
                        }
                    })
                })
            }
        }else{
            $("video").prop("muted",true);
            $(".pause").addClass("active");
            $(".play").removeClass("active")

            $("audio").prop("muted",true)
        }
    });

    const li = document.getElementsByTagName('li');
    const emotion = document.querySelector('.emotion');
    const changeInfo = document.querySelector('.changeInfo');
    const op2 = document.querySelector('.op--2');
    const op4 = document.querySelector('.op--4');
    const link = document.querySelector('.link');
    const bgWrong = document.querySelector('.popup--3').style;
    bgWrong.setProperty('--background', 'url(../img/bg-dark.jpg) center center/cover no-repeat');
    const bgLayer = document.querySelector('.popup').style;
    bgLayer.setProperty('--z-index', '0');
    changeInfo.innerHTML = '<h2>船要開了，趕快將這次要帶的物品搬上船去！<br/>請幫我們選2件物品搬運上船。</h2>'
    
    function init(){
        emotion.style.background = "url(./img/char-01.png) center center / contain no-repeat"
        changeInfo.innerHTML = '<h2>船要開了，趕快將這次要帶的物品搬上船去！<br/>請幫我們選2件物品搬運上船。</h2>'
        bgWrong.setProperty('--background', 'url(../img/bg-dark.jpg) center center/cover no-repeat');
        bgLayer.setProperty('--z-index','0');
        $('.show--6').removeClass('v-answer');
        $('.show--7').removeClass('v-answer');
    }
    init();

    
    list.addEventListener('click', function(e){
        
        for(i=0; i<li.length; i++){
            
            if(e.target.getAttribute("data-num") == "1"){
                emotion.style.background = "url(./img/char-01-false.png) center center / contain no-repeat"
                changeInfo.innerHTML = '<h2>噢！這件物品沒看過，不是我們的，<br/>請再想想我們需要的物品。</h2>'
                $('.show--7').addClass('v-answer');
                bgLayer.setProperty('--z-index', '-1');
                setTimeout(() => {
                    init();
                }, 1000);
            }
            if(e.target.getAttribute("data-num") == "2"){
                emotion.style.background = "url(./img/char-01-true.png) center center / contain no-repeat"
                changeInfo.innerHTML = '<h2>太好了，物品都備齊了。<br/>我們出發吧！</h2>'
                $('.show--6').addClass('v-answer');
                $(e.target).addClass("op--2selected");
                if(op4.classList.contains('op--4selected')){
                    $('.moving').addClass('moving-selected');
                    $('.vanish').addClass('vanish-selected');
                    setTimeout(() => {
                        $('.show--3').removeClass('visible');
                        $('.show--4').addClass('visible');

                        vid.play();
                        vid.currentTime = 0;
                        vid.addEventListener('ended', function(){
                            // $('.show--4').removeClass('visible');
                            // $('.show--5').addClass('visible');
                            parent.window.location.assign("./ryukyu.html")
                            $('.game-audio').remove();
                        });
                        gameAudio.pause();
                        // sailAudio.play();
                    }, 4000);
                }else{
                    changeInfo.innerHTML = '<h2>做得好！<br/>但我們還差一件物品。</h2>'
                }
                setTimeout(() => {
                    init();
                }, 1000);
                
            }
            if(e.target.getAttribute("data-num") == "3"){
                emotion.style.background = "url(./img/char-01-false.png) center center / contain no-repeat"
                changeInfo.innerHTML = '<h2>噢！這件物品沒看過，不是我們的，<br/>請再想想我們需要的物品。</h2>'
                $('.show--7').addClass('v-answer');
                bgLayer.setProperty('--z-index', '0');
                setTimeout(() => {
                    init();
                }, 1000);
            }
            if(e.target.getAttribute("data-num") == "4"){
                emotion.style.background = "url(./img/char-01-true.png) center center / contain no-repeat"
                changeInfo.innerHTML = '<h2>太好了，物品都備齊了。<br/>我們出發吧！</h2>'
                $('.show--6').addClass('v-answer');
                $(e.target).addClass("op--4selected");
                if(op2.classList.contains('op--2selected')){
                    $('.moving').addClass('moving-selected');
                    $('.vanish').addClass('vanish-selected');
                    setTimeout(() => {
                        $('.show--3').removeClass('visible');
                        $('.show--4').addClass('visible');

                        vid.play();
                        vid.currentTime = 0;
                        vid.addEventListener('ended', function(){
                            // $('.show--4').removeClass('visible');
                            // $('.show--5').addClass('visible');
                            parent.window.location.assign("./ryukyu.html")
                            $('.game-audio').remove();
                        });
                        gameAudio.pause();
                        // sailAudio.play();
                    }, 4000);
                }else{
                    changeInfo.innerHTML = '<h2>做得好！<br/>但我們還差一件物品。</h2>'
                }
                setTimeout(() => {
                    init();
                }, 1000);
                
            }
        }
    })
})
