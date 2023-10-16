import { useAuthContext } from "./AuthApp";

function MemoList({ allMemos, handleSelectedMemoClick }) {
  const handleClick = (event, memo) => {
    event.preventDefault();
    handleSelectedMemoClick(memo);
  };
  const { loggedOut, logIn, logOut } = useAuthContext();
  const memos = allMemos.map((memo) => (
    <li key={memo.id}>
      <a href=" " onClick={(event) => handleClick(event, memo)}>
        {memo.content.split("\n")[0]}
      </a>
    </li>
  ));
  const handleAuthButtonClick = () => {
    if (loggedOut) {
      logOut();
    } else {
      logIn();
    }
  };
  return (
    <div>
      <ul>{memos}</ul>
      <button onClick={handleAuthButtonClick} className="auth-button">
        {loggedOut ? "ログイン" : "ログアウト"}
      </button>
    </div>
  );
}

export default MemoList;
