function pullDown() {
  const pullDownButton = document.getElementById("lists");
  const pullDownParents = document.getElementById("pull-down");
  // querySelectorAllメソッドでHTML要素を取得し、配列で格納
  const pullDownChild = document.querySelectorAll(".pull-down-list");
  const currentList = document.getElementById("current-list");

  pullDownButton.addEventListener("mouseover", function() {
    this.setAttribute("style", "background-color: red;")
  });

  pullDownButton.addEventListener("mouseout", function() {
    this.removeAttribute("style");
  });

  pullDownButton.addEventListener("click", function() {
    // 条件分岐で表示非表示を分ける
    if (pullDownParents.getAttribute("style") == "display: block;") {
      pullDownParents.removeAttribute("style");
    } else {
      pullDownParents.setAttribute("style", "display: block;")
    };
  });

  pullDownChild.forEach(function(list) {
    list.addEventListener("click", function() {
      value = list.innerHTML;  // innerHTMLで文字列を取得
      currentList.innerHTML = value;  // innerHTMLでHTML要素を書き換え
    });
  });
}

window.addEventListener("load", pullDown);

