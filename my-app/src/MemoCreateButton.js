import { useAuthContext } from "./AuthApp";

function MemoCreateButton({ handleCreateButtonClick }) {
  const { loggedOut } = useAuthContext();

  if (loggedOut) {
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
