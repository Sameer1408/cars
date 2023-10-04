import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import AddCar from './components/AddCar';

function App() {
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [addCar,setAddCar] = useState(true); 

  useEffect(()=>{
  },[search])

  return (
        <Router>  
        <div className="">
        <Navbar setSearch={setSearch} search={search} addCar={addCar} setAddCar={setAddCar} />
        <Routes>
        <Route path='/' exact element={<Dashboard search={search}  pageNumber={pageNumber} setPageNumber={setPageNumber}/>}/>
        <Route path="/page1" exact element={<Dashboard search={search}  pageNumber={pageNumber} setPageNumber={setPageNumber}/>}/>
        <Route path="/page2" exact element={<Dashboard search={search} pageNumber={pageNumber} setPageNumber={setPageNumber}/>}/>
        <Route path="/page3" exact element={<Dashboard search={search} pageNumber={pageNumber} setPageNumber={setPageNumber}/>}/>
        <Route path="/page4" exact element={<Dashboard search={search} pageNumber={pageNumber} setPageNumber={setPageNumber}/>}/>
        <Route path="/page5" exact element={<Dashboard search={search} pageNumber={pageNumber} setPageNumber={setPageNumber}/>}/>
        <Route path="/page6" exact element={<Dashboard search={search} pageNumber={pageNumber} setPageNumber={setPageNumber}/>}/>
        <Route path="/page7" exact element={<Dashboard search={search} pageNumber={pageNumber} setPageNumber={setPageNumber}/>}/>
        <Route path="/page8" exact element={<Dashboard search={search} pageNumber={pageNumber} setPageNumber={setPageNumber}/>}/>
        <Route path="/page9" exact element={<Dashboard search={search} pageNumber={pageNumber} setPageNumber={setPageNumber}/>}/>
        <Route path="/page10" exact element={<Dashboard search={search} pageNumber={pageNumber} setPageNumber={setPageNumber}/>}/>
        <Route path="/add-car" exact element={<AddCar/>}/>
        </Routes>
         </div>
        </Router>
  );
}
export default App;