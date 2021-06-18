import './App.css';
import GlobalStyles from './globalStyles';
import Home from './Pages/Home/Home';
import { Menu } from './component';

function App() {
  return (
    <div className="todito">
    <div className="App">
    <GlobalStyles/>
    <Home/> 
    {/* Los componentes se encuentran en home */}
    </div>
    <Menu/>
    </div>
  );
}

export default App;
