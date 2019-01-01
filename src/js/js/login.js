// 注册验证
var verify={
  login:$('.login'),
  init:function(){
    this.formVerify();
  },
  formVerify:function(){
      var reg={
             reg1:/^[0-9a-zA-Z_]\w{3,}$/,                //由数字、字母、下划线组成,最少4位
             reg2:/^\w+@[a-z0-9]{2,3}(\.com|\.cn)+$/,    //邮箱验证
             reg3:/^[1][3,4,5,7,8][0-9]{9}$/             //手机号验证
      }

      //用户名验证
      var inp1=$('#inp1');
      var img1=$('#inp1').next();
      var txt1=$('#inp1').prev();
      var txt11=$('#inp1').prev().children().eq(0);
      var hide1=$('#inp1').next().next();
      inp1.focus(function(){
         $(this).css({
             'border':'1px solid #66AFE9',
             'box-shadow':'3px 3px 3px #eee'
         })
      });
      inp1.blur(function(){
         $(this).css({
             'border':'1px solid #ddd',
             'box-shadow':'none'
         })
      });
      inp1.change(function(){
        var inp1Val=inp1.val();
        img1.css({'display':'block'});
          if(!reg.reg1.test(inp1Val) || !reg.reg2.test(inp1Val) || !reg.reg3.test(inp1Val)){
              txt1.css({'color':'red'});
              txt11.css({'color':'#A94442'});
              hide1.css({'display':'block'});
              hide1.html('请输入正确的格式,最少4位');
              // inp1.css({
              //     'border':'1px solid red'
              // })
           }
           if(reg.reg1.test(inp1Val) || reg.reg2.test(inp1Val) || reg.reg3.test(inp1Val)){
              txt1.css({'color':'green'});
              txt11.css({'color':'green'});
              img1.css({'display':'none'});
              hide1.css('display','none');
              // inp1.css({
              //     'border':'1px solid green'
              // })
          }
      });
      img1.click(function(){
            inp1.val('');
            hide1.css('display','none');
            $(this).css('display','none');
      })
      




      //密码验证
      var reg4=/^[0-9a-zA-Z_]\w{5,}$/;
      var inp2=$('#inp2');
      var img2=$('#inp2').next();
      var txt2=$('#inp2').prev();
      var txt22=$('#inp2').prev().children().eq(0);
      var hide2=$('#inp2').next().next();
      inp2.focus(function(){
         $(this).css({
             'border':'1px solid #66AFE9',
             'box-shadow':'3px 3px 3px #eee'
         })
      });
      inp2.blur(function(){
         $(this).css({
             'border':'1px solid #ddd',
             'box-shadow':'none'
         })
      });
      inp2.change(function(){
        var inp2Val=inp2.val();
        img2.css({'display':'block'});
          if(!reg4.test(inp2Val)){
              txt2.css({'color':'red'});
              txt22.css({'color':'#A94442'});
              hide2.css({'display':'block'});
              hide2.html('请输入正确的密码,最少6位');
          }
          if(reg4.test(inp2Val)){
              txt2.css({'color':'green'});
              txt22.css({'color':'green'});
              img2.css({'display':'none'});
              hide2.css('display','none');
          }
      });
      img2.click(function(){
            inp2.val('');
            hide2.css('display','none');
            $(this).css('display','none');
      })





      
      //确认密码
      var inp3=$('#inp3');
      var img3=$('#inp3').next();
      var txt3=$('#inp3').prev();
      var txt33=$('#inp3').prev().children().eq(0);
      var hide3=$('#inp3').next().next();
      inp3.focus(function(){
         $(this).css({
             'border':'1px solid #66AFE9',
             'box-shadow':'3px 3px 3px #eee'
         })
      });
      inp3.blur(function(){
         $(this).css({
             'border':'1px solid #ddd',
             'box-shadow':'none'
         })
      });
      inp3.change(function(){
        var inp2Val=inp2.val();
        var inp3Val=inp3.val();
        img3.css({'display':'block'});
          if(inp2Val!=inp3Val){
              txt3.css({'color':'red'});
              txt33.css({'color':'#A94442'});
              hide3.css({'display':'block'});
              hide3.html('两次输入不一致,请重新输入');
          }
          if(inp2Val==inp3Val){
              txt3.css({'color':'green'});
              txt33.css({'color':'green'});
              img3.css({'display':'none'});
              hide3.css('display','none');
          }
      });
      img3.click(function(){
            inp3.val('');
            hide3.css('display','none');
            $(this).css('display','none');
      })






      //验证码
      var inp4=$('#inp4');
      var img4=$('#inp4').next();
      var txt4=$('#inp4').prev();
      var txt44=$('#inp4').prev().children().eq(0);
      var i=$('#inp4').next().next();
      var em=$('#inp4').next().next().next();
      inp4.focus(function(){
         $(this).css({
             'border':'1px solid #66AFE9',
             'box-shadow':'3px 3px 3px #eee'
         });
      })
      inp4.blur(function(){
         $(this).css({
             'border':'1px solid #ddd',
             'box-shadow':'none'
         })
      })
      // 随机验证码
      function randomCode (n) {
        var str = "";
        for(var i=0;i<n;i++){
          var num = parseInt(48+Math.random()*(122-48+1));
          while((num>=58&& num<=64) || (num>=91&&num<=96)){
            num = parseInt(48+Math.random()*(122-48+1));
          }
          str+=String.fromCharCode(num);
        }
        return str;
      }
      var a=randomCode(4);
      em.click(function(){
        a=randomCode(4);
        i.html(a);
      });
      i.html(a);
      inp4.change(function(){
        var inp4Val=inp4.val();
        img4.css({'display':'block'});
          if(inp4Val!=a){
              txt4.css({'color':'red'});
              txt44.css({'color':'#A94442'});
          }
          if(inp4Val==a){
              txt4.css({'color':'green'});
              txt44.css({'color':'green'});
              img4.css({'display':'none'});
          }
      });
      img4.click(function(){
            inp4.val('');
            $(this).css('display','none');
      })
      





      //提交事件
      var btn2=$('#btn2');
      var primise=$('#primise');
      //成功
      btn2.click(function(){
        var inp1Val=inp1.val();
        var inp2Val=inp2.val();
        var inp3Val=inp3.val();
        var inp4Val=inp4.val();
        if(
          (reg.reg1.test(inp1Val) || reg.reg2.test(inp1Val) || reg.reg3.test(inp1Val))
          &&reg4.test(inp2Val)
          &&inp2Val==inp3Val
          &&inp4Val==a
          &&primise.prop('checked')){
             location.href='index.html';
        }
      })
      //当输入框为空时
      btn2.click(function(){
        var inp1Val=inp1.val();
        var inp2Val=inp2.val();
        var inp3Val=inp3.val();
        var inp4Val=inp4.val();
        if(inp1Val=="" || inp2Val=="" || inp3Val==""){
             inp1.css({'border':'1px solid red'});
             inp2.css({'border':'1px solid red'});
             inp3.css({'border':'1px solid red'});
             inp4.css({'border':'1px solid red'});
        }
      })






  }
}
verify.init();
