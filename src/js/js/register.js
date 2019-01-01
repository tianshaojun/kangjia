// 登录验证
var verify2={
  register:$('.register'),
  init:function(){
    this.formLogin();
  },
  formLogin:function(){
      var reg={
             reg1:/^[0-9a-zA-Z_]\w{3,}$/,                //由数字、字母、下划线组成,最少4位
             reg2:/^\w+@[a-z0-9]{2,3}(\.com|\.cn)+$/,    //邮箱验证
             reg3:/^[1][3,4,5,7,8][0-9]{9}$/             //手机号验证
      }

      //账号验证
      var p1=$('#p1');
      var sp1=$('#p1').children().eq(0);
      var inp1=$('#p1').children().eq(1);
      var m1=$('#p1').children().eq(2);
      var n1=$('#p1').children().eq(3);
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
        m1.css({'display':'block'});
          if(!reg.reg1.test(inp1Val) || !reg.reg2.test(inp1Val) || !reg.reg3.test(inp1Val)){
              sp1.css({'color':'red'});
              n1.css({'display':'block'});
              n1.html('请正确填写账号信息,最少4位');
           }
           if(reg.reg1.test(inp1Val) || reg.reg2.test(inp1Val) || reg.reg3.test(inp1Val)){
              sp1.css({'color':'green'});
              m1.css({'display':'none'});
              n1.css('display','none');
          }
      });
      m1.click(function(){
            inp1.val('');
            n1.css('display','none');
            $(this).css('display','none');
      });
      




      //密码验证
      var reg4=/^[0-9a-zA-Z_]\w{5,}$/;
      var p2=$('#p2');
      var sp2=$('#p2').children().eq(0);
      var inp2=$('#p2').children().eq(1);
      var m2=$('#p2').children().eq(2);
      var n2=$('#p2').children().eq(3);
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
        m2.css({'display':'block'});
          if(!reg4.test(inp2Val)){
              sp2.css({'color':'red'});
              n2.css({'display':'block'});
              n2.html('请输入正确的密码,最少6位');
          }
          if(reg4.test(inp2Val)){
              sp2.css({'color':'green'});
              n2.css({'display':'none'});
              m2.css('display','none');
          }
      });
      m2.click(function(){
            inp2.val('');
            n2.css('display','none');
            $(this).css('display','none');
      })




      //验证码
      var p3=$("#p3");
      var sp3=$('#p3').children().eq(0);
      var inp3=$('#p3').children().eq(1);
      var i=$('#p3').children().eq(2);
      var em=$('#p3').children().eq(3);
      var m3=$('#p3').children().eq(4);
      inp3.focus(function(){
         $(this).css({
             'border':'1px solid #66AFE9',
             'box-shadow':'3px 3px 3px #eee'
         });
      })
      inp3.blur(function(){
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
      inp3.change(function(){
        var inp3Val=inp3.val();
        m3.css({'display':'block'});
          if(inp3Val!=a){
              sp3.css({'color':'red'});
          }
          if(inp3Val==a){
              sp3.css({'color':'green'});
              m3.css({'display':'none'});
          }
      });
      m3.click(function(){
            inp3.val('');
            $(this).css('display','none');
      })
      





      //登录事件
      var btn=$('.p2');
      var regno=$('#regno');
      //成功
      btn.click(function(){
        var inp1Val=inp1.val();
        var inp2Val=inp2.val();
        var inp3Val=inp3.val();
        if(
          (reg.reg1.test(inp1Val) || reg.reg2.test(inp1Val) || reg.reg3.test(inp1Val))
          &&reg4.test(inp2Val)
          &&inp3Val==a
          &&regno.prop('checked')){
          location.href='index.html';
        }
      })
      //当输入框为空的时候
      btn.click(function(){
        var inp1Val=inp1.val();
        var inp2Val=inp2.val();
        var inp3Val=inp3.val();
        if(inp1Val=="" || inp2Val=="" || inp3Val==""){
             inp1.css({'border':'1px solid red'});
             inp2.css({'border':'1px solid red'});
             inp3.css({'border':'1px solid red'});
        }
      })





  }
}
verify2.init();
