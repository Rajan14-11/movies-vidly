
import './App.css';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import {Routes,Route,BrowserRouter,Navigate} from "react-router-dom"
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import NotFound from './components/Not-found';
import MoviesForm from './components/MoviesForm';
function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/moviesform/:id" element={<MoviesForm/>} />

        </Routes>
      </BrowserRouter>
    </>

    // <div className="App">
    //     <Movies/>
    // </div>
  );
}

export default App;
