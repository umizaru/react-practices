import { useAuthContext } from "./AuthApp";

function MemoCreateButton({ handleCreateButtonClick }) {
  const { loggedIn } = useAuthContext();

  if (!loggedIn) {
    return null;
  }
  return (
    <div>
      <button className="button" onClick={handleCreateButtonClick}>
        ＋
      </button>
    </div>
  );
}
export default MemoCreateButton;
