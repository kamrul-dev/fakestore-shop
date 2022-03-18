import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Menubar from './Components/Menubar/Menubar';
import Allproducts from './Components/Allproducts/Allproducts';
import { useState } from 'react';
import "aos/dist/aos.css"

function App() {
  const [count, setCount] = useState(0);
  const setCartCount = () =>{
    setCount(count + 1);
  }
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <Allproducts setCartCount={setCartCount}></Allproducts>
    </div>
  );
}

export default App;
