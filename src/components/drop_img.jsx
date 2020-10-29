import React, {useState} from 'react'
import Img from "./img-card"
 
const  DropImg=()=>{
  const [img,setImg]=useState([])

  let getImg=(e)=>{
    let img=e.target.files
    for(let i=0;i<img.length;i++){
      setImg((prevState)=>{return  ( img? [...prevState,URL.createObjectURL(img[i])] : [...prevState]) })
    }
  }

  return (<div className="flex bg-gray-400">
  <div className=" bg-gray-800 w-64 rem-25 px-5 pt-6 h-screen">
    <div className="block">
      <div className="relative bg-teal-500 border rounded  py-12 m-auto text-center  w-11/12   text-white ">
      <input type="file"  id="img" className="absolute top-0  m-auto left-0 cursor-pointer bg-gray-200 border border-gray-300 mb-3 outline-none py-10 px-5 rounded shadow-sm opacity-0" multiple onChange={getImg} />
     Click Here  Or Drop An Image 
      </div>
    </div>
    <div className="grid w-full  grid-cols-3 gap-2 mt-10">
      {(img? img.map((src,index)=>{return <Img key={index} src={src}/>}):null)}
    </div>
  </div>
  <div className="w-9/12 h-screen flex justify-center items-center">
    <div className="bg-white p-20 h-64 w-9/12">
    </div>
  </div>
  </div>)
}
export default DropImg