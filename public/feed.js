var friendImgs = [
	"./images/avatar/friend-01.png",
	"./images/avatar/friend-02.png",
	"./images/avatar/friend-03.png",
	"./images/avatar/friend-04.png",
	"./images/avatar/friend-05.png",
];
var friendNames = ["gordon_ramsey", "boneking", "aluha_akba", "seventh_child", "mocoro"];
var contentImgs = [
	"./images/post/post-01.png",
	"./images/post/post-02.png",
	"./images/post/post-03.png",
	"./images/post/post-04.png",
	"./images/post/post-05.png",
]
var likecount = [123,246,768,1234,135];
var description = [
	"Look at this art! It so amazing, right?",
	"meooooooooooowwwwwwwwwwwwwwwwwwwwwww. Good day in a while right!!!",
	"human act so wierd these days. Haizz!! I wanna fly in to space. woof-woof... oops! I'm a cat, am I?",
	"haha.... I got her love.",
	"just about to sleep in my grandma warm hands."
];

renderFeed();

//render feed to browser
function renderFeed() {
	let feed = document.getElementById("feed");
	for (let i = 0; i < friendImgs.length; i++) {
	feed.appendChild(article(friendImgs[i], friendNames[i], contentImgs[i], likecount[i], description[i]));
	}
	addXemThemButton();
}


//return feed-article element
function article(avatarUrl, name, contentUrl, likecount, description) {
	let article = document.createElement("DIV");
	article.className = "feed-article";
	article.appendChild(articleHead(avatarUrl, name));
	article.appendChild(articleContent(contentUrl));
	article.appendChild(articleAction_button());
	article.appendChild(articleLikeCount(likecount));
	article.appendChild(articleDescription(name, description));
	article.appendChild(articleComment());
	article.appendChild(articleCommentBox());

	return article;
}

//return article-comment_box element
function articleCommentBox() {
	let comment_box = document.createElement("DIV");
	let input = document.createElement("INPUT");
	let submit = document.createElement("BUTTON");
	comment_box.className = "article-comment_box";
	input.type = "text";
	input.placeholder = "Thêm bình luận"
	input.className = "comment_box_input";
	input.addEventListener("input", changeSubmit);

	submit.className = "comment_box_button_submit";
	submit.innerHTML = "Đăng";
	submit.type = "button";
	submit.disable = true;
	submit.addEventListener("click", clearComment);

	comment_box.appendChild(input);
	comment_box.appendChild(submit);
	return comment_box;
}

//change submit button color and state 
function changeSubmit(event) {
	let submit =  event.path[1].children[1];
	if (event.target.value) {
		submit.disable = false;
		submit.style.color = "#0095F6";
		submit.style.cursor = "pointer";
	} else {
		submit.disable = true;
		submit.style.color = "#BADFFC";

	}
}
//clear comment box on submit button clicked;
function clearComment(event) {
	let comment_box = event.path[1].children[0];
	if (comment_box.value != "") {
		comment_box.value = "";
		event.target.style.color = "#BADFFC";
		event.target.disable = true;
	}
}


//return article-comment element
function articleComment() {
	let article_comment = document.createElement("DIV");
	article_comment.className = "article-comment";

	return article_comment;
}


//return article description
function articleDescription(name, description) {
	if (description) {
		article_description_wrapper = document.createElement("DIV");
		article_description_content = document.createElement("SPAN");
		article_description_wrapper.className = "article-description_wrapper";
		article_description_content.className = "article-description-content";
		article_description_wrapper.appendChild(accName(name));
		article_description_content.innerHTML = description || "";
		article_description_wrapper.appendChild(article_description_content);
	
		return article_description_wrapper;
	} else {
		return document.createElement("DIV");
	} 
}

//attach xem them button to description scrollHeigt more than cliendHeight or literally overflowed.
function addXemThemButton() {
	let article_description = document.getElementsByClassName("article-description_wrapper");
	for (let i = 0; i <= article_description.length - 1; i++) {
		if (article_description[i].scrollHeight - 6 >= article_description[i].clientHeight) {
			let xemThemButton = document.createElement("BUTTON");
			xemThemButton.addEventListener("click", showMoreDes);
			xemThemButton.innerText = "... thêm";
			xemThemButton.className = "article-description-button_more";
			article_description[i].appendChild(xemThemButton);
		}
	}
}
//action when xem them button clicked
function showMoreDes(event) {
	console.log(event);
	let button = event.target;
	button.style.display = "none";
	event.path[1].style.maxHeight = "100%";
}



