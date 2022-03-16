// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Category/Header';
import Home from './Components/Category/Home';
import Bollywood from './Components/Category/Bollywood';
import Technology from './Components/Category/Technology';
import Hollywood from './Components/Category/Hollywood';
import Fitness from './Components/Category/Fitness';
import Food from './Components/Category/Food';
import Fullcard from './Components/Fullcard';
import './Components/Category/Style.css';
import { DataProvider } from './Components/Category/NoteContext';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            {/* <Route path='/' element={<Home/>}/> */}

            <Route path='/' element={<Home/>} />
            <Route path='/bollywood' element={<Bollywood />} />
            <Route path='/technology' element={<Technology />} />
            <Route path='/hollywood' element={<Hollywood />} />
            <Route path='/fitness' element={<Fitness />} />
            <Route path='/food' element={<Food />} />
               <Route>
                 <Route path='/bolly/:category/:id' element={<Fullcard/>}/>
               </Route>                                                                                                 
          </Routes>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
