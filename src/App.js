import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Menubar from './Components/Menubar/Menubar';

function App() {
  return (
    <div className="App">
      <h1 className='text-primary'>Fakestore Shop</h1>
      <Menubar country = {"Bangladesh"}></Menubar>
    </div>
  );
}

export default App;
