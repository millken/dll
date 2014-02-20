// 导航 begin
//var Today=new Date();mouseenter
var subdefault='<div class="sub" id="sub1"><a class="s0" id="subsiteall" href="http://www.aizhan.com/siteall/">综合查询</a><a class="s1" id="subbaidurank" href="http://baidurank.aizhan.com/baidu/">百度排名</a><a class="s2" href="http://linkche.aizhan.com/">友情链接检测</a><a class="s3" href="http://link.aizhan.com/">网站反链</a><a class="s4" href="http://lishi.aizhan.com/">历史数据</a><a class="s5" href="http://tools.aizhan.com/pk/">网站PK</a><a class="s6" href="http://www.aizhan.com/webscan/">安全检测</a><a class="s7" href="http://ci.aizhan.com/">关键词挖掘</a><a class="s8" href="http://pr.aizhan.com/">PR值查询</a><a class="s9" href="http://icp.aizhan.com/">备案查询</a></div>';

if($("#nav a.s2").hasClass('on')){
  $("#subnav").html('<div class="sub" id="sub3"><a class="s0" href="http://www.aizhan.com/tag/">相关站点</a><a class="s1" href="http://ping.aizhan.com/">PING检测</a><a class="s2" href="http://dns.aizhan.com/">IP反查域名</a><a class="s3" href="http://whois.aizhan.com/">whois查询</a><a class="s4" href="http://whois.aizhan.com/reverse-whois/">whois反查</a></div>');
}else if($("#nav a.s3").hasClass('on')){
  $("#subnav").html('<div class="sub" id="sub4"><a class="s0" href="http://tools.aizhan.com/#c0">搜索优化查询</a><a class="s1" href="http://tools.aizhan.com/#c1">加密解密相关</a><a class="s2" href="http://tools.aizhan.com/#c2">编码转换相关</a><a class="s3" href="http://tools.aizhan.com/#c3">HTML相关类</a></div>');
}else if($("#nav a.s4").hasClass('on')){
  $("#subnav").html('<div class="sub" id="sub5"><a class="s1" href="#"></a><a class="s1" href="#"></a><a class="s1" href="#"></a><a class="s1" href="#"></a></div>');
}else{  
  $("#subnav").html(subdefault);
}


$("#nav a").click(function(){
  var _this = this;
  $("#nav a").removeClass("on");
  $(_this).addClass("on");

  if ($(_this).index()==2){
	$("#subnav").html('<div class="sub" id="sub3"><a class="s0" href="http://www.aizhan.com/tag/">相关站点</a><a class="s1" href="http://ping.aizhan.com/">PING检测</a><a class="s2" href="http://dns.aizhan.com/">IP反查域名</a><a class="s3" href="http://whois.aizhan.com/">whois查询</a><a class="s4" href="http://whois.aizhan.com/reverse-whois/">whois反查</a></div>');
  }else if ($(_this).index()==3){
	$("#subnav").html('<div class="sub" id="sub4"><a class="s0" href="http://tools.aizhan.com/#c0">搜索优化查询</a><a class="s1" href="http://tools.aizhan.com/#c1">加密解密相关</a><a class="s2" href="http://tools.aizhan.com/#c2">编码转换相关</a><a class="s3" href="http://tools.aizhan.com/#c3">HTML相关类</a></div>');
  }else if ($(_this).index()==4){
	$("#subnav").html('<div class="sub" id="sub5"><a class="s1" href="#"></a><a class="s1" href="#"></a><a class="s1" href="#"></a><a class="s1" href="#"></a></div>');
  }else{  
	$("#subnav").html(subdefault);
  }
})



// 导航 end

// 下拉 begin
$(".rss").hover(function() {
	$("#rss1").addClass("on");
	$("#rss2").show();
}, function() {
	$("#rss1").removeClass("on");
	$("#rss2").hide();
});
$(".user").hover(function() {
	$("#user1").addClass("on");
	if ($.cookie('userName')){
		$("#user2").show();
	} else {
		$("#user2").show(); $("#user2").css("width",144);
	}	
}, function() {
	$("#user1").removeClass("on");
	$("#user2").hide();
});
	
// 下拉 end

//显示隐藏微信 begin
$(".lnk a.s3").click(function() {
	$("#weixin").show();
});

$(".lnk span").click(function() {
	$("#weixin").hide();
});
//显示隐藏微信 end
