import React from 'react';
import './App.css';
import Board from './container/Board';
import Layout, { Footer } from 'antd/lib/layout/layout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Board/>
      </header>
      <Layout><Footer style={{ textAlign: 'center',padding:'1.7vh 24px' }}>Minesweeper ©2020 Created by Swagat Kumar NITR-EE700</Footer></Layout>
      
    </div>
  );
}

export default App;
