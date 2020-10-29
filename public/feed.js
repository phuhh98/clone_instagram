var feed = document.getElementById("feed");
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
];

feed.appendChild(article(friendImgs[0], friendNames[0], contentImgs[0], likecount[0]))


//return feed-article element
function article(avatarUrl, name, contentUrl, likecount, description) {
	let article = document.createElement("DIV");
	article.className = "feed-article";
	article.appendChild(articleHead(avatarUrl, name));
	article.appendChild(articleContent(contentUrl));
	article.appendChild(articleAction_button());
	article.appendChild(articleLikeCount(likecount));
	article.appendChild(articleDescription(description));
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
	submit.className = "comment_box_button_submit";
	submit.innerHTML = "Đăng";
	submit.type = "button";
	submit.disable = true;
	comment_box.appendChild(input);
	comment_box.appendChild(submit);
	return comment_box;
}


//return article-comment element
function articleComment() {
	let article_comment = document.createElement("DIV");
	article_comment.className = "article-comment";

	return article_comment;
}


//return article description
function articleDescription(string) {
	article_description = document.createElement("DIV");
	article_description.className = "article-description";
	article_description.innerText = string || "";
	return article_description;
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
	let comment = document.createElement("IMG");
	let send = document.createElement("IMG");
	let save = document.createElement("IMG");
	let saveWrapper = document.createElement("DIV");

	heart.src = "./images/main-menu/heart.svg";
	heart.className = "action_button button_heart";
	comment.src = "./images/main-menu/comment.svg";
	comment.className = "action_button button_comment";
	send.src = "./images/main-menu/send.svg";
	send.className = "action_button button_send";
	save.src = "./images/main-menu/saved-nofill.svg";
	save.className = "action_button button_save";
	saveWrapper.className = "button_save_wrapper";
	saveWrapper.appendChild(save);

	buttonWrapper.appendChild(heart);
	buttonWrapper.appendChild(comment);
	buttonWrapper.appendChild(send);
	buttonWrapper.appendChild(saveWrapper);
	return buttonWrapper;
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
	let temp = document.createElement("DIV");
	temp.className = "account-name";
	temp.innerHTML = `<a href="#">${name}</a>`;
	return temp;
}