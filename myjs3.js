function changeStyle(){
	var paragraph=document.getElementByTagName("p");
	for(var i=0;i<paragraph.length;i++){
		paragraph[i].style.fontStyle="italic";
}
}