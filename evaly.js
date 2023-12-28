document.getElementById("submit").addEventListener("click", function () {
  const textAreaElement = document.getElementById("textarea");
  const textValue = textAreaElement.value;
  // create an element
  const p = document.createElement("p");
  p.innerText = textValue;
  // clear an text area
  textAreaElement.value = "";
  // append child an element
  const container = document.getElementById("addElement");
  container.appendChild(p);
});

// apply to enter button and show the text;

document.getElementById("textarea").addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const textAreaElement = document.getElementById("textarea");
    const textValue = textAreaElement.value;
    // create an element
    const p = document.createElement("p");
    p.innerText = textValue;
    // clear an text area
    textAreaElement.value = "";
    // append child an element
    const container = document.getElementById("addElement");
    container.appendChild(p);
  }
});
