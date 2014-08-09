function recursiveReplace(node) {
    if (node.nodeType == 3) {
	node.nodeValue = node.nodeValue.replace(/the cloud/g, "my butt");
	node.nodeValue = node.nodeValue.replace(/The cloud/g, "My butt");
	node.nodeValue = node.nodeValue.replace(/the Cloud/g, "my Butt");
	node.nodeValue = node.nodeValue.replace(/The Cloud/g, "My Butt");
        node.nodeValue = node.nodeValue.replace(/Cloud/g, "Butt");
	node.nodeValue = node.nodeValue.replace(/cloud/g, "butt");
    } else if (node.nodeType == 1) {
        $(node).contents().each(function () {
            recursiveReplace(this);
        });
    }
}

recursiveReplace(document.head);
recursiveReplace(document.body);
