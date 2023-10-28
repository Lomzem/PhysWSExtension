(function phys_ws() {
    const wsDiv = document.getElementById("context_module_content_249124");
    const ul = wsDiv.getElementsByTagName("ul")[0];
    ul.innerHTML = ul.children[ul.children.length - 1].innerHTML;

    const icons = ul.getElementsByClassName("ig-type-icon")[0];
    icons.replaceChildren(icons.children[0]);

    ul.getElementsByClassName("title locked_title")[0].innerHTML = "";
    ul.getElementsByClassName("ig-details")[0].innerHTML = "";
})();
