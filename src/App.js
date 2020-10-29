import React,{useState} from 'react'
import SingleImg from "./components/single_img"
import ImgGalery from "./components/img_galery" 
import DropImg from "./components/drop_img" 



function App() {
  return (
  <div>
  <SingleImg/>
  <ImgGalery/>
  <DropImg/>
 </div>
  );
}
export default App;
