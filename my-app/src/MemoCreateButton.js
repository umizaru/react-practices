function MemoCreateButton({ handleCreateButtonClick }) {
  return (
    <div>
      <button className="button" onClick={handleCreateButtonClick}>
        新規作成
      </button>
    </div>
  );
}
export default MemoCreateButton;
