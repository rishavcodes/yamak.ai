import './App.css';
import NavbarPage from "./navbar/navbar";
import Body from "./body/body";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
       <div className='container'>
        <NavbarPage />
        <Body/>
       </div>
    </div>
  );
}

export default App;
