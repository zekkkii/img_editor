import React,{useState} from 'react'
import Img from "./img-card"

function ImgGalery() {
  const [data,setData]=useState([])
   let handleChange = function (e){ 
    const {value,name}=e.target
    setData( prevState=> {
      return ( ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "marginTop","marginRight", "marginBottom", "marginLeft","width","height"].includes(name) ? 
    [{...prevState, [name]:value+"px"}] : [{...prevState, [name]:value}])
  })}

  let getImg = function(e){
    let img=e.target.files
    for(let i=0;i<img.length;i++){
       setData(prevState=>{
        return img? [...prevState,{["src"]:URL.createObjectURL(img[i])}]:[...prevState]
      })
      }
   
  }

  return (
    <div className="flex">
      <div className="flex items-center h-screen w-1/2">
        <div className="ml-10">
          <input className="mb-5 rounded" type="file" id="input-img" name="src" multiple onChange={getImg}/>
          <div className="mt-3">
          <label className="mx-2" htmlFor="color">Background Color</label>
          <input type="color"  id="color" name="backgroundColor"  onChange={handleChange}/>
        </div>
        <div className="my-2">
          <label htmlFor="select" className="mr-2">OnClick</label>
          <select id="select" name="onClick" className="w-32  rounded w-16 border-gray-600 border border-gray-500 rounded" onChange={handleChange}>
            <option>None</option>
            <option value="link">Link Selector</option>
            <option value="lightbox">LightBox</option>
          </select>
          {data.onClick==="link" && data.src? <input type="text" className="ml-5  border border-gray-500 rounded w-16 border-gray-600 w-32" name="href" placeholder="Write a Link" onChange={handleChange}/>:null}
        </div>
       
       
        <div className="mt-3">
          <label className="mx-2" htmlFor="">Shape</label>
          <select  className=" border border-gray-500 rounded w-16 border-gray-600" name="shape" onChange={handleChange}>
            <option>None</option>
            <option value="rounded-full">Circle</option>
            <option value="rounded-lg">Soft Borders</option>
          </select>
        </div>
        <div className="mt-3">
          <label className="mx-2" htmlFor="select">Animate</label>
          <select  className=" border border-gray-500 rounded w-16 border-gray-600" name="animation" onChange={handleChange}>
            <option>None</option>
            <optgroup label="Attention seekers">
              <option value="animate__bounce">Bounce</option>
              <option value="animate__flash">Flash</option>
              <option value="animate__pulse">Pulse</option>
              <option value="animate__rubberBand">Rubber Band</option>
              <option value="animate__shakeX">Shake x</option>
              <option value="animate__shakeY">Shake y</option>
              <option value="animate__headShake">Head Shake</option>
              <option value="animate__swing">Swing</option>
              <option value="animate__tada">Tada</option>
              <option value="animate__wobble">Wobble</option>
              <option value="animate__jello">Jello</option>
              <option value="animate__heartBeat">Heart Beat</option>
            </optgroup>
            <optgroup label="Back Entrances">
              <option value="animate__backInDown">Back in Down</option>
              <option value="animate__backInLeft">Back in Left</option>
              <option value="animate__backInRight">Back in Right</option>
              <option value="animate__backInUp">Back in Up</option>
            </optgroup>
            <optgroup label="Back Exits">
              <option value="animate__backOutDown">Back Out Down</option>
              <option value="animate__backOutLeft">Back Out Left</option>
              <option value="animate__backOutRight">Back Out Right</option>
              <option value="animate__backOutUp">Back Out Up</option> 
            </optgroup>
            <optgroup label="Bouncing Entrances">
              <option value="animate__bounceIn">Bounce In</option>
              <option value="animate__bounceInDown"> Bounce In Down</option>
              <option value="animate__bounceInLeft">Bounce in Left</option>
              <option value="animate__bounceInRight">Bounce In Right</option>
              <option value="animate__bounceInUp">Bounce In Up</option>
            </optgroup>
            <optgroup  label="Bouncing Exits">
              <option value="animate__bounceOut">Bounce In</option>
              <option value="animate__bounceOutDown"> Bounce In Down</option>
              <option value="animate__bounceOutLeft">Bounce in Left</option>
              <option value="animate__bounceOutRight">Bounce In Out</option>
              <option value="animate__bounceOutUp">Bounce In Up</option>
            </optgroup>
            <optgroup label="Fading Entrances">
              <option value="animate__fadeIn">Fade In</option>
              <option value="animate__fadeInDown">Fade In Down</option>
              <option value="animate__fadeInDownBig">Fade In Down Big</option>
              <option value="animate__fadeInLeft">Fade In Left</option>
              <option value="animate__fadeInLeftBig">Fade In Left Big</option>
              <option value="animate__fadeInRight">Fade In Right</option>
              <option value="animate__fadeInRightBig">Fade In Right Big</option>
              <option value="animate__fadeInUp">Fade In Up</option>
              <option value="animate__fadeInUpBig">Fade In Up Big</option>
              <option value="animate__fadeInTopLeft">Fade In Top Left</option>
              <option value="animate__fadeInTopRight">Fade In Top Right</option>
              <option value="animate__fadeInBottomLeft">Fade In Bottom Left</option>
              <option value="animate__fadeInBottomRight">Fade In Bottom Right</option>
            </optgroup>
            <optgroup label="Fading Exits">
              <option value="animate__fadeOut">Fade Out</option>
              <option value="animate__fadeOutDown">Fade Out Down</option>
              <option value="animate__fadeOutDownBig">Fade Out Down Big</option>
              <option value="animate__fadeOutLeft">Fade Out Left</option>
              <option value="animate__fadeInLeftBig">Fade Out Left Big</option>
              <option value="animate__fadeOutRight">Fade Out Right</option>
              <option value="animate__fadeOutRightBig">Fade Out Right Big</option>
              <option value="animate__fadeOutUp">Fade Out Up</option>
              <option value="animate__fadeOutUpBig">Fade Out Up Big</option>
              <option value="animate__fadeOutTopLeft">Fade Out Top Left</option>
              <option value="animate__fadeOutTopRight">Fade Out Top Right</option>
              <option value="animate__fadeOutBottomLeft">Fade Out Bottom Left</option>
              <option value="animate__fadeOutBottomRight">Fade Out Bottom Right</option>
            </optgroup>
            <optgroup label="Flippers">
              <option value="animate__flip">Flip</option>
              <option value="animate__flipInX">Flip In X</option>
              <option value="animate__flipInY">Flip In Y</option>
              <option value="animate__flipOutX">Flip Out X</option>
              <option value="animate__flipOutY">Flip Out Y</option>
            </optgroup>
            <optgroup label="Lightspeed">
              <option value="animate__lightSpeedInRight">Light Speed In Right</option>
              <option value="animate__lightSpeedInLeft">Light Speed In Left</option>
              <option value="animate__lightSpeedOutRight">Light Speed Out Right</option>
              <option value="animate__lightSpeedOutLeft">Light Speed Out Left</option>
            </optgroup>
            <optgroup lable="Rotating Entrances">
              <option value="animate__rotateIn">Rotate In</option>
              <option value="animate__rotateInDownLeft">Rotate In Down Left</option>
              <option value="animate__rotateInDownRight">Rotate In Down Right</option>
              <option value="animate__rotateInUpLeft">Rotate In Up Left</option>
              <option value="animate__rotateInUpRight">Rotate In Up Right</option>
            </optgroup>
            <optgroup label="Rotating exits">
              <option value="animate__rotateIn">Rotate In</option>
              <option value="animate__rotateOutDownLeft">Rotate Out Down Left</option>
              <option value="animate__rotateOutDownRight">Rotate Out Down Right</option>
              <option value="animate__rotateOutUpLeft">Rotate Out Up Left</option>
              <option value="animate__rotateOutUpRight">Rotate Out Up Right</option>
            </optgroup>
            <optgroup label="Specials">
              <option value="animate__hinge">Hinge</option>
              <option value="animate__jackInTheBox">Jack In The Box</option>
              <option value="animate__rollIn">Roll In</option>
              <option value="animate__rollOut">Roll Out</option>
            </optgroup>
            <optgroup label="Zooming Entrances">
              <option value="animate__zoomIn">Zoom In</option>
              <option value="animate__zoomInDown">Zoom In Down</option>
              <option value="animate__zoomInLeft">Zoom In Left</option>
              <option value="animate__zoomInRight">Zoom In Right</option>
              <option value="animate__zoomInUp">Zoom In Up</option>
            </optgroup>
            <optgroup label="Zooming Exits">
              <option value="animate__zoomOut">Zoom Out</option>
              <option value="animate__zoomOutDown">Zoom Out Down</option>
              <option value="animate__zoomOutLeft">Zoom Out Left</option>
              <option value="animate__zoomOutRight">Zoom Out Right</option>
              <option value="animate__zoomOutUp">Zoom Out Up</option>
            </optgroup>
            <optgroup label="Sliding Entrances">
              <option value="animate__slideInDown">Slide In Down</option>
              <option value="animate__slideInLeft">Slide InLeft</option>
              <option value="animate__slideInRight">Slide In Right</option>
              <option value="animate__slideInUp">Slide In Up</option>
            </optgroup>
            <optgroup label="Sliding Exits">
              <option value="animate__slideOutDown">Slide Out Down</option>
              <option value="animate__slideOutLeft">Slide OutLeft</option>
              <option value="animate__slideOutRight">Slide Out Right</option>
              <option value="animate__slideOutUp">Slide Out Up</option>
            </optgroup>
          </select>
        </div>
      </div>   
    </div>
    <div  className={`flex items-center w-1/2 animate__animated ${data.animation} ${data.backgroundColor} `}>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {( data?
          data.map(img=>{return <Img src={img.src} shape={img.shape}/>})
        
        :null)}
      </div>
    </div>
  </div>
  );
}
export default ImgGalery;
