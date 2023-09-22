function MemoList({ allMemos, handleSelectedMemoClick }) {
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
  return <ul>{memos}</ul>;
}

export default MemoList;
