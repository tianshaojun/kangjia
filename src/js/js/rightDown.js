// 普通的jquery写法
var rightDown=$(".rightDown");
var li=rightDown.children().eq(3);


// 回到顶部显示
$(document).scroll(function(){
    var t=$(document).scrollTop();
     if(t >= 800){
         li.show();
     }else{
         li.hide();
     }

    // 回到顶部效果
    li.click(function(){
    
      $('html').stop(true).animate({
          'scrollTop':'0'
      },'slow')
    })
})



