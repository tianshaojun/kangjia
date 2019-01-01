//详情页
var details={
  right:$('.details .right'),
  init:function(){
    this.detail();
  },
  detail:function(){
   //鼠标移入事件
   var weixin=this.right.children().eq(3);
   var weixin2=this.right.children().eq(4);
   weixin.mouseover(function(){
       $(this).css('opacity','0.7');
       weixin2.fadeIn(1000);
   });
   weixin.mouseout(function(){
       $(this).css('opacity','1');
       weixin2.fadeOut(1000);
   });
   //事件代理
   this.right.click(function(){
       var e=e||event;
       var target=$(e.target);
       //点击-号
       if(target.attr('class') == 'sub'){
          var input=$(target).next();
          var inputVal=input.val();
          if(inputVal>1){
            inputVal--;
            input.val(inputVal);
          }
       }
       //点击+号
       if(target.attr('class') == 'add'){
          var input=$(target).prev();
          var inputVal=input.val();
          inputVal++;
          input.val(inputVal);
       }
   })
  }
}
details.init();