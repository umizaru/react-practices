function MemoEditForm({
  editingMemo,
  setEditingMemo,
  handleEditButtonClick,
  handleDeleteButtonClick,
}) {
  return (
    <div>
      <form>
        <textarea
          rows="5"
          value={editingMemo ? editingMemo.content : ""}
          onChange={(e) =>
            setEditingMemo({ ...editingMemo, content: e.target.value })
          }
        />
      </form>
      <button className="button" onClick={handleEditButtonClick}>
        編集
      </button>
      <button className="button" onClick={handleDeleteButtonClick}>
        削除
      </button>
    </div>
  );
}

export default MemoEditForm;
