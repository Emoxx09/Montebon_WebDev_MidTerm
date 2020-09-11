var subjectObject = {
  "Front-end": {

  },
  "Back-end": {

  }
}
window.onload = function() {
  var subjectSel = document.getElementById("subject");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
}