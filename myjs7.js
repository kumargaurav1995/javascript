function newParagraph1(){
	
	//this creates heading
	var text1=document.createTextNode("history");
	var element1=document.createElement("h2");
	element1.appendChild(text1);
	var main=document.getElementById("main");
	main.appendChild(element1);
	
	
	
// this creates paragraph
var text=document.createTextNode("The history of India is very rich.");
var element=document.createElement("p");
element.appendChild(text);
main.appendChild(element);

//creating attributes

var pAttribute=document.createAttribure("id");
pAttribute.value="test";
element.setAttributeNode(pAttribute);

}


function removeParagraph1(){

//this removes header
var elementH=document.getElementByTagName("h2")[1];
var parent1=elementH.parentNode;
parent1.removeChild(elementH);

//this removes paragraph
var elementP=document.getElementByTagName("p")[1];
parent1.removeChild(elementP);

}