window.onerror = function (message, source, lineno, colno, error) {
  console.error("出现错误: ", message, "在", source, "的第", lineno, "行，第", colno, "列。");
  alert("发生了一些错误，请稍后再试。");
}; 