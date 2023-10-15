import { useAuthContext } from "./AuthApp";
import { loggedIn, login, logout } from "./AuthApp";

function MemoCreateButton({ handleCreateButtonClick }) {
  const { loggedIn } = useAuthContext();

  console.log(loggedIn);

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
