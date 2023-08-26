import memos from "./memos.json";
console.log(memos);

// function saveEditedMemo(editedMemo) {
//   const savedMemos = JSON.parse(localStorage.getItem("memos"));
//   const memoIndex = savedMemos.findIndex((memo) => memo.id === editedMemo.id);
//   if (memoIndex !== -1) {
//     savedMemos[memoIndex] = editedMemo;
//     localStorage.setItem("memos", JSON.stringify(savedMemos));
//   }
// }
