import logo from './logo.svg';
import './App.css';
import { Header } from './header';
import { BestSellers } from './BestSellers';

function App() {
  return (
    <div className="appContainer">
      <Header/>
      <BestSellers/>
    </div>
  );
}

export default App;
