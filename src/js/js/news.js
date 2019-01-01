// 普通的jquery写法
var news=$('.products>.news');
var socity=$(".products>.socity");
var list1=$('.products>.news>.list1');
var list2=$('.products>.socity>.list2');




    $.ajax({
    type:'get',
    url:'https://api.asilu.com/today/todayonhistory/',
    dataType:"jsonp",
    success:function(data){
      var str1='';
      var str2='';
        for(var i=0;i<4;i++){
          str1+=`<li>
                <img src="${data.list[i].image}">
                <h3>${data.list[i].title}</h3>
                <p>${data.list[i].date}</p>
                <a href="${data.list[i].link}">查看详情</a>
              </li>`
        }
        for(var i=25;i<29;i++){
           str2+=`<li>
                <img src="${data.list[i].image}">
                <h3>${data.list[i].title}</h3>
                <p>${data.list[i].date}</p>
                <a href="${data.list[i].link}">阅读全文</a>
              </li>`
        }
      list1.html(str1);
      list2.html(str2);
    }
   })

