// 普通的jquery写法
var star=$('.star');
var l=$('.star>.l');
var r=$('.star>.r');
var pro=$('.star>.pro');


$.ajax({
  type:'get',
  url:'../../data/star.json',
  // data:{},
  success:function(data){
    var str="";
    for(var i=0;i<data.length;i++){
      str+=`<li>
          <h5>${data[i].news}</h5>
          <img src="${data[i].img}">
          <h3>${data[i].title}</h3>
          <em>${data[i].con}</em>
          <i>${data[i].price}<del>${data[i].delPrice}</del></i>
        </li>`
    }
    pro.html(str);
  }
})


l.click(function(){
   pro.animate({
        "left":'-1142px',
   },'slow')
})

r.click(function(){
  pro.animate({
    "left":0
  },'slow')
})
