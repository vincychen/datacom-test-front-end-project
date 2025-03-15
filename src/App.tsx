import React from 'react';
import logo from './logo.svg';
import s from './App.less';
import Table from './Components/Table/Table';

function App() {
  return (
    <div className = {s.App}>
      <Table/>
    </div>
  );
}

export default App;
