var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

if (/msie 8.0/i.test(navigator.userAgent)) {
	Array.prototype.slice = function() {
		var result = [];
		for (var i = 0, len = this.length; i < len; i++) {
			result.push(this[i])
		}
		return result
	};
	Array.prototype.forEach = function(callback, thisArg) {
		for (var i = 0, len = this.length; i < len; i++) {
			if (typeof callback === 'function') {
				callback.call(thisArg, this[i], i, this)
			}
		}
	}
}
if (!('placeholder' in document.createElement('input'))) {
	$('input[placeholder],textarea[placeholder]').each(function() {
		var that = $(this),
			text = that.attr('placeholder');
		if (that.val() === "") {
			that.val(text).addClass('placeholder')
		}
		that.focus(function() {
			if (that.val() === text) {
				that.val("").removeClass('placeholder')
			}
		}).blur(function() {
			if (that.val() === "") {
				that.val(text).addClass('placeholder')
			}
		}).closest('form').submit(function() {
			if (that.val() === text) {
				that.val('')
			}
		})
	})
}
function on(elem, type, callback) {
	type = type.replace(/(^\s+)|(\s+$)/g, '').replace(/\s+/g, ' ').split(' ');
	for (var i = 0, len = type.length; i < len; i++) {
		if (elem.addEventListener) {
			elem.addEventListener(type[i], callback, false)
		} else {
			elem.attachEvent('on' + type[i], callback)
		}
	}
}
function off(elem, type, callback) {
	type = type.replace(/(^\s+)|(\s+$)/g, '').replace(/\s+/g, ' ').split(' ');
	for (var i = 0, len = type.length; i < len; i++) {
		if (elem.removeEventListener) {
			elem.removeEventListener(type[i], callback, false)
		} else {
			elem.detachEvent('on' + type[i], callback)
		}
	}
}
if (!document.getElementsByClassName) {
	document.getElementsByClassName = function(className, element) {
		var children = (element || document).getElementsByTagName('*');
		var elements = new Array();
		for (var i = 0; i < children.length; i++) {
			var child = children[i];
			var classNames = child.className.split(' ');
			for (var j = 0; j < classNames.length; j++) {
				if (classNames[j] == className) {
					elements.push(child);
					break;
				}
			}
		}
		return elements;
	};
}

//上面为兼容代码

