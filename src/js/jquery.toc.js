/*!
 * toc - jQuery Table of Contents Plugin
 * v0.3.2
 * http://projects.jga.me/toc/
 * copyright Greg Allen 2014
 * MIT License
*/
!function(a){a.fn.smoothScroller=function(b){b=a.extend({},a.fn.smoothScroller.defaults,b);var c=a(this);return a(b.scrollEl).animate({scrollTop:c.offset().top-a(b.scrollEl).offset().top-b.offset},b.speed,b.ease,function(){var a=c.attr("id");a.length&&(history.pushState?history.pushState(null,null,"#"+a):document.location.hash=a),c.trigger("smoothScrollerComplete")}),this},a.fn.smoothScroller.defaults={speed:400,ease:"swing",scrollEl:"body,html",offset:0},a("body").on("click","[data-smoothscroller]",function(b){b.preventDefault();var c=a(this).attr("href");0===c.indexOf("#")&&a(c).smoothScroller()})}(jQuery),function(a){var b={};a.fn.toc=function(b){var c,d=this,e=a.extend({},jQuery.fn.toc.defaults,b),f=a(e.container),g=a(e.selectors,f),h=[],i=e.activeClass,j=function(b,c){if(e.smoothScrolling&&"function"==typeof e.smoothScrolling){b.preventDefault();var f=a(b.target).attr("href");e.smoothScrolling(f,e,c)}a("li",d).removeClass(i),a(b.target).parent().addClass(i)},k=function(){c&&clearTimeout(c),c=setTimeout(function(){for(var b,c=a(window).scrollTop(),f=Number.MAX_VALUE,g=0,j=0,k=h.length;k>j;j++){var l=Math.abs(h[j]-c);f>l&&(g=j,f=l)}a("li",d).removeClass(i),b=a("li:eq("+g+")",d).addClass(i),e.onHighlight(b)},50)};return e.highlightOnScroll&&(a(window).bind("scroll",k),k()),this.each(function(){var b=a(this),c=a(e.listType);g.each(function(d,f){var g=a(f);h.push(g.offset().top-e.highlightOffset);var i=e.anchorName(d,f,e.prefix);if(f.id!==i){a("<span/>").attr("id",i).insertBefore(g)}var l=a("<a/>").text(e.headerText(d,f,g)).attr("href","#"+i).bind("click",function(c){a(window).unbind("scroll",k),j(c,function(){a(window).bind("scroll",k)}),b.trigger("selected",a(this).attr("href"))}),m=a("<li/>").addClass(e.itemClass(d,f,g,e.prefix)).append(l);c.append(m)}),b.html(c)})},jQuery.fn.toc.defaults={container:"body",listType:"<ul/>",selectors:"h1,h2,h3",smoothScrolling:function(b,c,d){a(b).smoothScroller({offset:c.scrollToOffset}).on("smoothScrollerComplete",function(){d()})},scrollToOffset:0,prefix:"toc",activeClass:"toc-active",onHighlight:function(){},highlightOnScroll:!0,highlightOffset:100,anchorName:function(c,d,e){if(d.id.length)return d.id;var f=a(d).text().replace(/[^a-z0-9]/gi," ").replace(/\s+/g,"-").toLowerCase();if(b[f]){for(var g=2;b[f+g];)g++;f=f+"-"+g}return b[f]=!0,e+"-"+f},headerText:function(a,b,c){return c.text()},itemClass:function(a,b,c,d){return d+"-"+c[0].tagName.toLowerCase()}}}(jQuery);

$(function() {

	// Toc launch
	
	$('#toc').toc({
		smoothScrolling: false 
	});
	
});