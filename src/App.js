import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Menubar from './Components/Menubar/Menubar';
import Allproducts from './Components/Allproducts/Allproducts';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <Allproducts></Allproducts>
    </div>
  );
}

export default App;
