window.addEventListener("load", function() {

  const pullDownButton = document.getElementById("lists");
  const pullDownParents = document.getElementById("pull-down");

  pullDownButton.addEventListener("mouseover", function() {
    this.setAttribute("style", "background-color: red;")
  });

  pullDownButton.addEventListener("mouseout", function() {
    this.removeAttribute("style");
  });

  pullDownButton.addEventListener("click", function() {
    
    if (pullDownParents.getAttribute("style") == "display: block;") {
      pullDownParents.removeAttribute("style");
    } else {
      pullDownParents.setAttribute("style", "display: block;")
    };
  });
});

