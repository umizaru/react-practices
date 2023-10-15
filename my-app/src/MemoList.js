import { useAuthContext } from "./AuthApp";

function MemoList({ allMemos, handleSelectedMemoClick }) {
  const handleClick = (event, memo) => {
    event.preventDefault();
    handleSelectedMemoClick(memo);
  };
  const { loggedIn, login, logout } = useAuthContext();
  const memos = allMemos.map((memo) => (
    <li key={memo.id}>
      <a href=" " onClick={(event) => handleClick(event, memo)}>
        {memo.content.split("\n")[0]}
      </a>
    </li>
  ));
  return (
    <div>
      <ul>{memos}</ul>
      <button onClick={loggedIn ? login : logout}>
        {loggedIn ? "ログイン" : "ログアウト"}
      </button>
    </div>
  );
}

export default MemoList;
