import React, { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';

function App({ menu }) {
  const [selectedType, setSelectedType] = useState(true);

  const types = [];
  for (let key in menu) {
    types.push(
      <Card
        imgPath={menu[key].imgPath}
        text={`${key}`}
        isSelected={selectedType === key ? true : false}
        handler={setSelectedType}
      />
    );
  }

  return (
    <div className="app-container">
      <div
        className="types-container"
        style={
          selectedType
            ? { paddingBottom: '5%', borderBottom: 'solid 1px #bbb' }
            : {}
        }
      >
        {types}
      </div>
    </div>
  );
}

export default App;
