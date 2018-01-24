function prepareLinks(){
	if(!document.getElementById || !document.getElementsByTagName){return false;}
	var links_list = document.getElementById("links_list");
	var links = links_list.getElementsByTagName("a");
	for(var i = 0;i < links.length;i++){
		links[i].onclick = function(){
			
//			console.log(photoView_title(this));
			return !photoView_title(this);
		}
	}
}
function photoView_title(photolink){
	if(!photolink.getAttribute){return false;}
	if(!document.getElementById){return false;}
	if(!document.getElementById("info")){return false;}
	
	var msg = photolink.getAttribute("title");
	var myInfo = document.getElementById("info")
	myInfo.firstChild.nodeValue = msg;
	//问题1，nodtValue怎样使用？
	var photohref = photolink.getAttribute("href");
	var showPart = document.getElementById("forShow");
	showPart.setAttribute("src",photohref);
	//表示选取结束，返回
	return true;
}

addLoadScript(prepareLinks);
//window.onload = photoView;