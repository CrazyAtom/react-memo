import { memo, useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Title 1',
      content: 'Content 1',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    },
    {
      title: 'Title 2',
      content: 'Content 2',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    },
  ]);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = newMemo;
    setMemos(newMemos);
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
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        addMemo={addMemo}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
