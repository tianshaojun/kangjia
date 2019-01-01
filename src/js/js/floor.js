// 普通的jquery写法
var floor=$('.floor');
var aLi1=$(".floor>li:nth-child(1)");
var aLi2=$('.floor>li:nth-child(2)');
var aLi3=$('.floor>li:nth-child(3)');
var aLi4=$('.floor>li:nth-child(4)');
var aLi5=$('.floor>li:nth-child(5)');
var aLi6=$('.floor>li:nth-child(6)');
var aLi7=$('.floor>li:nth-child(7)');
var aLi8=$('.floor>li:nth-child(8)');
var star=$('.star');
var tv=$('products>.tv');
var refiger=$(".products>.refiger");
var washing=$('.products>.washing');
var phone=$(".products>.phone");
var live=$(".products>.live");
var ar=$(".products>.ar");
var k=$(".products>.k");


// 淡入淡出动画
$(document).scroll(function(){
  var t=$(document).scrollTop();
  if(t>=700){
    floor.fadeIn(1000);
  }else{
    floor.fadeOut(1000);
  }
})


// 明星产品
aLi1.click(function(){
  var iH=star.offset().top-30;
  $('html').stop(true).animate({
     scrollTop:iH,
  },'slow')
})


// 电视
aLi2.click(function(){
  var iH=tv.offset().top;
  $('html').stop(true).animate({
    scrollTop:iH,
  },'slow')
})


// 冰箱
aLi3.click(function(){
  var iH=refiger.offset().top;
  $('html').stop(true).animate({
    scrollTop:iH,
  },'slow')
})


// 洗衣机
aLi4.click(function(){
  var iH=washing.offset().top;
  $('html').stop(true).animate({
    scrollTop:iH,
  },'slow')
})


// 手机
aLi5.click(function(){
  var iH=phone.offset().top;
  $('html').stop(true).animate({
    scrollTop:iH,
  },'slow')
})



//生活电器
aLi6.click(function(){
  var iH=live.offset().top;
  $('html').stop(true).animate({
    scrollTop:iH,
  },'slow')
})



//智能硬件
aLi7.click(function(){
  var iH=ar.offset().top;
  $('html').stop(true).animate({
    scrollTop:iH,
  },'slow')
})



//k米优品
aLi8.click(function(){
  var iH=k.offset().top;
  $('html').stop(true).animate({
    scrollTop:iH,
  },'slow')
})

