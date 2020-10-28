function getId(id) {
	return document.getElementById(id);
}

function addListenerId(id, event, func) {
	getId(id).addEventListener(event, func);
}

// add click event on find-box, find-box-container and find-cancel
addListenerId("find-container", "click", focusFindBox);
addListenerId("find-box", "focus", showCancelButton);
addListenerId("find-box", "blur", clearCancelButton);
addListenerId("find-cancel", "click", clearFindBox);

function focusFindBox(event) {
	document.getElementById("find-box").focus();
}

function showCancelButton() {
	document.getElementById("find-cancel").style.visibility = "visible";
}

function clearCancelButton() {
	document.getElementById("find-cancel").style.visibility = "hidden";
	clearFindBox();
}

function clearFindBox(event) {
	document.getElementById("find-box").value = "";
}


//show user menu and change home-icon
addListenerId("user-avatar-container", "click", userMenu);
addListenerId("user-avatar-container", "mouseleave", clearUserMenu);

function userMenu(){
	document.getElementById("user-avatar").style.border = "1.6px solid #000";
	document.getElementById("home-icon").setAttribute("src", "./images/main-menu/home-nofill.svg")
	getId("user-menu").style.visibility = "visible";
}

function clearUserMenu() {
	document.getElementById("user-avatar").style.border = "none";
	document.getElementById("home-icon").setAttribute("src", "./images/main-menu/home.svg");
	getId("user-menu").style.visibility = "hidden";
}