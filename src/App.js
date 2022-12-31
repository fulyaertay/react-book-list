
import './App.css';
import Navbar from './Components/Navbar';
import BookContextProvider from './context/BookContext';

function App() {
  return (
    <div className="App">
     <BookContextProvider>
      <Navbar>
        
      </Navbar>
     </BookContextProvider>
    </div>
  );
}

export default App;
