import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import MemoCreateButton from "./MemoCreateButton";
import MemoEditForm from "./MemoEditForm";
import MemoList from "./MemoList";
import { AuthProvider } from "./AuthApp";

function MemoApp() {
  const [allMemos, setAllMemos] = useState([]);
  const [editingMemo, setEditingMemo] = useState("");

  useEffect(() => {
    const storedMemos = JSON.parse(localStorage.getItem("memos")) || [];
    setAllMemos(storedMemos);
  }, []);

  function saveMemosToLocalStorage(newMemos) {
    localStorage.setItem("memos", JSON.stringify(newMemos));
  }

  function saveAndSetMemos(newMemos) {
    saveMemosToLocalStorage(newMemos);
    setAllMemos(newMemos);
    setEditingMemo(null);
  }

  function handleCreateButtonClick() {
    setEditingMemo({ id: uuidv4(), content: "新規メモ" });
  }

  function handleEditButtonClick(id) {
    if (editingMemo.content === "") {
      alert("文字を入力してください");
      return;
    }

    let newMemos = [...allMemos];
    const targetMemo = allMemos.find((memo) => memo.id === id);

    if (!targetMemo) {
      newMemos = [...allMemos, editingMemo];
    } else {
      const updatedMemos = newMemos.map((memo) =>
        memo.id === id ? { ...memo, content: editingMemo.content } : memo
      );
      newMemos = updatedMemos;
    }
    saveAndSetMemos(newMemos);
  }

  function handleDeleteButtonClick() {
    const newMemos = allMemos.filter((memo) => memo.id !== editingMemo.id);
    saveAndSetMemos(newMemos);
  }

  return (
    <AuthProvider>
      <div id="memo-app">
        <div id="memo-create-button">
          <MemoCreateButton handleCreateButtonClick={handleCreateButtonClick} />
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
        <div id="memo-list">
          <MemoList
            allMemos={allMemos}
            handleSelectedMemoClick={(memo) => setEditingMemo(memo)}
          />
        </div>
      </div>
    </AuthProvider>
  );
}

export default MemoApp;
