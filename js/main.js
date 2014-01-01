function modifyDom(elements, prefix) {
        for (var i=0; i<elements.length; i++) {
            var el = elements[i];
            var mediaQuery = el.getAttribute("media");
            var match = window.matchMedia(mediaQuery).matches;
            var src = (prefix || "") + "src";
            if (el.tagName === "IMG" || el.tagName === "SCRIPT") {
                if (match) {
                    var set = src, unset = "unset-src";
                } else {
                    var set = "unset-src", unset = src;
                }
                if (el.hasAttribute(unset)) {
                    el.setAttribute(set, el.getAttribute(unset));
                    el.removeAttribute(unset);
                }
            }
        }
    }
window.onresize = function() {
  var mediaElements = document.querySelectorAll("[media]");
  modifyDom(mediaElements);
}
