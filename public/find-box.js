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

document.getElementById("user-avatar").addEventListener("click", switchHomeIcon)

function switchHomeIcon() {
	document.getElementById("home-icon").setAttribute("src", "./images/main-menu/home-nofill.svg")
}
