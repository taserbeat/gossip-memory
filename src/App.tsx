import React from 'react';
import BasePage from './pages/BasePage';
import Memory from './features/memory/Memory';
import './scss/App.scss';

function App() {

  return (
    <BasePage>
      <Memory />
    </BasePage>
  );
}

export default App;
