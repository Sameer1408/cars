import { useEffect, useState } from "react";
import axios from "axios"
import Card from "./Card";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { getCars } from "../state/action-creators";
import { useNavigate } from 'react-router-dom';
import PageButton from "./PageButton";



function Dashboard({ search,pageNumber,setPageNumber}) {

    const state = useSelector(state=>state)
    const dispatch = useDispatch(); 
    const navigate = useNavigate();      
    const [allImage, setAllImage] = useState([]);
    const [arr, setArr] = useState([]);
    const [loading,setLoading] = useState(true);
 
    useEffect(() => {
        setPageNumber(0)
        const a = allImage.filter(item => {
            return item?.name?.toLowerCase()?.indexOf(search?.toLowerCase()) !== -1
        })
        const usersPerPage = 6
        const pagesVisited = pageNumber * usersPerPage;
        const b = a.slice(pagesVisited, pagesVisited + usersPerPage);
        setArr(b);
        
    }, [search])

    useEffect(() => {
        return () => {
            dispatch(getCars());
        }
    }, [])

    useEffect(() => {
        const usersPerPage = 6
        const pagesVisited = pageNumber * usersPerPage;
        const displayUsers = allImage.slice(pagesVisited, pagesVisited + usersPerPage);
        setArr(displayUsers)
    }, [allImage])

    useEffect(()=>{
        console.log(state.cars.allCars,"state");
        setAllImage(state.cars.allCars);
        setLoading(false);
    },[state.cars.allCars])

    useEffect(() => {
        if(search)
        {
            if (search.length == 0) {
            const usersPerPage = 6
            const pagesVisited = pageNumber * usersPerPage;
            const displayUsers = allImage.slice(pagesVisited, pagesVisited + usersPerPage);
            setArr(displayUsers)
        } else {
            const a = allImage.filter(item => {
                return item?.name?.toLowerCase().indexOf(search?.toLowerCase()) !== -1
            })
            const usersPerPage = 6
            const pagesVisited = pageNumber * usersPerPage;
            const b = a.slice(pagesVisited, pagesVisited + usersPerPage);
            setArr(b);
        }
    }else{
        const usersPerPage = 6
        const pagesVisited = pageNumber * usersPerPage;
        const displayUsers = allImage.slice(pagesVisited, pagesVisited + usersPerPage);
        setArr(displayUsers)
    }
    }, [pageNumber])

    const handlePageClick = (page) => {
        if(page==0)
        {
            navigate('/')
        }else{
            navigate(`/page${page.selected+1}`)
        }
        setPageNumber(page.selected)
    }

    return (
        <>
            <div className="dashBoard">
                {loading?<h1>loading .. ..</h1>:
                    arr.length > 0 ?
                        arr?.map(ele => {
                            var base64 = btoa(
                                new Uint8Array(ele?.img?.data?.data)
                                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
                            );
                            var src = `data:image/png;base64,${base64}`
                            return <Card image={src} ele={ele} />
                        })
                        : <h1>No More Cars to Show</h1>
                }
            </div>
            <PageButton handlePageClick={handlePageClick}/>
        </>
    );
}
export default Dashboard;
// import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// function App() {
//   const [image,setImage] = useState();
//   const [allImage,setAllImage] = useState([]);
//   const onChange=(e)=>{
//     console.log(e.target.files[0]);
//     setImage(e.target.files[0]);
//   }
//   const submitImage=async(e)=>{
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("image",image);
//     console.log(formData);
//     const result = await axios.post(
//       "http://localhost:4000/uploadImage",
//       formData,
//       {
//         headers:{"Content-Type":"multipart/form-data"}
//       } )
//   }
//   const getImages = async()=>{
//     const result = await axios.get("http://localhost:4000/getImage");
//     // console.log(result.data.data,"data");
//     setAllImage(result.data.data);
//     let arr = result.data.data;
//     for(var i = 0;i<arr.length;i++)
//     {
//       console.log(arr[i],"arr");
//       const base64String = btoa(
//         String.fromCharCode(...new Uint8Array(arr[i]?.img?.data?.data))
//       )
//     }
//   }
//   useEffect(()=>{
//    getImages();
//   },[])
//   return (
//     <div className="App">
//       <form>
//       <input type="file" accept='image/*'  onChange={(e)=>onChange(e)}></input>
//       <button type='submit' onClick={submitImage}>Submit</button>
//       </form>
//       {/* {allImage.length>0?
//         allImage?.map(singleImage=>{
//           const base64String = btoa(
//             String.fromCharCode(...new Uint8Array(singleImage?.img?.data?.data))
//             )
//           //   console.log(base64String,"base");
//         }):null
//       } */}
//     </div>
//   );
// }
// export default App;