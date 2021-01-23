import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/Jumbotron"
import SearchBar from "./components/searchBar"
import Table from "./components/Table"

function App() {
  return (<div>
    <Jumbotron />
    <SearchBar />
    <Table />
  </div>
  );
}

export default App;
