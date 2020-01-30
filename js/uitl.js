var baseUrl = "https://neur1n.github.io/";
// var baseUrl = "file:///F:/workspaces/git_ws/Neur1n.github.io/";

function setBase() {
  var base = document.createElement("base");
  base.setAttribute("href", baseUrl);
  document.head.appendChild(base);
}

function addTOCItem(text, tag) {
  document.write("<li><a href=\""+document.URL+tag+"\">" + text + "</a></li>");
}

function lastUpdateDate() {
  document.write("<p class=\"text-center\">Last update: " + document.lastModified + "</p>");
}
