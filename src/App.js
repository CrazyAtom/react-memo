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

  return (
    <div className="App">
      <SideBar
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
