import { useAuthContext } from "./AuthApp";

function MemoList({ allMemos, handleSelectedMemoClick }) {
  const { loggedIn, logIn, logOut } = useAuthContext();

  const handleClick = (event, memo) => {
    event.preventDefault();
    handleSelectedMemoClick(memo);
  };

  const memos = allMemos.map((memo) => (
    <li key={memo.id}>
      <a href=" " onClick={(event) => handleClick(event, memo)}>
        {memo.content.split("\n")[0]}
      </a>
    </li>
  ));

  const handleAuthButtonClick = () => {
    if (loggedIn) {
      logOut();
    } else {
      logIn();
    }
  };
  return (
    <div>
      <ul>{memos}</ul>
      <button onClick={handleAuthButtonClick} className="auth-button">
        {loggedIn ? "ログアウト" : "ログイン"}
      </button>
    </div>
  );
}

export default MemoList;
