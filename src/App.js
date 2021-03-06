
import './App.css';
import Header from './components/Header';
import DataTable from './components/Table/index.js';

function App() {

  let employees = [];

  return (
    <div className="App">
      <Header />
      <DataTable 
          employees={employees}/>
    </div>
  );
}

export default App;
