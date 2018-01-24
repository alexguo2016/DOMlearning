function addLoadScript(func){
	var old_load = window.onload;
	if(window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			old_load();
			func();
		}
	}
}
