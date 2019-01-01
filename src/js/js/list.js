//清空数据
localStorage.clear();
// 购物车跳转
var local=$('.local');
var car=$('.local .shop .car');
// car.text(localStorage.sum);
// localStorage.setItem('sum','0');
localStorage.sum=0;
// console.log(car.text());
local.click(function(){
    location.href='cart.html';
})   
    




// 渲染数据
var oList={
  goods:$('.goods'),
  init:function(){
    this.addproducts();
  },
  addproducts:function(){
    var _this=this;
    $.ajax({
      type:'get',
      url:'/product/GetProductActivitiesAsync',
      dataType:"json",
      data:{
         pid:'95390'
      },
      success:function(data){
        var str="";
        for(var i=0;i<data.shopHotORStoreManagers.length;i++){
          // console.log(data);
         str+=`<li>
               <img src="${data.shopHotORStoreManagers[i].ImageUrl}">
               <p>${data.shopHotORStoreManagers[i].ProductName}</p>
               <span>${'¥'+data.shopHotORStoreManagers[i].SalePrice}</span>
               <button data_id='${data.shopHotORStoreManagers[i].ProductId}'>加入购物车</button>
              </li>`
        }
      _this.goods.html(str);
      }
   })
  }
}
oList.init();

 

 
// 添加商品到购物车
var addGoods={
  goods:$('.goods'),
  init:function(){
    this.addproducts();
  },
  addproducts:function(){
    var _this=this;
    this.goods.click(function(e){
      var e=e||event;
      var target=e.target;
      if(target.tagName == 'BUTTON'){
        var id=target.getAttribute('data_id');
        // console.log(id);
        var flag=true;
        for(var key in localStorage){
              if(!localStorage.sum){
                localStorage.sum = 0;
              }
            if(parseInt(key)==id){
              localStorage.sum++;
              localStorage[key]++;
              flag=false;
              break;
            }
          }
          if(flag){
            if(!localStorage.sum){
              localStorage.sum=0;
            }
            localStorage.sum=Number(localStorage.sum)+1;
            localStorage[id+'a']=1;
          }
          console.log(localStorage);
        }
          car.text(localStorage.sum);
    })
  }
}
addGoods.init();














