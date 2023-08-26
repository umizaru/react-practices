import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import MemoList from "./MemoList";
import MemoCreateButton from "./MemoCreateButton";
import MemoEditForm from "./MemoEditForm";
import memos from "./memos.json";

function MemoApp() {
  const [allMemos, setAllMemos] = useState(memos);
  const [editingMemo, setEditingMemo] = useState(null);

  function handleCreateButtonClick() {
    setEditingMemo({ id: uuidv4(), content: "新規メモ" });
  }

  function handleEditButtonClick(memo) {
    if (editingMemo === "") {
      alert("文字を入力してください");
      return;
    }
    setAllMemos((prevMemos) => [
      ...prevMemos,
      { id: uuidv4(), content: memo.content },
    ]);
    setEditingMemo(null);
  }

  function handleDeleteButtonClick() {}

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
      <div id="memo-edit-form">
        <MemoEditForm
          editingMemo={editingMemo}
          setEditingMemo={setEditingMemo}
          handleEditButtonClick={(memo) => handleEditButtonClick(memo)}
          handleDeleteButtonClick={handleDeleteButtonClick}
        />
      </div>
    </div>
  );
}

export default MemoApp;
