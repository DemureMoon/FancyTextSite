function bigText() {
  document.getElementById("Text").style.fontSize = "24pt";
}

function fancy() {
  document.getElementById("Text").style.fontWeight = "bold";
  document.getElementById("Text").style.color = "#81d7db";
  document.getElementById("Text").style.textDecoration = "underline";
}

function boring() {
  document.getElementById("Text").style.fontWeight = "";
  document.getElementById("Text").style.color = "";
  document.getElementById("Text").style.textDecoration = "";
}

function moo() {
  document.getElementById("Text").style.textTransform = "uppercase";
  var string = document.getElementById("Text").value;
  var split = string.split(".");
  var join = split.join(" -Moo");
  document.getElementById("Text").value = join;
}
