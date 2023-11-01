import { useAuthContext } from "./AuthApp";

function MemoEditForm({
  editingMemo,
  setEditingMemo,
  handleEditButtonClick,
  handleDeleteButtonClick,
}) {
  const { loggedIn } = useAuthContext();
  return (
    <div>
      <form>
        <textarea
          className="textarea"
          rows="5"
          value={editingMemo.content}
          onChange={(e) =>
            setEditingMemo({ ...editingMemo, content: e.target.value })
          }
          readOnly={!loggedIn}
        />
      </form>
      {loggedIn && (
        <>
          <button
            className="button"
            onClick={() => handleEditButtonClick(editingMemo.id)}
          >
            編集
          </button>
          <button className="button" onClick={handleDeleteButtonClick}>
            削除
          </button>
        </>
      )}
    </div>
  );
}

export default MemoEditForm;
