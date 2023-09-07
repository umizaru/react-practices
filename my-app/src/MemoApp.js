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

  function handleEditButtonClick() {
    if (editingMemo.content === "") {
      alert("文字を入力してください");
      return;
    }

    const targetID = editingMemo.id;
    const targetMemoIndex = allMemos.findIndex((memo) => memo.id === targetID);

    if (targetMemoIndex === -1) {
      setAllMemos((memos) => [
        ...memos,
        { id: uuidv4(), content: editingMemo.content },
      ]);
    } else {
      const newMemos = [...allMemos];
      const updateMemos = {
        ...newMemos[targetMemoIndex],
        content: editingMemo.content,
      };
      newMemos[targetMemoIndex] = updateMemos;
      setAllMemos(newMemos);
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
