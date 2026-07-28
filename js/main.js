(function () {
  var gunbarrel = document.getElementById("gunbarrel");
  if (gunbarrel) {
    window.setTimeout(function () {
      gunbarrel.remove();
    }, 2200);
  }

  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
