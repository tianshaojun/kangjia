//导航吸顶效果



// 普通的jquery写法
// $(window).scroll(function(){
// 	var nav=$('.nav');
// 	if($(window).scrollTop() >= 18){
// 		nav.css({'position':'fixed',
// 			     'top':0
// 		        });
// 	}else{
// 		nav.css({
// 			'position':'absolute',
// 			'top':'18px'
// 		})
// 	}
// })



// 面向对象写法
function scrollTop(){
  
}

$.extend(scrollTop.prototype,{

	init:function(){
		this.fn();
	},

	fn:function(){
		
	    $(window).scroll(function(){
	    	if($(window).scrollTop() >= 18){
	    		this.nav=$('.nav');
	    		this.nav.css({
	    			'position':'fixed',
	    			'top':0
	    		})
	        }else{
	        	this.nav=$('.nav');
	        	this.nav.css({
	        		'position':'absolute',
	        		'top':'18px'
	        	})
	        }
	    })
    },



})

new scrollTop().init();


