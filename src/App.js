import React, { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';

function App({ menu }) {
  const [selectedType, setSelectedType] = useState('Lanches');
  const [selectedItem, setSelectedItem] = useState(null);

  const types = [];
  for (let key in menu) {
    types.push(
      <Card
        imgPath={menu[key].imgPath}
        text={`${key}`}
        isSelected={selectedType === key ? true : false}
        handler={type => {
          setSelectedType(type);
          setSelectedItem(null);
        }}
      />
    );
  }

  const list = [];
  for (let item in menu[selectedType].list) {
    list.push(
      <Card
        imgPath={menu[selectedType].list[item].imgPath}
        text={`${item}`}
        isSelected={selectedItem === item ? true : false}
        handler={setSelectedItem}
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
      <div
        className="list-container"
        style={
          selectedItem
            ? { paddingBottom: '5%', borderBottom: 'solid 1px #bbb' }
            : {}
        }
      >
        {selectedType && list}
      </div>
      {selectedType === 'Lanches' && selectedItem && (
        <div className="info-container">
          <Card
            imgPath={menu[selectedType].list[selectedItem].imgPath}
            text={`${selectedItem}`}
            isSelected={false}
            handler={() => {
              return;
            }}
          />
          <p>{menu[selectedType].list[selectedItem].info}</p>
          <br />
          <p>Preço: R${menu[selectedType].list[selectedItem].price}</p>
        </div>
      )}
      {selectedType === 'Ingredientes' && selectedItem && (
        <div className="info-container">
          <Card
            imgPath={menu[selectedType].list[selectedItem].imgPath}
            text={`${selectedItem}`}
            isSelected={false}
            handler={() => {
              return;
            }}
          />
          <p>{menu[selectedType].list[selectedItem].info}</p>
        </div>
      )}
    </div>
  );
}

export default App;
