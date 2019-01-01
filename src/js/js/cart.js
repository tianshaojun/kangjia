var shopping=$('#shopping');
$.ajax({
  type:'get',
  url:'/product/GetProductActivitiesAsync',
  dataType:'json',
  data:{
         pid:'95390'
  },
  success:function(data){
    // console.log(data);
    var str='';
    for(var i=0;i<data.shopHotORStoreManagers.length;i++){
      // console.log(data)
      for(var key in localStorage){
        if(parseInt(key) == data.shopHotORStoreManagers[i].ProductId){
            str+=`<ul class="shops">
                      <li><input type="checkbox" class='single'></li>
                      <li>
                        <img src="${data.shopHotORStoreManagers[i].ImageUrl}">
                        <span>${data.shopHotORStoreManagers[i].ProductName}</span>
                      </li>
                      <li>${'¥'+data.shopHotORStoreManagers[i].SalePrice}</li>
                      <li>
                        <div class="sub" data_url='${data.shopHotORStoreManagers[i].ProductId}'>-</div>
                        <input type="text" value='${localStorage[key]}'>
                        <div class="add" data_url='${data.shopHotORStoreManagers[i].ProductId}'>+</div>
                      </li>
                      <li>${'¥'+data.shopHotORStoreManagers[i].SalePrice*parseInt(localStorage[key])}</li>
                      <li class='del' data_id='${data.shopHotORStoreManagers[i].ProductId}'>删除</li>
                  </ul>`
            }
         }
      }
     var html=shopping.html();
     shopping.html(html+str);
     

     $(document).click(function(e){
         var e=e||event;
         var target=$(e.target);


         // 删除
         if(target.attr('class') == 'del'){
          var id=target.attr('data_id');
          for(i in localStorage){
            if(parseInt(i)==id){
              localStorage.sum-=localStorage[i];
              delete localStorage[i];
            }
          }
          target.parent().remove();
         }




         //点击-号
         if(target.attr('class') == 'sub'){
          var id=target.attr('data_url');
          for(var key in localStorage){
            if(parseInt(key)==id){
              if(localStorage[key]<=0){
                localStorage[key]=0;
              }else{
                localStorage[key]--;
              }
            }
          }
          localStorage.sum--;
          if(localStorage.sum<=0){
            localStorage.sum=0;
          }
          //小计
          var singleTotal=target.parent().next();
          //数量
          var mid=target.next();
          // console.log(mid)
          var midVal=mid.val();
          //单价
          var price=target.parent().prev().text();
          var singleprice=price.slice(1);
          midVal--;
          if(midVal<=0){
            mid.val(0);
            singleTotal.text('¥'+'0.00');
          }else{
            mid.val(midVal);
            //计算单品单价
            singleTotal.text('¥'+midVal*singleprice);
          }
        }





        //点击+号
        if(target.attr('class') == 'add'){
          var id=target.attr('data_url');
          for(var key in localStorage){
            if(parseInt(key)==id){
              localStorage[key]++;
            }
          }
          localStorage.sum++;
          //小计
          var singleTotal=target.parent().next();
          //单价
          var price=target.parent().prev().text();
          var singleprice=price.slice(1);
          var mid=target.prev();
          var midVal=mid.val();
          midVal++;
          mid.val(midVal);
          //计算单品单价
          singleTotal.text('¥'+midVal*singleprice);
        }


       


        //全选反选
        var single=$('.single');
        var all1=$('#all1');
        var all2=$('#all2');
        if(target.attr('id') == 'all1'){
          if(all1.prop('checked')){
            single.each(function(i){
              single.eq(i).prop('checked',true);
            })
            all2.prop('checked',true);
          }else{
            single.each(function(i){
              single.eq(i).prop('checked',false);
            })
            all2.prop('checked',false);
          }
        }


        if(target.attr('id') == 'all2'){
          if(all2.prop('checked')){
            single.each(function(i){
              single.eq(i).prop('checked',true);
            })
            all1.prop('checked',true);
          }else{
            single.each(function(i){
              single.eq(i).prop('checked',false);
            })
            all1.prop('checked',false);
          }
        }
        //如果子类全选中，则全选按钮选中，反之全选按钮不选中
        var flag=true;
        var sum=0;
        var sumPrice=0;
        var seleted=$('.seleted');
        single.each(function(i){
          if(single.eq(i).prop('checked')){
            sum+=Number(single.eq(i).parent().parent().children().eq(3).children().eq(1).val());
            sumPrice+=Number(single.eq(i).parent().parent().children().eq(4).text().slice(1));
            //删除选中的商品
            if(target.attr('class') == 'seleted'){
               single.eq(i).parent().parent().remove();
            }
          }
          if(!single.eq(i).prop('checked')){
            flag=false;
          }
        })
        var totalprice=$('#totalPrice');
        var totalNum=$('#totalNum');
        totalprice.text('¥'+sumPrice);
        totalNum.text(sum);

        if(flag){
          all1.prop('checked',true);
          all2.prop('checked',true);
        }else{
          all1.prop('checked',false);
          all2.prop('checked',false);
        }

  

    }) //事件代理
   },   //成功的回调

   error:function(e){
    console.log(e);
   }
})     //ajax




