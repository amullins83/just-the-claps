const HANDS = String.fromCodePoint(0x1f44f);
var copyText = "";

document.addEventListener("copy", function(event) {
	event.clipboardData.setData("text/plain", copyText);
	event.preventDefault();
});

function copyWithClaps(info) {
	copyText = info.selectionText.toUpperCase().replace(/[\b\s\.\,]+/g, HANDS);
	document.execCommand("copy", false, null);
}

var id = chrome.contextMenus.create({"title": "Copy with claps", "contexts":["selection"],
                                     "onclick": copyWithClaps});
