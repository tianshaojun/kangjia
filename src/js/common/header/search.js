// 点击搜索按钮弹出下拉框



// 普通的jquery写法
// var search=$('#search');
// var searchHide=$(".search");
// var btn=$('#btn');

// search.click(function(){
//   searchHide.css('display','block');
// })

// btn.click(function(){
//   searchHide.css('display','none');
// })



// 面向对象写法
function Search(){
  this.search=$('#search');
  this.searchHide=$('.nav>.right>li:nth-child(4)>.search');
  this.btn=$('#btn');
}

$.extend(Search.prototype,{


  init:function(){
    this.fn1();
    this.fn2();
  },
  

  fn1:function(){
    var _this=this;
    this.search.click(function(){
      _this.searchHide.css('display','block');
    })
  },
  
  fn2:function(){
    var _this=this;
    this.btn.click(function(){
      _this.searchHide.css('display','none');
    })
  }

})

new Search().init();



