/**
 * 
 */
var app = app || {};

app = (()=>{
	var init = x =>{
	    $.getScript(x+'/resources/js/router.js',()=>{
	        $.extend(new Router(x));
	        app.mainPage.onCreate();
	    })
	};
	return {init:init};
})();

app.mainPage=(()=>{
	var $wrapper,context,view,image;
	var onCreate=()=>{
		 $wrapper = $('#wrapper');
		 $content = $('#content');
		 context = $.context();
		 image = $.image();
	     view = $.javascript()+'/view.js';
	     setContentView();
	     content();
	 };
	 var setContentView=()=>{
		 $.getScript(view,()=>{
    		 $(createDiv({
    			 id : 'wrap-tnb-menu',
    			 clazz : 'wrap-tnb-menu'
    		 })).appendTo($wrapper);
    		 $(createDiv({
    			 id : 'tnb-menu-text-right',
    			 clazz : 'tnb-menu text-right'
    		 })).appendTo('#wrap-tnb-menu');
    		 $(createATag({
    			 id : 'a-login',
    			 clazz : 'tnb-link',
    			 txt : '로그인'
    		 })).appendTo('#tnb-menu-text-right');
    		 $(createSpan({
    			 id : 'span-login',
    			 clazz : 'division',
    		 })).appendTo('#tnb-menu-text-right');
    		 $(createATag({
    			 id : 'a-join',
    			 clazz : 'tnb-link last',
    			 txt : '회원가입'
    		 })).appendTo('#tnb-menu-text-right');
         });
	 };
	 var content=()=>{
		 $.getScript(view,()=>{
			 $(doo()).appendTo($content);
		 });
	 };
	 return{onCreate:onCreate,content:content}
})();
