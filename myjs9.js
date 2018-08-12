function validate() {
	
	var con=confirm("Are you done!!");
	if(con==true){
var box=document.getElementById("name");
var box2=document.getElementById("address");

if(box.value.length<5 || box2.value.length<5){
	alert("The field marked in red cannot be blank");
	box.focus();
	box2.focus();
	box.style.border="solid 3px red";
	box2.style.border="solid 3px red";
    return false;
	

}
	}


	
}