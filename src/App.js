import { memo, useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';
import { getItem, setItem } from './lib/storage';

function App() {
  const [memos, setMemos] = useState(getItem('memos') || []);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = newMemo;
    setMemos(newMemos);
    setItem('memos', newMemos);
  };

  const addMemo = () => {
    const now = new Date().getTime();
    const newMemo = {
      title: 'Untitled',
      content: '',
      createdAt: now,
      updatedAt: now,
    };
    const newMemos = [...memos, newMemo];
    setMemos(newMemos);
    setSelectedMemoIndex(newMemos.length - 1);
    setItem('memos', newMemos);
  };

  const deleteMemo = (index) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
    if (selectedMemoIndex === index) {
      setSelectedMemoIndex(0);
    }
    setItem('memos', newMemos);
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        addMemo={addMemo}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
