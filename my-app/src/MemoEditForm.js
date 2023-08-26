function MemoEditForm({
  editingMemo,
  setEditingMemo,
  handleEditButtonClick,
  handleDeleteButtonClick,
}) {
  return (
    <div>
      <form>
        <input
          type="text"
          value={editingMemo}
          onChange={(e) => setEditingMemo(e.target.value)}
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
