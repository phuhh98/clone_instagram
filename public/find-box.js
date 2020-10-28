document.getElementById("find-container").addEventListener("click", focusFindBox);
document.getElementById("find-cancel").addEventListener("click", blurFindBox);

function focusFindBox() {
	document.getElementById("find-container").style.textAlign = left;
	document.getElementById("find-cancel").style.visibility = visible;
	document.getElementById("find-box").focus();
	
}
function blurFindBox() {
	document.getElementById("find-box").blur();
}
