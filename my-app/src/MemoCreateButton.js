import { useAuthContext } from "./AuthApp";

function MemoCreateButton({ handleCreateButtonClick }) {
  return (
    <div>
      <button className="button" onClick={handleCreateButtonClick}>
        ＋
      </button>
    </div>
  );
}
export default MemoCreateButton;
