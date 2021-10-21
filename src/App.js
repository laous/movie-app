import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <CardList />
    </div>
  );
}

export default App;
