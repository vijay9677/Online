/**
 * 
 */
var insertMenu = function(path){
	$.ajax({
		"url":""+path+"/json/menu.json",
		"success":function(resData){
			alert(responseData);
		},
		"error":function(errResData){
			alert("ERR"+errResData);
		}
		
	});
	
}






$("document").ready(function(){
	insertMenu(rootPath);
	
});