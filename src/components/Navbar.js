import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({setSearch,search,addCar,setAddCar}) {

  const navigate = useNavigate();    
  const handleAddCar=()=>{
  if(addCar)
  {
    navigate('/add-car')
    setAddCar(false);
  }
  else{
    navigate('/page1')
    setAddCar(true)
  }
  }

  return (
    <div style={{
      position:"fixed",
      width:"100%",
      marginTop:"5px",
      top:"5px",
      zIndex:"100"
      }}>
    <div className="navbar"> 
        <input
        className="form-control"
        placeholder="search"
        value={search}
        onChange={(e)=>{
        setSearch(e.target.value)
        }}
        />
        <p>Relevance</p>
        <p>All brands</p>
        <button className="btn" onClick={handleAddCar}>
        {
          addCar?
          <>Add Car</>:
          <>Home</>
        }  
          </button>
    </div>
    </div>
  );
}
export default Navbar;