//shorted dom functions
function getId(id) {
	return document.getElementById(id);
}

function addListenerId(id, event, func) {
	getId(id).addEventListener(event, func);
}

export addListenerId;