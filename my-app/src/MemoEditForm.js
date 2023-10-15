import { useState } from "react";
import { useAuthContext } from "./AuthApp";

function MemoEditForm({
  editingMemo,
  setEditingMemo,
  handleEditButtonClick,
  handleDeleteButtonClick,
}) {
  const { loggedIn, login, logout } = useState();
  return (
    <div>
      <form>
        <textarea
          rows="5"
          value={editingMemo.content}
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
