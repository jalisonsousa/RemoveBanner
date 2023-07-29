window.onload = function() {
// Remove o elemento <div> que contém o banner
var elementToRemove = document.querySelector('div[style*="text-align:right;position:fixed;z-index:9999999;bottom:0;width:auto;right:1%;cursor:pointer;line-height:0;display:block!important"]');
if (elementToRemove) {
  elementToRemove.parentNode.removeChild(elementToRemove);
}

// Oculta o elemento <script> que contém o código relacionado ao banner
var scriptElements = document.getElementsByTagName('script');
for (var i = 0; i < scriptElements.length; i++) {
  var script = scriptElements[i];
  if (script.src.includes("footer-powered-by-000webhost-white2.png")) {
    script.style.display = 'none';
    break;
  }
}
;
  };

