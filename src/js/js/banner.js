$(document).ready(function(){


	//轮播图
	var mySwiper = new Swiper ('.swiper-container', {
	autoplay: true,//可选选项，自动滑动
    direction: 'horizontal',
    loop: true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }   
  })

})