$(function(){
	$(".hd_rt li").hover(function() {
		$(this).find('.nva_cont').stop(false,false).slideDown(300);
	},function(){
		$(this).find('.nva_cont').stop(false,false).slideUp(100);
	});

	var banner2 = new Swiper('.banner2', {
		pagination: '.banner2_cont',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        autoplay:2000,
         onInit: function(banner2){
        
        }

    });

    var ab_swiper1 = new Swiper('.ab_swiper1', {
    	nextButton: '.next_ab1',
        prevButton: '.prev_ab1',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30,
       loop: true,
        autoplay:3000,
         onInit: function(ab_swiper1){
         
        }

    });
    var ab_swiper2 = new Swiper('.ab_swiper2', {
    	nextButton: '.next_ab2',
        prevButton: '.prev_ab2',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        autoplay:3000,
        onInit: function(ab_swiper2){
         
        }

    });
    

    var p_swiper3 = new Swiper('.p_swiper3', {
    	nextButton: '.next_ab3',
        prevButton: '.prev_ab3',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 0,
       loop: true,
        autoplay:3000,
         

    });

    var h_swiper4 = new Swiper('.h_swiper4', {
    	nextButton: '.next_ab4',
        prevButton: '.prev_ab4',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 20,
      	  loop: true,
        autoplay:4000,
         onInit: function(h_swiper4){
        }

    });
    var pc_swiper5 = new Swiper('.pc_swiper5', {
    	 pagination: '.pagination5',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
      	/*  loop: true,*/
        autoplay:3000,
         onInit: function(pc_swiper5){
           $(".pc_swiper5 ").mouseenter(function() {
              pc_swiper5.stopAutoplay();
          }).mouseleave(function() {
             pc_swiper5.startAutoplay();
          });   

        }
    });
     var c_swiper6 = new Swiper('.c_swiper6', {
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 0,
      	  loop: true,
       /* autoplay:4000,*/
        nextButton: '.next_ab6',
        prevButton: '.prev_ab6',
         onInit: function(c_swiper6){
        }
    });
      var p_swiper7 = new Swiper('.p_swiper7', {
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 3,
        loop: true,
        autoplay:2000,
        nextButton: '.next_s7',
        prevButton: '.prev_s7',
        
        /*onInit: function(p_swiper7){
         p_swiper7.detachEvents();
        }*/

    });

    var ns1 = new Swiper('.ns1', {
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 3,
        nextButton: '.next_ns1',
        prevButton: '.prev_ns1',
    });  

    var ns2 = new Swiper('.ns2', {
        slidesPerView: 1,
        paginationClickable: true,
        autoplay:3000,
        spaceBetween: 3,
         pagination: '.pagination_ns2',
        
    });

      /*ab_swiper1*/
    $(".p_swiper7").mouseenter(function() {
        p_swiper7.stopAutoplay();
    }).mouseleave(function() {
       p_swiper7.startAutoplay();
    }); 
    $(".ab_swiper1").mouseenter(function() {
        ab_swiper1.stopAutoplay();
    }).mouseleave(function() {
       ab_swiper1.startAutoplay();
    }); 
    $(".ab_swiper2").mouseenter(function() {
        ab_swiper2.stopAutoplay();
    }).mouseleave(function() {
       ab_swiper2.startAutoplay();
    }); 
    $(".h_swiper4").mouseenter(function() {
        h_swiper4.stopAutoplay();
    }).mouseleave(function() {
       h_swiper4.startAutoplay();
    }); 
    
     


    $(".c_swiper6 .swiper-slide").click(function() {
    	$(this).addClass('act').siblings().removeClass('act');
    });
    $(".pc_coutent span").hover(function(){
    	$(this).addClass('act').siblings().removeClass('act');
    });

    $(".pc_coutent span:nth-child(3)").addClass('act');
    $('.pc_coutent span').hover(function(){
            $('#'+$(this).attr('data-id')).animate({opacity:"1"}).siblings().animate({opacity:"0"});
    });

    $(".in_d2 div.img div").hover(function(){
        $(this).parents(".img").find("div").removeClass('act');
        $(this).addClass('act');
    });

    $(".in_d2 div.img a:nth-child(1) div").addClass('act');


    $(".nc6 a").click(function(){
      $(this).addClass('act').siblings().removeClass('act');
    });

/*
     $('.c_cont_lt ul  li').click(function(){
            $('#'+$(this).attr('data-id')).animate({opacity:"1"}).siblings().animate({opacity:"0"});
    });
     $(".c_swiper6 .swiper-slide").click(function() {
    	 $('#'+$(this).attr('data-id')).animate({opacity:"1"}).siblings().animate({opacity:"0"});
    });*/
      $('.c_cont_lt ul  li').click(function(){
            $('#'+$(this).attr('data-id')).show().siblings().hide();
    });
     $(".c_swiper6 .swiper-slide").click(function() {
         $('#'+$(this).attr('data-id')).show().siblings().hide();
    });


    $(".h_bt .bt_lt span").click(function(){
    	$(this).addClass('act').siblings().removeClass('act');
    });

	$(".banner2").mouseenter(function() {
        banner2.stopAutoplay();
    }).mouseleave(function() {
       banner2.startAutoplay();
    });  
       $(".p_swiper3 ").mouseenter(function() {
        p_swiper3 .stopAutoplay();
    }).mouseleave(function() {
       p_swiper3 .startAutoplay();
    });  


    $(".page1 span ").click(function() {
    	$(this).addClass('act').siblings().removeClass('act');
    });

    $(".head3 .box div").click(function() {
    	$(this).addClass('act').siblings().removeClass('act');
    });
   
   $(".top").click(function(){
            var t=$(window).scrollTop();
            $("html,body").animate({"scrollTop":t-t});

        });
    
    $(".ns2").mouseenter(function() {
        ns2.stopAutoplay();
    }).mouseleave(function() {
       ns2.startAutoplay();
    }); 

   
    $(window).scroll(function() {
    	console.log($(document).scrollTop());

        if(($(document).scrollTop()>=1844)){
           /* $(".map").addClass('act');*/
           $(".map .qs1").animate({width:"502"},1000);
           $(".map .qs2").animate({width:"212"},1000);
           $(".map .qs3").animate({width:"428"},1000);
           $(".map .qs4").animate({width:"154"},1000);
           $(".map .qs5").animate({width:"354"},1000);
           $(".map .qs6").animate({height:"151"},1000);
           $(".map .qs7").animate({height:"115"},1000); 
           $(".map .qs8").animate({height:"107"},1000); 
		   $(".map .maopao1").delay(1000).fadeIn(1000);
		   $(".map .maopao2").delay(1000).fadeIn(1000);
		   $(".map .maopao3").delay(1000).fadeIn(1000);
        }
        if(($(document).scrollTop()>100)){
            $(".ab_d1_rt").animate({right:"0"},500); 

        }
        if(($(document).scrollTop()>500)){
            $(".head3").addClass('act');

        }

        if(($(document).scrollTop()>800)){
            $(".n_hs").fadeIn();

        }else{
          $(".n_hs").fadeOut();
        }
        if(($(document).scrollTop()<500)){
            $(".head3").removeClass('act');

        }
        if(($(document).scrollTop()>2948)){
        	$(".ab_d7 .ct_rt").animate({marginRight:"0"},800); 
        	$(".ab_d7 .ct_lt").animate({marginLeft:"0"},800); 
        }

        if(($(document).scrollTop()>=600)){
                $(".top").fadeIn();

            }else{
                $(".top").fadeOut();
            }


    });

});


		

	


	


}
/*
     FILE ARCHIVED ON 02:22:23 Apr 04, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:28:13 Dec 11, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.609
  exclusion.robots: 0.027
  exclusion.robots.policy: 0.011
  esindex: 0.013
  cdx.remote: 21.379
  LoadShardBlock: 1396.945 (3)
  PetaboxLoader3.resolve: 1438.574 (5)
  PetaboxLoader3.datanode: 146.205 (5)
  load_resource: 293.229 (2)
*/