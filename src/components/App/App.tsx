import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { useState } from 'react';

const App = () => {
  //states of active button & selected item
  const [isActivePreview, setIsActivePreview] = useState(false);
  const [selectedItem, setSelectedItem] = useState(false);

  return (
    //Header & Main part of web-app
    <>
      <Header
        isActivePreview={isActivePreview}
        setIsActivePreview={setIsActivePreview}
        selectedItem={selectedItem}
      />
      <Main
        isActivePreview={isActivePreview}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
        setIsActivePreview={setIsActivePreview}
      />
    </>
  );
};

export default App;
