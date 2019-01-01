function Page(){
	this.el=$('#footer');
}

$.extend(Page.prototype,{
	init:function(){
		this.footer=new Footer(this.el).init();
	}
})

new Page().init();