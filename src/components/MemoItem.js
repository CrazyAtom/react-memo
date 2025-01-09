function MemoItem({ children, onClickItem, onClickDelete, isSelected }) {
  return (
    <div
      className={'MemoItem' + (isSelected ? ' selected' : '')}
      onClick={onClickItem}
    >
      {children}
      <button className="MemoItem__delete-button" onClick={onClickDelete}>
        x
      </button>
    </div>
  );
}

export default MemoItem;
