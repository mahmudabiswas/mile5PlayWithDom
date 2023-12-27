function upperName(name) {
  console.log(name.toUpperCase());
}

function fullName(first, callBack) {
  const fullName = first + "lima";
  callBack(fullName);
}
fullName("khatun", upperName);
