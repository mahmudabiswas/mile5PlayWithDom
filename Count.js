// 1. get the plus button
// 2.create a function and apply event
// 3.get the button
// 4.apply count

let count = 0;
function clickMe() {
  const btn = document.getElementById("plus");
  count += 1;
  btn.innerText = count;
}
// decrement btn

document.getElementById("decrement").addEventListener("click", function () {
  const btn = document.getElementById("plus");
  count -= 1;

  btn.innerText = count;
});
