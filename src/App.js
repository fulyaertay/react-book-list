
import './App.css';
import Navbar from './Components/Navbar';
import BookContextProvider from './context/BookContext';

function App() {
  return (
    <div class="App">
     <BookContextProvider>
      <Navbar>

      </Navbar>
     </BookContextProvider>
    </div>
  );
}

export default App;
