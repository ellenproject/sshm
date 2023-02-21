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
    const list1 = document.querySelector(".list1")
    const list2 = document.querySelector(".list2")
    const list3 = document.querySelector(".list3")
    const list4 = document.querySelector(".list4")
    const vid1 = document.querySelector(".myVideo1")
    const vid2 = document.querySelector(".myVideo2")
    const vid3 = document.querySelector(".myVideo3")
    const vid4 = document.querySelector(".myVideo4")
    
    // $(".mute-video").click(function(){
    //     if($("video").prop("muted")){
            
    //         $("video").prop("muted", false);
    //         $(".play").addClass("active");
    //         $(".pause").removeClass("active");
            
            
    //         if($("audio").prop("muted", false)){
    //             // if(!$(".show--4").hasClass("visible")){
    //             //     gameAudio.play();
    //             // }
    //             if(!$(".show--3").hasClass("visible") && !$(".show--4").hasClass("visible") && !$(".show--5").hasClass("visible")){
    //                 gameAudio.play();
    //             }else if(!$(".show--4").hasClass("visible")){
    //                 gameAudio.play();
    //                 list.addEventListener('click', function(e){
    //                     for(i=0; i<li.length; i++){
    //                         if(e.target.getAttribute("data-num") == "1"){
    //                             wrongAudio.play();
    //                             wrongAudio.currentTime = 0;
    //                         }else if(e.target.getAttribute("data-num") == "2"){
    //                             rightAudio.play();
    //                             rightAudio.currentTime = 0;
    //                             if(op4.classList.contains('op--4selected')){
    //                                 setTimeout(() => {
    //                                     gameAudio.pause();
    //                                     sailAudio.play();
    //                                 }, 4000);
    //                             }
    //                         }else if(e.target.getAttribute("data-num") == "3"){
    //                             wrongAudio.play();
    //                             wrongAudio.currentTime = 0;
    //                         }else if(e.target.getAttribute("data-num") == "4"){
    //                             rightAudio.play();
    //                             rightAudio.currentTime = 0;
    //                             if(op2.classList.contains('op--2selected')){
    //                                 setTimeout(() => {
    //                                     gameAudio.pause();
    //                                     sailAudio.play();
    //                                 }, 4000);
    //                             }
    //                         }
    //                     }
    //                 })
    //             }else if(!$(".show--5").hasClass("visible")){
    //                 gameAudio.pause();
    //                 sailAudio.play();
    //             }
                
    //             $(".button").on('click', function(e){
    //                 list.addEventListener('click', function(e){
    //                     for(i=0; i<li.length; i++){
    //                         if(e.target.getAttribute("data-num") == "1"){
    //                             wrongAudio.play();
    //                             wrongAudio.currentTime = 0;
    //                         }else if(e.target.getAttribute("data-num") == "2"){
    //                             rightAudio.play();
    //                             rightAudio.currentTime = 0;
    //                             if(op4.classList.contains('op--4selected')){
    //                                 setTimeout(() => {
    //                                     gameAudio.pause();
    //                                     sailAudio.play();
    //                                 }, 4000);
    //                             }
    //                         }else if(e.target.getAttribute("data-num") == "3"){
    //                             wrongAudio.play();
    //                             wrongAudio.currentTime = 0;
    //                         }else if(e.target.getAttribute("data-num") == "4"){
    //                             rightAudio.play();
    //                             rightAudio.currentTime = 0;
    //                             if(op2.classList.contains('op--2selected')){
    //                                 setTimeout(() => {
    //                                     gameAudio.pause();
    //                                     sailAudio.play();
    //                                 }, 4000);
    //                             }
    //                         }
    //                     }
    //                 })
    //             })
    //         }
    //     }else{
    //         $("video").prop("muted",true);
    //         $(".pause").addClass("active");
    //         $(".play").removeClass("active")

    //         $("audio").prop("muted",true)
    //     }
    // });

    const li = document.getElementsByTagName('li');
    const emotion1 = document.querySelector('.emotion1');
    const emotion2 = document.querySelector('.emotion2');
    const emotion3 = document.querySelector('.emotion3');
    const emotion4 = document.querySelector('.emotion4');
    const changeInfo = document.querySelector('.changeInfo');
    const op2 = document.querySelector('.op--2');
    const op4 = document.querySelector('.op--4');
    const op5 = document.querySelector('.op--5');
    const op8 = document.querySelector('.op--8');
    const op10 = document.querySelector('.op--10');
    const op11 = document.querySelector('.op--11');
    const op15 = document.querySelector('.op--15');
    const op16 = document.querySelector('.op--16');
    const bgWrong = document.querySelector('.popup--3').style;
    bgWrong.setProperty('--background', 'url(../img/bg-dark.jpg) center center/cover no-repeat');
    const bgLayer = document.querySelector('.popup').style;
    bgLayer.setProperty('--z-index', '0');
    changeInfo.innerHTML = '<h2>船要開了，趕快將這次要帶的物品搬上船去！<br/>請幫我們選2件物品搬運上船。</h2>'
    
    function init(){
        emotion1.style.background = "url(./img/char-01.png) center center / contain no-repeat"
        emotion2.style.background = "url(./img/char-02.png) center center / contain no-repeat"
        emotion3.style.background = "url(./img/char-03.png) center center / contain no-repeat"
        emotion4.style.background = "url(./img/char-04.png) center center / contain no-repeat"
        changeInfo.innerHTML = '<h2>船要開了，趕快將這次要帶的物品搬上船去！<br/>請幫我們選2件物品搬運上船。</h2>'
        bgWrong.setProperty('--background', 'url(../img/bg-dark.jpg) center center/cover no-repeat');
        bgLayer.setProperty('--z-index','0');
        $('.show--15').removeClass('v-answer');
        $('.show--16').removeClass('v-answer');
    }
    init();

    
    list1.addEventListener('click', function(e){
        
        for(i=0; i<li.length; i++){
            
            if(e.target.getAttribute("data-num") == "1"){
                emotion1.style.background = "url(./img/char-01-false.png) center center / contain no-repeat"
                changeInfo.innerHTML = '<h2>噢！這件物品沒看過，不是我們的，<br/>請再想想我們需要的物品。</h2>'
                $('.show--16').addClass('v-answer');
                bgLayer.setProperty('--z-index', '-1');
                setTimeout(() => {
                    init();
                }, 1000);
            }
            if(e.target.getAttribute("data-num") == "2"){
                emotion1.style.background = "url(./img/char-01-true.png) center center / contain no-repeat"
                changeInfo.innerHTML = '<h2>太好了，物品都備齊了。<br/>我們出發吧！</h2>'
                $('.show--15').addClass('v-answer');
                $(e.target).addClass("op--2selected");
                if(op4.classList.contains('op--4selected')){
                    $('.moving').addClass('moving-selected');
                    $('.vanish').addClass('vanish-selected');
                    setTimeout(() => {
                        $('.show--3').removeClass('visible');
                        $('.show--4').addClass('visible');

                        vid1.play();
                        vid1.currentTime = 0;
                        vid1.addEventListener('ended', function(){
                            $('.show--4').removeClass('visible');
                            $('.show--5').addClass('visible');
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
                emotion1.style.background = "url(./img/char-01-false.png) center center / contain no-repeat"
                changeInfo.innerHTML = '<h2>噢！這件物品沒看過，不是我們的，<br/>請再想想我們需要的物品。</h2>'
                $('.show--16').addClass('v-answer');
                bgLayer.setProperty('--z-index', '0');
                setTimeout(() => {
                    init();
                }, 1000);
            }
            if(e.target.getAttribute("data-num") == "4"){
                emotion1.style.background = "url(./img/char-01-true.png) center center / contain no-repeat"
                changeInfo.innerHTML = '<h2>太好了，物品都備齊了。<br/>我們出發吧！</h2>'
                $('.show--15').addClass('v-answer');
                $(e.target).addClass("op--4selected");
                if(op2.classList.contains('op--2selected')){
                    $('.moving').addClass('moving-selected');
                    $('.vanish').addClass('vanish-selected');
                    setTimeout(() => {
                        $('.show--3').removeClass('visible');
                        $('.show--4').addClass('visible');

                        vid1.play();
                        vid1.currentTime = 0;
                        vid1.addEventListener('ended', function(){
                            $('.show--4').removeClass('visible');
                            $('.show--5').addClass('visible');
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

    list2.addEventListener('click', function(e){
        
        for(i=0; i<li.length; i++){
            
            if(e.target.getAttribute("data-num") == "5"){
                emotion2.style.background = "url(./img/char-02-true.png) center center / contain no-repeat"
                changeInfo.innerHTML = '<h2>太好了，物品都備齊了。<br/>我們出發吧！</h2>'
                $('.show--15').addClass('v-answer');
                $(e.target).addClass("op--5selected");
                if(op8.classList.contains('op--8selected')){
                    $('.moving').addClass('moving-selected');
                    $('.vanish').addClass('vanish-selected');
                    setTimeout(() => {
                        $('.show--6').removeClass('visible');
                        $('.show--7').addClass('visible');

                        vid2.play();
                        vid2.currentTime = 0;
                        vid2.addEventListener('ended', function(){
                            $('.show--7').removeClass('visible');
                            $('.show--8').addClass('visible');
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
            if(e.target.getAttribute("data-num") == "6"){
                emotion2.style.background = "url(./img/char-02-false.png) center center / contain no-repeat"
                changeInfo.innerHTML = '<h2>噢！這件物品沒看過，不是我們的，<br/>請再想想我們需要的物品。</h2>'
                $('.show--16').addClass('v-answer');
                bgLayer.setProperty('--z-index', '-1');
                setTimeout(() => {
                    init();
                }, 1000);
            }
            if(e.target.getAttribute("data-num") == "7"){
                emotion2.style.background = "url(./img/char-02-false.png) center center / contain no-repeat"
                changeInfo.innerHTML = '<h2>噢！這件物品沒看過，不是我們的，<br/>請再想想我們需要的物品。</h2>'
                $('.show--16').addClass('v-answer');
                bgLayer.setProperty('--z-index', '0');
                setTimeout(() => {
                    init();
                }, 1000);
            }
            if(e.target.getAttribute("data-num") == "8"){
                emotion2.style.background = "url(./img/char-02-true.png) center center / contain no-repeat"
                changeInfo.innerHTML = '<h2>太好了，物品都備齊了。<br/>我們出發吧！</h2>'
                $('.show--15').addClass('v-answer');
                $(e.target).addClass("op--8selected");
                if(op5.classList.contains('op--5selected')){
                    $('.moving').addClass('moving-selected');
                    $('.vanish').addClass('vanish-selected');
                    setTimeout(() => {
                        $('.show--6').removeClass('visible');
                        $('.show--7').addClass('visible');

                        vid2.play();
                        vid2.currentTime = 0;
                        vid2.addEventListener('ended', function(){
                            $('.show--7').removeClass('visible');
                            $('.show--8').addClass('visible');
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

    list3.addEventListener('click', function(e){
        
        for(i=0; i<li.length; i++){
            
            if(e.target.getAttribute("data-num") == "9"){
                emotion3.style.background = "url(./img/char-03-false.png) center center / contain no-repeat"
                changeInfo.innerHTML = '<h2>噢！這件物品沒看過，不是我們的，<br/>請再想想我們需要的物品。</h2>'
                $('.show--16').addClass('v-answer');
                bgLayer.setProperty('--z-index', '-1');
                setTimeout(() => {
                    init();
                }, 1000);
            }
            if(e.target.getAttribute("data-num") == "10"){
                emotion3.style.background = "url(./img/char-03-true.png) center center / contain no-repeat"
                changeInfo.innerHTML = '<h2>太好了，物品都備齊了。<br/>我們出發吧！</h2>'
                $('.show--15').addClass('v-answer');
                $(e.target).addClass("op--10selected");
                if(op11.classList.contains('op--11selected')){
                    $('.moving').addClass('moving-selected');
                    $('.vanish').addClass('vanish-selected');
                    setTimeout(() => {
                        $('.show--9').removeClass('visible');
                        $('.show--10').addClass('visible');

                        vid3.play();
                        vid3.currentTime = 0;
                        vid3.addEventListener('ended', function(){
                            $('.show--10').removeClass('visible');
                            $('.show--11').addClass('visible');
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
            if(e.target.getAttribute("data-num") == "11"){
                emotion3.style.background = "url(./img/char-03-true.png) center center / contain no-repeat"
                changeInfo.innerHTML = '<h2>太好了，物品都備齊了。<br/>我們出發吧！</h2>'
                $('.show--15').addClass('v-answer');
                $(e.target).addClass("op--11selected");
                if(op10.classList.contains('op--10selected')){
                    $('.moving').addClass('moving-selected');
                    $('.vanish').addClass('vanish-selected');
                    setTimeout(() => {
                        $('.show--9').removeClass('visible');
                        $('.show--10').addClass('visible');

                        vid3.play();
                        vid3.currentTime = 0;
                        vid3.addEventListener('ended', function(){
                            $('.show--10').removeClass('visible');
                            $('.show--11').addClass('visible');
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
            if(e.target.getAttribute("data-num") == "12"){
                emotion3.style.background = "url(./img/char-03-false.png) center center / contain no-repeat"
                changeInfo.innerHTML = '<h2>噢！這件物品沒看過，不是我們的，<br/>請再想想我們需要的物品。</h2>'
                $('.show--16').addClass('v-answer');
                bgLayer.setProperty('--z-index', '0');
                setTimeout(() => {
                    init();
                }, 1000);
            }
        }
    })

    list4.addEventListener('click', function(e){
        
        for(i=0; i<li.length; i++){
            
            if(e.target.getAttribute("data-num") == "13"){
                emotion4.style.background = "url(./img/char-04-false.png) center center / contain no-repeat"
                changeInfo.innerHTML = '<h2>噢！這件物品沒看過，不是我們的，<br/>請再想想我們需要的物品。</h2>'
                $('.show--16').addClass('v-answer');
                bgLayer.setProperty('--z-index', '-1');
                setTimeout(() => {
                    init();
                }, 1000);
            }
            if(e.target.getAttribute("data-num") == "14"){
                emotion4.style.background = "url(./img/char-04-false.png) center center / contain no-repeat"
                changeInfo.innerHTML = '<h2>噢！這件物品沒看過，不是我們的，<br/>請再想想我們需要的物品。</h2>'
                $('.show--16').addClass('v-answer');
                bgLayer.setProperty('--z-index', '0');
                setTimeout(() => {
                    init();
                }, 1000);
            }
            if(e.target.getAttribute("data-num") == "15"){
                emotion4.style.background = "url(./img/char-04-true.png) center center / contain no-repeat"
                changeInfo.innerHTML = '<h2>太好了，物品都備齊了。<br/>我們出發吧！</h2>'
                $('.show--15').addClass('v-answer');
                $(e.target).addClass("op--15selected");
                if(op16.classList.contains('op--16selected')){
                    $('.moving').addClass('moving-selected');
                    $('.vanish').addClass('vanish-selected');
                    setTimeout(() => {
                        $('.show--12').removeClass('visible');
                        $('.show--13').addClass('visible');

                        vid4.play();
                        vid4.currentTime = 0;
                        vid4.addEventListener('ended', function(){
                            $('.show--13').removeClass('visible');
                            $('.show--14').addClass('visible');
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
            if(e.target.getAttribute("data-num") == "16"){
                emotion4.style.background = "url(./img/char-04-true.png) center center / contain no-repeat"
                changeInfo.innerHTML = '<h2>太好了，物品都備齊了。<br/>我們出發吧！</h2>'
                $('.show--15').addClass('v-answer');
                $(e.target).addClass("op--16selected");
                if(op15.classList.contains('op--15selected')){
                    $('.moving').addClass('moving-selected');
                    $('.vanish').addClass('vanish-selected');
                    setTimeout(() => {
                        $('.show--12').removeClass('visible');
                        $('.show--13').addClass('visible');

                        vid4.play();
                        vid4.currentTime = 0;
                        vid4.addEventListener('ended', function(){
                            $('.show--13').removeClass('visible');
                            $('.show--14').addClass('visible');
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
