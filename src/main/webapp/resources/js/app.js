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
		 context = $.context();
		 image = $.image();
	     view = $.javascript()+'/view.js';
	     setContentView();
	 };
	 var setContentView=()=>{
		 $.getScript(view,()=>{
    		 $(createHTag({
    			 num : '1',
    			 val : 'Hello'
    		 })).appendTo($wrapper);
         });
	 };
	 return{onCreate:onCreate}
})();
