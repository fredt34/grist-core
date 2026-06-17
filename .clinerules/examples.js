(function (css) {
  var el =
    document.getElementById("grist-demo-css") ||
    document.createElement("style");
  el.id = "grist-demo-css";
  el.textContent = css;
  document.head.appendChild(el);
})(`
  /* === YOUR DEMO CSS HERE === */
  body, input, textarea, button, select {
    font-family: 'Arial', serif !important;
  }
  .column_name { font-weight: bold; color: red; }
  .tour-share-icon {
    display: none;
}
.column_name { font-weight: bold; color: red; }
`);

// remove
var el = document.getElementById("grist-demo-css");
if (el) el.remove();
