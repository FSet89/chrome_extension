chrome.storage.local.get("info", function (retrieved_data){
	var info = retrieved_data.info;
	var name = info.name;

	// generate element
	div = document.createElement('div');
	div.innerHTML = name;
	div.style.position = "fixed";
	div.style.right = "0";
	div.style.top = "0"
	div.style.fontSize = "x-large";
	div.style.zIndex = "1000000";

	document.body.appendChild(div);
	console.log("ok")
});