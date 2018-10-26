
var swiperWrapper = document.querySelector(".swiper-wrapper");
var swiperSlide = document.querySelectorAll(".swiper-slide");
var picArr = [
	"img/bg1.png","img/2017_0.png","img/2017_1.png","img/2017_2.png","img/2017_7.png","img/chainLeft.png","img/chainRight.png","img/fence.png","img/first_circle.png","img/gear1.png","img/gear2.png","img/gear3.png","img/gear4.png","img/gear5.png","img/gear6.png","img/gear7.png","img/gear8.png","img/line1.png","img/line10.png","img/line11.png","img/line12.png","img/line13.png","img/line14.png","img/line2.png","img/line3.png","img/line4.png","img/line5.png","img/line6.png","img/line7.png","img/line8.png","img/line9.png","img/M.png","img/next.png","img/paw.png","img/pawLeft.png","img/pawRight.png","img/first_people.png","img/first_people2.png"
]
var img =  new Image();
var sum = picArr.length;
//console.log( picArr[40] ); 
var now = 0;
loadImg();
function loadImg(){
	img.src = picArr[now];
	function go () {
		now ++ ;
		if(now < picArr.length){
			loadImg()
		}else{
			swiperWrapper.style.opacity = "1";
			action();
		}
	}
	img.onerror = go;
	img.onload = go;
}
function action() {
    document.getElementsByTagName("html")[0].style.background = "black"
    var mySwiper = new Swiper('.swiper-container', {
        direction: '',
        initialSlide: 0,
        speed: 800,
        followFinger: false,
        touchRatio: 0.1,
        resistanceRatio: 0,
        onSlideChangeStart: function (swiper) {
            swiperSlide[swiper.previousIndex].style.zIndex = -9999;
            for (var i = 0; i < swiperSlide.length; i++) {
                swiperSlide[i].classList.add("swiper-no-swiping")
            }
            setTimeout(function () {
                for (var i = 0; i < swiperSlide.length; i++) {
                    if (i != 1) {
                        swiperSlide[i].classList.remove("swiper-no-swiping")
                    }
                }
            }, 1000)

            if (swiper.activeIndex > swiper.previousIndex) {
                swiperSlide[swiper.previousIndex].style.transform = "translateY(" + mySwiper.height + "px) scale(0.8)";
                swiperSlide[swiper.previousIndex].style.webkitFilter = "brightness(0.5)";
            } else {
                swiperSlide[swiper.previousIndex].style.transform = "translateY(" + -mySwiper.height + "px) scale(0.8)";
                swiperSlide[swiper.previousIndex].style.webkitFilter = "brightness(0.5)"
            }

            if (swiper.activeIndex === 0) {
                first();
            }
            if (swiper.activeIndex === 1) {

//			tl.pause();
//			tl3.pause();
//			tl4.pause();
//			tl41.pause();
                second();
            }
            if (swiper.activeIndex === 2) {

                console.log(1);

//			tl.pause();
//			tl2.pause();
//			tl21.pause();
//			tl4.pause();
//			tl41.pause();
                third();
            }
            if (swiper.activeIndex === 3) {

//			tl.pause();
//			tl2.pause();
//			tl21.pause();
//			tl3.pause();
                forth();
            }
            if (swiper.activeIndex === 4) {

//			tl.pause();
//			tl2.pause();
//			tl21.pause();
//			tl3.pause();
//			tl4.pause();
//			tl41.pause();
                fifth();
            }
        },
        onSlideChangeEnd: function (swiper) {
//		swiperSlide[swiper.previousIndex].style.transform = "translateY(0px) translateZ(0px)";
            swiperSlide[swiper.previousIndex].style.transform = "translateY(0px) scale(1)";
            swiperSlide[swiper.previousIndex].style.zIndex = 0;
            swiperSlide[swiper.previousIndex].style.webkitFilter = "brightness(1)"
        },
        nextButton: '.next',
        noSwiping: true
    })

//----------------------------------------------------------------------第一屏-------
    var html = document.documentElement;
    var width = html.getBoundingClientRect().width;
    var fs = width / 16;
    tl = new TimelineMax();
    var onoff = true;
    first();

    function first() {
        //第一屏动画
        var timeBoxSpan = document.querySelectorAll(".timeBox span");
        for (var i = 0; i < timeBoxSpan.length; i++) {
            timeBoxSpan[i].index = i;
        }
        if (onoff) {
//		栅栏掉下
            tl.set(timeBoxSpan, {className: ""})
            tl.staggerFrom(".timeBox", 3, {
                y: -6 * fs,
                ease: Elastic.easeOut,
                delay: 0.5
            })
            //		2017弹动
                .staggerTo(timeBoxSpan, 1, {
                    scale: 1,
                    ease: Elastic.easeOut,
                    onComplete: function () {
                        for (var i = 0; i < timeBoxSpan.length; i++) {
                            if (i == 0) {
                                timeBoxSpan[i].className = "goDown";
                            }
                            if (i == 1) {
                                timeBoxSpan[i].className = "goUp";
                            }
                            if (i == 2) {
                                timeBoxSpan[i].className = "goDown2";
                            }
                            if (i == 3) {
                                timeBoxSpan[i].className = "goDown";
                            }
                        }
                    }
                }, .2, "-=1.5")
                //		爪子落下来
                .staggerTo(".pawsbox", 1.2, {
                    top: 0
                }, "-=0.3")
                //		爪子张开
                .staggerTo(".paws", .1, {
                    cycle: {
                        rotation: [25, -25]
                    },
                    ease: Circ.easeIn
                })
                //		M掉下
                .staggerTo(".M", .8, {
                    y: 3 * fs,
                    ease: Bounce.easeOut
                })
                //		链子出现
                .staggerTo(".chain", .5, {opacity: 1})
                //		爪子合并
                .staggerTo(".paws", .1, {
                    rotation: 0
                }, "-=0.3")
                //		爪子收起
                .staggerTo(".paw", .3, {
                    y: -1 * fs
                }, '-=.1')
                //		爪子倾斜右移
                .staggerTo(".paw", 0.9, {
                    rotation: 5,
                    x: 4 * fs,
                    ease: Linear.easeIn
                }, "-=.1")
                .set(".paw", {x: 5 * fs, transformOrigin: "top center"})
                //		晃动
                .staggerTo(".paw", 2.5, {
                    rotation: 0,
                    ease: Elastic.easeOut,
//
                })
//
            onoff = false;
        } else {
            tl.restart();
        }
    }

//---------------------------------------------------------------
}