//return like_count element
function articleLikeCount(like) {
	let like_count = document.createElement("DIV");
	like_count.className = "article-like_count";
	like_count.innerText = `${threeNumber(like) } lượt thích`;
	return like_count;
}
//change add comma to number more than 3 digits
function threeNumber(number) {
	let text = number.toString().split("").reverse();
	let temp = [];
	if (text.length > 3) {
		for (let i = text.length -1; i >= 0; i--)
			if ((i)%3 === 0 & i>0) {
				temp.push(text[i]);
				temp.push(",");
			} else {
				temp.push(text[i])
			}
		return temp.join("");
	} else {
		return number;
	}

}

//return article-action_button element
function articleAction_button() {
	let buttonWrapper = document.createElement("DIV");
	buttonWrapper.className = "article-action_button";
	let heart = document.createElement("IMG");
	let heartWrapper = document.createElement("DIV");
	let comment = document.createElement("IMG");
	let commentWrapper = document.createElement("DIV");
	let send = document.createElement("IMG");
	let sendWrapper = document.createElement("DIV");
	let save = document.createElement("IMG");
	let saveWrapper = document.createElement("DIV");
	let saveExpandBar = document.createElement("DIV");

	heart.src = "./images/main-menu/heart.svg";
	heart.className = "action_button button_heart";
	heart.addEventListener("click", changeHeart);
	heartWrapper.className = "button_wrapper";
	heartWrapper.appendChild(heart);

	comment.src = "./images/main-menu/comment.svg";
	comment.className = "action_button button_comment";
	commentWrapper.className = "button_wrapper";
	commentWrapper.appendChild(comment);

	send.src = "./images/main-menu/send.svg";
	send.className = "action_button button_send";
	sendWrapper.className = "button_wrapper";
	sendWrapper.appendChild(send);

	save.src = "./images/main-menu/saved-nofill.svg";
	save.className = "action_button button_save";
	save.addEventListener("click", changeSave);
	saveWrapper.className = "button_wrapper";
	saveWrapper.appendChild(save);
	saveExpandBar.className = "button_save_expand_bar";
	saveExpandBar.appendChild(saveWrapper);

	buttonWrapper.appendChild(heartWrapper);
	buttonWrapper.appendChild(commentWrapper);
	buttonWrapper.appendChild(sendWrapper);
	buttonWrapper.appendChild(saveExpandBar);
	return buttonWrapper;
}
//change heart icon
function changeHeart(event) {
	let heart = event.target;
	if (heart.src.includes("/heart.svg")) {
		heart.src = "./images/main-menu/liked.svg";
	} else {
		heart.src = "./images/main-menu/heart.svg"
	}
	setTimeout(function() {
		heart.style.width = "30px";
		heart.style.height = "30px";
	}, 100)
	heart.style.width = "32px";
	heart.style.height = "32px";
}
//change save icon
function changeSave(event) {
	let save = event.target;
	if (save.src.includes("/saved-nofill.svg")) {
		save.src = "./images/main-menu/saved-fill.svg"
	} else {
		save.src = "./images/main-menu/saved-nofill.svg"
	}
	setTimeout(function() {
		save.style.width = "30px";
		save.style.height = "30px";
	}, 100)
	save.style.width = "32px";
	save.style.height = "32px";
}

//return article-content element
function articleContent(contentUrl) {
	let contentWrapper = document.createElement("DIV");
	let content = document.createElement("IMG");
	content.className = "content-img";
	content.src = contentUrl;
	content.witdh = "628";
	contentWrapper.className = "article-content";
	contentWrapper.appendChild(content);
	return contentWrapper;
}


//return article-head div element
function articleHead(avatarUrl, name) {
	let articleHead = document.createElement("DIV");
	let moreButton = document.createElement("IMG");
	moreButton.src = "./images/main-menu/more.svg";
	moreButton.className = "action_button button_more";

	articleHead.className = "article_head";
	articleHead.appendChild(avatar(avatarUrl));
	articleHead.appendChild(accName(name));
	articleHead.appendChild(moreButton);
	return articleHead;
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
//return div with class account-name
function accName(name) {
	let temp = document.createElement("SPAN");
	temp.className = "account-name";
	temp.innerHTML = `<a href="#">${name}</a>`;
	return temp;
}