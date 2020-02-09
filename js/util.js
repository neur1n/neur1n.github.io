var baseUrl = "https://neur1n.github.io/";
// var baseUrl = "http://localhost:8080/";

function setBase() {
  var base = document.createElement("base");
  base.setAttribute("href", baseUrl);
  document.head.appendChild(base);
}

function addTOCItem(text, tag) {
  document.write("<li><a href=\""+document.URL+tag+"\">" + text + "</a></li>");
}

function lastUpdateDate() {
  document.write("<p style=\"text-align: center\">Last update: " + document.lastModified + "</p>");
}

function sourceLink(url) {
  document.write("<p style=\"text-align: center\">[<a href=" + url + " target=\"_blank\">source</a>]</p>");
}
