import React from 'react';
import './App.css';
import Column from './components/Column';
import IconButton from './components/IconButton';

function App() {
  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-4 bg-blue-900 h-screen">

      <Column title={"Overview"} description={"and controls"}>
        <div className="flex flex-row">
          <IconButton text={"Start"} />
          <IconButton text={"Restart"} />
          <IconButton text={"End"} />
        </div>

      </Column>
      <Column title={"Statistics"} description={"compiled data"} />
      <Column title={"Charts"} description={"real-time data"} >

      </Column>

    </div>
  );
}

export default App;
