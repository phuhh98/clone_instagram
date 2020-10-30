let urls = [
"./images/avatar/user-01.png",
"./images/avatar/user-02.png",
"./images/avatar/user-03.png",
"./images/avatar/user-04.png",
"./images/avatar/user-05.png"];
let	names = [ "ramenrider", "apassbytraveler", "gameofthrone", "yabaiba", "theking"];
let status = ["Theo dõi bạn", "Theo dõi bạn", "Theo dõi bạn", "Theo dõi bạn", "Theo dõi bạn",]

//take div element with id follow
let follow = document.getElementById("follow");

//render other users
for (let index = 0; index < urls.length; index++) {
	follow.appendChild(infoUser(urls[index], names[index], status[index]))
}

//return div element with info-user class contain image (url), name and follow-status;
function infoUser(url, name, status) {
	let div = document.createElement("DIV");
	div.className = "info-user";
	div.appendChild(avatar(url));
	div.appendChild(infoDetail(name, status));
	div.appendChild(followButton());
	return div;
}


// return img with class avatar wrapped by <a> inside <div>
function avatar(url) {
	let div = document.createElement("DIV");
	let a = document.createElement("A");
	let img = document.createElement("IMG");
	img.src = url;
	img.width = 40;
	img.height = 40;
	img.className = "avatar";
	div.appendChild(a.appendChild(img));
	return div;
}

//return div with class info-detail
function infoDetail(name, status) {
	let temp = document.createElement("DIV");
	temp.className = "info-detail";
	temp.appendChild(accName(name));
	temp.appendChild(followStatus(status));
	return temp;
}
//return div with class account-name
function accName(name) {
	let temp = document.createElement("DIV");
	temp.className = "account-name";
	temp.innerHTML = `<a href="#">${name}</a>`;
	return temp;
}
//return div with class follow-status
function followStatus(status) {
	let temp = document.createElement("DIV");
	temp.className = "follow-status";
	temp.innerHTML = status;
	return temp;
}

function followButton(){
	let button = document.createElement("DIV");
	button.innerText = "Theo dõi";
	button.className = "follow-button";
	button.role = "aria-pressed";
	return button;
}


//add eventlistener for follow-button
let follow_buttons = document.getElementsByClassName("follow-button");
for (let index = 0; index < follow_buttons.length; index++) {
	follow_buttons[index].id = index;
	follow_buttons[index].addEventListener("click", followed)
	follow_buttons[index].style.cursor = "pointer";
}

function followed(event) {
	let button = event.target;
	if (button.innerHTML == "Theo dõi") {
		button.innerHTML = "Đang theo dõi";
		button.style.color = "#222";
	} else {
		button.innerHTML = "Theo dõi";
		button.style.color = "#28A0F5";
	}

}