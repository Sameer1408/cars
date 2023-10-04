import { useState } from "react";
import axios from "axios";

function AddCar({ setSearch, search }) {
  const [image, setImage] = useState();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [people, setPeople] = useState("");
  const [average, setAverage] = useState("");
  const [gear, setGear] = useState("");
  const [rent, setRent] = useState("");
  const [year, setYear] = useState("");

  const onChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  }

  const addCar = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("type", type);
    formData.append("people", people); 
    formData.append("average", average);
    formData.append("gear", gear);
    formData.append("rent", rent);
    formData.append("year", year);
    console.log(formData);
    const result = await axios.post(
      "https://intern-mnab.onrender.com/uploadImage",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" }
      })
      console.log(result,"result");
  }

  return (
    <div className="addCar">
      <form>
        <input placeholder="image" className="form-control" type="file" accept='image/*' onChange={(e) => onChange(e)}></input>
        <input
          placeholder="name"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }} />
        <input
          placeholder="type for ex:Hybride"
          name="type"
          value={type}
          onChange={(e) => {
            setType(e.target.value)
          }} />
        <input
          placeholder="Number of people"
          name="people"
          value={people}
          onChange={(e) => {
            setPeople(e.target.value)
          }} />
        <input
          placeholder="Average"
          name="average"
          value={average}
          onChange={(e) => {
            setAverage(e.target.value)
          }} />
        <input
          placeholder="Transition"
          name="gear"
          value={gear}
          onChange={(e) => {
            setGear(e.target.value)
          }} />
        <input
          placeholder="Rent per month"
          name="rent"
          value={rent}
          onChange={(e) => {
            setRent(e.target.value)
          }} />
        <input
          placeholder="Year"
          name="year"
          value={year}
          onChange={(e) => {
            setYear(e.target.value)
          }} />
        <button type='submit' className="btn" onClick={addCar}>Submit</button>
      </form>
    </div>
  );
}
export default AddCar;