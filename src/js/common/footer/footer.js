function Footer(container){
  this.el=container;
}

Footer.template=`<ul class="foot1">
          <li>
            <span>全场包邮</span>
            <i>全场商品免费送到家</i>
          </li>
          <li>
            <span>质量保证</span>
            <i>享受国家三包政策</i>
          </li>
          <li>
            <span>权益保障</span>
            <i>7天包退15天包换</i>
          </li>
          <li>
            <span>放心服务</span>
            <i>24小时内上门服务</i>
          </li>
          <li>
            <span>意外惊喜</span>
            <i>限时打折优惠不断</i>
          </li>
        </ul>
        <ul class="foot2">
          <ul class="left">
            <ul>
              <li><a href="##">帮助中心</a></li>
              <li><a href="##">购买指南</a></li>
              <li><a href="##">支付方式</a></li>
              <li><a href="##">配送方式</a></li>
              <li><a href="##">售后政策</a></li>
              <li><a href="##">防伪查询</a></li>
              <li><a href="##">旧版官网</a></li>
            </ul>
            <ul>
              <li><a href="##">新闻中心</a></li>
              <li><a href="##">集团新闻</a></li>
              <li><a href="##">媒体报道</a></li>
            </ul>
            <ul>
              <li><a href="##">投资者关系</a></li>
              <li><a href="##">公司概要</a></li>
              <li><a href="##">高管团队</a></li>
              <li><a href="##">临时公告</a></li>
              <li><a href="##">定期报告</a></li>
              <li><a href="##">公司治理</a></li>
            </ul>
            <ul>
              <li><a href="##">集团成员网站</a></li>
              <li><a href="##">华侨城集团</a></li>
              <li><a href="##">康佳全球服务中心</a></li>
              <li><a href="##">康佳国际营销</a></li>
              <li><a href="##">康佳移动互联科技</a></li>
              <li><a href="##">康佳壹视界商业展示</a></li>
              <li><a href="##">康佳智能电器</a></li>
            </ul>
            <ul>
              <li><a href="##">关于我们</a></li>
              <li><a href="##">了解康佳</a></li>
              <li><a href="##">加入康佳</a></li>
              <li><a href="##">联系我们</a></li>
            </ul>
            <ul>
              <li><a href="##">关注我们</a></li>
              <li><a href="##">官方微博</a></li>
              <li><a href="##">官方微信</a></li>
              <li><a href="##">官方社区</a></li>
              <li><a href="##">K米俱乐部</a></li>
              <li><a href="##">康佳服务</a></li>
            </ul>
          </ul>
          <ul class="right">
            <h3>24小时全国服务热线</h3>
            <p>400-880-0016</p>
            <a href="##">购买帮助</a>
            <a href="##">售后服务</a>
          </ul>
        </ul>
        <ul class="foot3">
          <li><a href="##">粤ICP备 05059413</a></li>
          <li><a href="##">快递查询</a></li>
          <li><a href="##">隐私保护</a></li>
          <li><a href="##">法律声明</a></li>
          <li><a href="##">联系我们</a></li>
           <span>Copyright © 1980-2018 康佳集团股份有限公司 版权所有
         </span>
        </ul>
        <div class="foot4">
          <img src="../img/foot1.png" alt="">
          <img src="../img/foot2.png" alt="">
          <img src="../img/foot3.gif" alt="">
     </div>`


  $.extend(Footer.prototype,{
    init:function(){
      this.createHeader();
    },
    createHeader:function(){
      this.content=$('<div></div>');
      this.content.html(Footer.template);
      this.el.append(this.content);
    }
  })


