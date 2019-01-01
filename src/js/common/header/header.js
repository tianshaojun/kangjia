function Header(container){
  this.el=container;
}

Header.template=`<div class="nav">
    <ul class="left">
      <li><a href="index.html">首页</a></li>
      <li class='hover'>
          <a href="list.html">电视</a>
          <ul>
              <li>
                  <img src="../img/n1.jpg" alt="">
                  <h4>E75U 75吋超薄...</h4>
                  <span>金属人工智能/2GB...</span>
                  <i>￥7699.00</i>
              </li>
               <li>
                  <img src="../img/n2.jpg" alt="">
                  <h4>LED65X7S 65...</h4>
                  <span>36核HDR/前置音...</span>
                  <i>￥3799.00</i>
              </li>
               <li>
                  <img src="../img/n3.jpg" alt="">
                  <h4>LED55X8 55吋...</h4>
                  <span>4mm/前置音响/人...</span>
                  <i>￥2799.00</i>
              </li>
               <li>
                  <img src="../img/n4.jpg" alt="">
                  <h4>U50F1 50吋4K...</h4>
                  <span>超高清 / 人工智能...</span>
                  <i>￥1799.00</i>
              </li>
               <li>
                  <img src="../img/n5.jpg" alt="">
                  <h4>LED49UC5 49...</h4>
                  <span>二级能效 /前置音...</span>
                  <i>￥2599.00</i>
              </li>
               <li>
                  <img src="../img/n6.jpg" alt="">
                  <h4>K43 43吋全高...</h4>
                  <span>金属人工智能/2GB...</span>
                  <i>￥7699.00</i>
              </li>
          </ul>
      </li>
      <li class='hover'>
       <a href="details.html">冰箱</a>
       <ul>
              <li>
                  <img src="../img/n7.jpg" alt="">
                  <h4>551升 风冷对开...</h4>
                  <span>电脑温控 / 家用保鲜</span>
                  <i>￥2599.00</i>
              </li>
               <li>
                  <img src="../img/n8.jpg" alt="">
                  <h4>E75U 75吋超薄...</h4>
                  <span>电脑温控 / 随意控...</span>
                  <i>￥2299.00</i>
              </li>
               <li>
                  <img src="../img/n9.jpg" alt="">
                  <h4>400升 对开门冰...</h4>
                  <span>电脑温控 / 纤薄机...</span>
                  <i>￥1899.00</i>
              </li>
               <li>
                  <img src="../img/n10.jpg" alt="">
                  <h4>300升 多门冰箱</h4>
                  <span>电脑温控 / 净味保鲜</span>
                  <i>￥1599.00</i>
              </li>
               <li>
                  <img src="../img/n11.jpg" alt="">
                  <h4>219升 三门冰箱</h4>
                  <span>电脑温控 / 自动除...</span>
                  <i>￥1399.00</i>
              </li>
               <li>
                  <img src="../img/n12.jpg" alt="">
                  <h4>E75U 75吋超薄...</h4>
                  <span>金属人工智能/2GB...</span>
                  <i>￥1099.00</i>
              </li>
       </ul>
      </li>
      <li class='hover'>
      <a href="##">洗衣机</a>
      <ul>
              <li>
                  <img src="../img/n13.jpg" alt="">
                  <h4>10公斤 变频滚...</h4>
                  <span>高温洗涤 / 静音节能</span>
                  <i>￥2399.00</i>
              </li>
               <li>
                  <img src="../img/n14.jpg" alt="">
                  <h4>8公斤 滚筒洗衣机</h4>
                  <span>一键式洗涤 / 高温...</span>
                  <i>￥1399.00</i>
              </li>
               <li>
                  <img src="../img/n15.jpg" alt="">
                  <h4>6.5公斤 滚筒洗...</h4>
                  <span>高温煮洗 / 洗衣无...</span>
                  <i>￥1299.00</i>
              </li>
               <li>
                  <img src="../img/n16.jpg" alt="">
                  <h4>8.5公斤 全自动...</h4>
                  <span>洗烘一体 / 钢化面板</span>
                  <i>￥1599.00</i>
              </li>
               <li>
                  <img src="../img/n17.jpg" alt="">
                  <h4>7公斤 全自动波...</h4>
                  <span>WIFI智能控制 / 数...</span>
                  <i>￥899.00</i>
              </li>
               <li>
                  <img src="../img/n18.jpg" alt="">
                  <h4>2.5公斤 全自动...</h4>
                  <span>智能控制 / 纳米拟菌</span>
                  <i>￥1599.00</i>
              </li>
       </ul>
      </li>
      <li class='hover'>
      <a href="##">手机</a>
       <ul>
              <li>
                  <img src="../img/n19.jpg" alt="">
                  <h4>康佳手机S3</h4>
                  <span>5.2吋高清护眼屏 /...</span>
                  <i>￥1499.00</i>
              </li>
               <li>
                  <img src="../img/n20.jpg" alt="">
                  <h4>康佳手机S5</h4>
                  <span>5.7吋超大全面屏 /...</span>
                  <i>￥1699.00</i>
              </li>
               <li>
                  <img src="../img/n21.jpg" alt="">
                  <h4>康佳手机E2</h4>
                  <span>4000mAh长续航...</span>
                  <i>￥1999.00</i>
              </li>
               <li>
                  <img src="../img/n22.jpg" alt="">
                  <h4>康佳手机U11</h4>
                  <span>翻盖老人机 / 大字...</span>
                  <i>￥199.00</i>
              </li>
               <li>
                  <img src="../img/n23.jpg" alt="">
                  <h4>康佳手机U1 </h4>
                  <span>4000mAh / 一键...</span>
                  <i>￥268.00</i>
              </li>
               <li>
                  <img src="../img/n24.jpg" alt="">
                  <h4>康佳手机U8 </h4>
                  <span>老人手机超长待机</span>
                  <i>￥189.00</i>
              </li>
       </ul>
      </li>
      <li class='hover'>
      <a href="##">生活电器</a>
       <ul>
              <li>
                  <img src="../img/n25.jpg" alt="">
                  <h4>12L迷你烘焙电...</h4>
                  <span>双层烤架 / 上下石...</span>
                  <i>￥99.00</i>
              </li>
               <li>
                  <img src="../img/n26.jpg" alt="">
                  <h4>3L智能电饭煲...</h4>
                  <span>15大功能 / 不粘陶...</span>
                  <i>￥249.00</i>
              </li>
               <li>
                  <img src="../img/n27.jpg" alt="">
                  <h4>1.8L电水壶</h4>
                  <span>304不锈钢 / 双层...</span>
                  <i>￥49.00</i>
              </li>
               <li>
                  <img src="../img/n28.jpg" alt="">
                  <h4>1.8L养生壶</h4>
                  <span>304不锈钢底盘 /...</span>
                  <i>￥159.00</i>
              </li>
               <li>
                  <img src="../img/n29.jpg" alt="">
                  <h4>智能扫地机器人</h4>
                  <span>家用吸尘器 / 拖扫...</span>
                  <i>￥399.00</i>
              </li>
               <li>
                  <img src="../img/n30.jpg" alt="">
                  <h4>便携式料理机KJ...</h4>
                  <span>双杯随行 / 食品级...</span>
                  <i>￥89.00</i>
              </li>
       </ul>
      </li>
      <li class='hover'>
      <a href="##">K米优品</a>
       <ul>
              <li>
                  <img src="../img/n31.jpg" alt="">
                  <h4>Super Kimi迷...</h4>
                  <span>便携收纳/手持凉风 </span>
                  <i>￥88.00</i>
              </li>
               <li>
                  <img src="../img/n32.jpg" alt="">
                  <h4>Super Kimi智...</h4>
                  <span>智能弹奏音乐 / 懒...</span>
                  <i>￥79.00</i>
              </li>
               <li>
                  <img src="../img/n33.jpg" alt="">
                  <h4>Super Kimi智...</h4>
                  <span>防丢防忘 / 一键寻物</span>
                  <i>￥65.00</i>
              </li>
               <li>
                  <img src="../img/n34.jpg" alt="">
                  <h4>Super Kimi火...</h4>
                  <span>萌趣U盘 / 便于携带</span>
                  <i>￥118.00</i>
              </li>
               <li>
                  <img src="../img/n35.jpg" alt="">
                  <h4>Super Kimi阿...</h4>
                  <span>亲肤面料 / 毛绒玩具</span>
                  <i>￥71.00</i>
              </li>
               <li>
                  <img src="../img/n36.jpg" alt="">
                  <h4>Super Kimi阿...</h4>
                  <span>亲肤面料 / 抱枕靠...</span>
                  <i>￥85.00</i>
              </li>
       </ul>
      </li>
      <li class='hover'><a href="##">大宗采购</a></li>
      <li><a href="##">服务</a></li>
      <li><a href="##">社区</a></li>
    </ul>
    <ul class="right">
      <li><a href="register.html">登录</a></li>
      <li><a href="login.html">注册</a></li>
      <li><a href="cart.html"><img src="../img/cart.png" alt=""></a></li>
      <li>
           <i href="#" id='search'><img src="../img/search.png" alt=""></i>
           <div class="search">
             <div class="title">
               <input type="text" placeholder="您喜欢的商品">
               <button id="btn">X</button>
             </div>
             <div class="list">
               <a href="#">电视</a>
               <a href="#">冰箱</a>
               <a href="#">洗衣机</a>
               <a href="#">手机</a>
               <a href="#">49X7</a>
               <a href="#">A2</a>
               <a href="#">OLED</a>
             </div>
           </div>
      </li>
    </ul>
  </div>`


  $.extend(Header.prototype,{
    init:function(){
      this.createHeader();
    },
    createHeader:function(){
      this.content=$('<div></div>');
      this.content.html(Header.template);
      this.el.append(this.content);
    }
  })


