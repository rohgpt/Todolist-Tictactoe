import React from 'react';
import Todo from './components/Todo';
import TicTac from './components/TicTac2';

const App = () => {
  const isTodoVisible = false;
  const isTicTacVisible = true;

  return (
    <div>
      {isTodoVisible && <Todo />}
      {isTicTacVisible && <TicTac />}
    </div>
  )
}

export default App;