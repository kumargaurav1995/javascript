function changeStyle(){
	var paragraph=document.getElementsByClassName('para');
	var first=paragraph[0].innerHTML;
	var second=paragraph[1].innerHTML;
	var third=paragraph[2].innerHTML=first+second;
	var first=paragraph[0].innerHTML=" ";
	var second=paragraph[1].innerHTML=" ";
}