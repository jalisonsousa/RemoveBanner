var scriptTags = document.getElementsByTagName('script');
for (var i = 0; i < scriptTags.length; i++) {
    var scriptTag = scriptTags[i];
    var scriptContent = scriptTag.innerHTML;

    if (scriptContent.includes('cdn.000webhost.com')) {
        scriptTag.parentNode.removeChild(scriptTag);
        break;
    }
}

var divs = document.getElementsByTagName('div');
for (var j = 0; j < divs.length; j++) {
    var div = divs[j];
    var divInnerHTML = div.innerHTML;

    if (divInnerHTML.includes('cdn.000webhost.com')) {
        div.parentNode.removeChild(div);
        break;
    }
}
