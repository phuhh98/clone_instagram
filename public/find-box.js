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
var userMenuState = "hidden";
// addListenerId("user-avatar-container", "click", userMenu);
addListenerId("page", "click", userMenu);

function userMenu(event){
	let userAvatar = getId("user-avatar");

	if (userMenuState == "hidden" && event.target == userAvatar) {
		userMenuState = "visible";
		getId("user-avatar").style.border = "1.6px solid #000";
		getId("home-icon").setAttribute("src", "./images/main-menu/home-nofill.svg")
		getId("user-menu").style.visibility = userMenuState;
	} else if (userMenuState == "visible" || event.target != userAvatar) {
		userMenuState = "hidden";
		getId("user-avatar").style.border = "none";
		getId("home-icon").setAttribute("src", "./images/main-menu/home.svg");
		getId("user-menu").style.visibility = userMenuState;		
	}

}