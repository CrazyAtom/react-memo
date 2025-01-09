function MemoItem({ children, onClick, isSelected }) {
  return (
    <div
      className={'MemoItem' + (isSelected ? ' selected' : '')}
      onClick={onClick}
    >
      <h3>{children}</h3>
    </div>
  );
}

export default MemoItem;
