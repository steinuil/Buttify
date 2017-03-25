function replacer(node) {
  if (node.nodeType == 3) {
    var matches = node.nodeValue.match(/(the )?cloud/gi);
    if (!matches) return;

    matches.forEach(function(match) {
      var len = match.length,
          str, chars;

      if (len == 9) {
        str = [ 'm', 'y', ' ', 'b', 'u', 't', 't' ];
        chars = [ 0, 2, 3, 4, 5, 7, 8 ];
      } else if (len == 5) {
        str = [ 'b', 'u', 't', 't' ];
        chars = [ 0, 1, 3, 4 ];
      } else return;

      for (var i = 0; i < chars.length; i++) {
        if (90 > match.charCodeAt(chars[i]) && match.charCodeAt(chars[i]) > 65) {
          str[i] = str[i].toUpperCase();
        }
      }

      node.nodeValue = node.nodeValue.replace(match, str.join(''));
    });
  } else if (node.nodeType == 1) {
    Array.from(node.childNodes).map(function(n) { replacer(n); });
  }
}

replacer(document.head);
replacer(document.body);
