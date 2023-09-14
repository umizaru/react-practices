import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import MemoList from "./MemoList";
import MemoCreateButton from "./MemoCreateButton";
import MemoEditForm from "./MemoEditForm";

function MemoApp() {
  const [allMemos, setAllMemos] = useState([]);
  const [editingMemo, setEditingMemo] = useState("");

  // 初期化したときにローカルストレージからデータを読み込む
  function loadMemos() {
    const storedMemos = JSON.parse(localStorage.getItem("memos")) || [];
    setAllMemos(storedMemos);
  }

  // ページを読み込んだときにローカルストレージからデータを読み込む
  window.addEventListener("load", loadMemos);

  function handleCreateButtonClick() {
    setEditingMemo({ id: uuidv4(), content: "新規メモ" });
  }

  function handleEditButtonClick() {
    if (editingMemo.content === "") {
      alert("文字を入力してください");
      return;
    }

    const targetID = editingMemo.id;
    const targetMemoIndex = allMemos.findIndex((memo) => memo.id === targetID);

    if (targetMemoIndex === -1) {
      // 新規メモの場合
      setAllMemos((memos) => [
        ...memos,
        { id: uuidv4(), content: editingMemo.content },
      ]);
      localStorage.setItem("memos", JSON.stringify(editingMemo));
    } else {
      //既存メモの場合
      const newMemos = [...allMemos];
      const updateMemos = {
        ...newMemos[targetMemoIndex],
        content: editingMemo.content,
      };
      newMemos[targetMemoIndex] = updateMemos;
      setAllMemos(newMemos);
      localStorage.setItem("memos", JSON.stringify(newMemos));
    }
    setEditingMemo(null);
  }

  function handleDeleteButtonClick() {
    const targetID = editingMemo.id;
    const targetMemoIndex = allMemos.findIndex((memo) => memo.id === targetID);

    if (targetMemoIndex === -1) {
      return null;
    } else {
      setAllMemos(allMemos.filter((memo) => memo.id !== targetID));
      localStorage.setItem("memos", JSON.stringify(editingMemo));
      setEditingMemo(null);
    }
  }

  return (
    <div id="memo-app">
      <div id="memo-create-button">
        <MemoCreateButton handleCreateButtonClick={handleCreateButtonClick} />
      </div>
      <div id="memo-list">
        <MemoList
          allMemos={allMemos}
          handleSelectedMemoClick={(memo) => setEditingMemo(memo)}
        />
      </div>
      {editingMemo ? (
        <div id="memo-edit-form">
          <MemoEditForm
            editingMemo={editingMemo}
            setEditingMemo={setEditingMemo}
            handleEditButtonClick={handleEditButtonClick}
            handleDeleteButtonClick={handleDeleteButtonClick}
          />
        </div>
      ) : null}
    </div>
  );
}

export default MemoApp;
