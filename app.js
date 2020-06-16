//CSS FUNCTION TO LOAD IT DIRECTLY

function loadCSS() {
  var $head = $("#preview").contents().find("head");
  $head.html("<style>" + editor.getValue() + "</style>");
}

var delay;
// Initialize CodeMirror editor for Css.
var editor = CodeMirror.fromTextArea(document.getElementById("css-editor"), {
  lineNumbers: true,
  styleActiveLine: true,
  mode: "css",
  viewportMargin: Infinity,
  theme: "dracula",
  matchBrackets: true,
  autoCloseBrackets: true,
  lineWrapping: false,
});
editor.on("change", function () {
  clearTimeout(delay);

  delay = setTimeout(updatePreview, 300);
});

function updatePreview() {
  loadCSS();
}
setTimeout(updatePreview, 300);

var delay2;
// Initialize CodeMirror editor for html5 .
var editor2 = CodeMirror.fromTextArea(document.getElementById("html-editor"), {
  matchTags: { bothTags: true },
  extraKeys: { "Ctrl-J": "toMatchingTag" },
  autoCloseTags: true,
  viewportMargin: Infinity,
  styleActiveLine: true,
  lineNumbers: true,
  mode: "htmlmixed",
  autoCloseBrackets: true,
  theme: "dracula",
  matchBrackets: true,
  lineWrapping: false,
  extraKeys: {
    "Ctrl-Q": function (cm) {
      cm.wrapParagraph(cm.getCursor(), options);
    },
  },
});
editor2.on("change", function () {
  clearTimeout(delay2);

  delay2 = setTimeout(updatePreview2, 300);
});

function updatePreview2() {
  var previewFrame2 = document.getElementById("preview");
  var preview2 =
    previewFrame2.contentDocument || previewFrame2.contentWindow.document;
  preview2.open();
  preview2.write(editor2.getValue());
  preview2.close();
  loadCSS();
}
setTimeout(updatePreview2, 300);
var wait,
  options = { column: 100 },
  changing = false;
editor2.on("change", function (cm, change) {
  if (changing) return;
  clearTimeout(wait);
  wait = setTimeout(function () {
    changing = true;
    cm.wrapParagraphsInRange(
      change.from,
      CodeMirror.changeEnd(change),
      options
    );
    changing = false;
  }, 200);
});

var editor3 = CodeMirror.fromTextArea(document.getElementById("js-editor"), {
  lineNumbers: true,
  mode: "javascript",
  styleActiveLine: true,
  theme: "dracula",
  autoCloseBrackets: true,
  viewportMargin: Infinity,
  matchBrackets: true,
  lineWrapping: true,
});
