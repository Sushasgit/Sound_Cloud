var linkSignIn = document.getElementById('signlogin');
console.log(linkSignIn);
var popup = document.querySelector('.popup');
var popupClose=document.querySelector('.popup-close');
var popupInner= document.querySelector('.popup-inner');

linkSignIn.onclick =function(){
	popup.style.display='block';
}
popup.onclick= function(){
	popup.style.display='';
}
popupClose.onclick= function(){
	popup.style.display='';
}
popupInner.onclick=function(event){
	event.stopPropagation();
}