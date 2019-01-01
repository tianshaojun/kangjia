// 普通的jquery写法
var products=$('.products');
var tv=$(".products>.tv");
var pros1=$('.products>.tv>.pros1');
var pros2=$('.products>.refiger>.pros2');
var pros3=$('.products>.washing>.pros3');
var pros4=$('.products>.phone>.pros4');
var pros5=$('.products>.live>.pros5');
var pros6=$('.products>.ar>.pros6');
var pros7=$('.products>.k>.pros7');



$.ajax({
  type:'get',
  url:'../../data/products.json',
  data:{},
  success:function(data){
    var str1="";
    var str2="";
    var str3="";
    var str4="";
    var str5="";
    var str6="";
    var str7="";
    for(var i=0;i<data[0].length;i++){
      str1+=`<li>
          <img src="${data[0][i].img}">
          <h3>${data[0][i].title}</h3>
          <em>${data[0][i].con}</em>
          <i>${data[0][i].price}<del>${data[0][i].delPrice}</del></i>
          <p>${data[0][i].comments}<img src="${data[0][i].bg}"</p>
        </li>`
    }
    for(var i=0;i<data[1].length;i++){
      str2+=`<li>
          <img src="${data[1][i].img}">
          <h3>${data[1][i].title}</h3>
          <em>${data[1][i].con}</em>
          <i>${data[1][i].price}<del>${data[1][i].delPrice}</del></i>
          <p>${data[1][i].comments}<img src="${data[1][i].bg}"</p>
        </li>`
    }
    for(var i=0;i<data[2].length;i++){
      str3+=`<li>
          <img src="${data[2][i].img}">
          <h3>${data[2][i].title}</h3>
          <em>${data[2][i].con}</em>
          <i>${data[2][i].price}<del>${data[2][i].delPrice}</del></i>
        </li>`
    }
    for(var i=0;i<data[3].length;i++){
      str4+=`<li>
          <img src="${data[3][i].img}">
          <h3>${data[3][i].title}</h3>
          <em>${data[3][i].con}</em>
          <i>${data[3][i].price}<del>${data[3][i].delPrice}</del></i>
        </li>`
    }
    for(var i=0;i<data[4].length;i++){
      str5+=`<li>
          <img src="${data[4][i].img}">
          <h3>${data[4][i].title}</h3>
          <em>${data[4][i].con}</em>
          <i>${data[4][i].price}<del>${data[4][i].delPrice}</del></i>
        </li>`
    }
    for(var i=0;i<data[5].length;i++){
      str6+=`<li>
          <img src="${data[5][i].img}">
          <h3>${data[5][i].title}</h3>
          <em>${data[5][i].con}</em>
          <i>${data[5][i].price}<del>${data[5][i].delPrice}</del></i>
        </li>`
    }
    for(var i=0;i<data[6].length;i++){
      str7+=`<li>
          <img src="${data[6][i].img}">
          <h3>${data[6][i].title}</h3>
          <em>${data[6][i].con}</em>
          <i>${data[6][i].price}<del>${data[6][i].delPrice}</del></i>
        </li>`
    }
    pros1.html(str1);
    pros2.html(str2);
    pros3.html(str3);
    pros4.html(str4);
    pros5.html(str5);
    pros6.html(str6);
    pros7.html(str7);
    
    // 电视
    var li1=$('.products>.tv>.pros1>li');
    li1.mouseover(function(){
         $(this).stop(true).animate({
             'top':'-2px'
         },'10');
        
         $(this).children().eq(4).stop(true).animate({
             'top':'235px'
         },"slow");
         if($(this).children().eq(4).children().eq(0).attr('src') == ''){
            $(this).children().eq(4).css('opacity',0);
         }    
    })

     li1.mouseout(function(){
         $(this).stop(true).animate({
             'top':'0'
         },'10');
         $(this).children().eq(4).stop(true).animate({
             'top':'340px'
         },"slow");
         if($(this).children().eq(4).children().eq(0).attr('src') == ''){
            $(this).children().eq(4).css('opacity',0);
         }    
    })



    // 冰箱
    var li2=$('.products>.refiger>.pros2>li');
    li2.mouseover(function(){
         $(this).stop(true).animate({
             'top':'-2px'
         },'10');
         $(this).children().eq(4).stop(true).animate({
             'top':'235px'
         },'slow');
        if($(this).children().eq(4).children().eq(0).attr('src') == ''){
            $(this).children().eq(4).css('opacity',0);
         }    
    })

     li2.mouseout(function(){
         $(this).stop(true).animate({
             'top':'0'
         },'10');
         $(this).children().eq(4).stop(true).animate({
             'top':'340px'
         },"slow");
         if($(this).children().eq(4).children().eq(0).attr('src') == ''){
            $(this).children().eq(4).css('opacity',0);
         }
    })




     // 洗衣机
    var li3=$('.products>.washing>.pros3>li');
    li3.mouseover(function(){
         $(this).stop(true).animate({
             'top':'-2px'
         },'10');
    })

    li3.mouseout(function(){
         $(this).stop(true).animate({
             'top':'0'
         },'10');
    })




    // 手机
    var li4=$('.products>.phone>.pros4>li');
    li4.mouseover(function(){
         $(this).stop(true).animate({
             'top':'-2px'
         },'10');
    })

    li4.mouseout(function(){
         $(this).stop(true).animate({
             'top':'0'
         },'10');
    })

    


    //生活电器
    var li5=$('.products>.live>.pros5>li');
    li5.mouseover(function(){
         $(this).stop(true).animate({
             'top':'-2px'
         },'10');
    })

    li5.mouseout(function(){
         $(this).stop(true).animate({
             'top':'0'
         },'10');
    })



    //智能硬件
    var li6=$('.products>.ar>.pros6>li');
    li6.mouseover(function(){
         $(this).stop(true).animate({
             'top':'-2px'
         },'10');
    })

    li6.mouseout(function(){
         $(this).stop(true).animate({
             'top':'0'
         },'10');
    })
    



     //K米优品
    var li7=$('.products>.k>.pros7>li');
    li7.mouseover(function(){
         $(this).stop(true).animate({
             'top':'-2px'
         },'10');
    })

    li7.mouseout(function(){
         $(this).stop(true).animate({
             'top':'0'
         },'10');
    })



  }
})






