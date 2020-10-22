import React,{useState} from 'react'
import Img from "./components/img-card"

function App() {
  const [data,setData]=useState({src:null,marginTop:null, marginRight:null, marginBottom:null, marginLeft:null, paddingTop:null, paddingRight:null, paddingBottom:null, paddingLeft:null, animation:null,width:"400px",height:"500px",backgroundColor:null, alignment:null,shape:null,caption:null,onClick:null,href:null})
  
  let handleChange = function (e){ 
    const {value,name}=e.target

    setData( prevState=>{
      name==="paddingTop" ||name==="paddingRight" || name==="paddingBottom" || name==="paddingLeft" || name==="marginTop" ||name==="marginRight" || name==="marginBottom" || name==="marginLeft" ?
      {...prevState,[name]:value+"px"} : {...prevState,[name]:value}
      return prevState})
  }
      
  console.log(data.onClick)
  let getImg = function(e){
    let img=e.target.files[0]
    setData(prevState=>{
      if(img){return {...prevState, ["src"]:URL.createObjectURL(img)}}
      else{return {...prevState}}
    })
  }
  return (
    <div className="flex">
      <div className="flex items-center h-screen w-1/2">
        <div className="ml-10">
          <input className="mb-5 rounded" type="file" id="input-img" name="src"  onChange={getImg}/>
          <div>
          <input type="text" className=" border border-gray-500 rounded" name="caption" placeholder="Write a caption" onChange={handleChange}/>
          </div>
          <div className="mt-3">
          <label className="mx-2" htmlFor="color">Background Color</label>
          <input type="color"  id="color" name="backgroundColor"  onChange={handleChange}/>
        </div>
        <div className="mt-3 block">
          <label className="mx-2" htmlFor="size">Size</label>
          <input type="text" name="width" className="w-16 border border-gray-500 rounded mr-3" placeholder="Width" onChange={handleChange}/>
          <input type="text" name="height" className="w-16 border border-gray-500 rounded" placeholder="Height"  onChange={handleChange}/>
          <p className="text-xs mt-1">You Can Set Customized Pixels (Ex: 200x200)</p>
        </div>
        <div className="mt-3">
          <label className="mx-2" htmlFor="">Alignment</label>
          <select  className=" border border-gray-500 rounded w-16 border-gray-600" name="alignment"  onChange={handleChange}>
            <option>None</option>
            <option value="justify-end">Right</option>
            <option value="justify-center">Center</option>
            <option value="justify-start">Left</option>
          </select>
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
          <label className="mx-2" htmlFor="padding">Padding</label>
          <label className="mx-2 " htmlFor="padding-top">Top</label>
          <input type="number" min="0" className=" border border-gray-500 rounded w-16 border-gray-600" id="padding-top" name="paddingTop" placeholder="px"  onChange={handleChange}/>
          <label className="mx-2" htmlFor="padding-right">Right</label>
          <input type="number" min="0" className=" border border-gray-500 rounded w-16 border-gray-600" id="padding-right" name="paddingRight" placeholder="px"  onChange={handleChange} />
          <label className="mx-2" htmlFor="padding-bottom">Bottom</label>
          <input type="number" min="0" className=" border border-gray-500 rounded w-16 border-gray-600" id="padding-bottom" name="paddingBottom" placeholder="px"  onChange={handleChange} />
          <label className="mx-2" htmlFor="padding-left">Left</label>
          <input type="number" min="0" className=" border border-gray-500 rounded w-16 border-gray-600" id="padding-left" name="paddingLeft" placeholder="px"  onChange={handleChange} />
        </div>
        <div className="mt-3">
          <label className="mx-2" htmlFor="margin">Margin</label>
          <label className="mx-2" htmlFor="margin-top">Top</label>
          <input type="number" min="0" className=" border border-gray-500 rounded w-16 border-gray-600" id="margin-top" name="marginTop" placeholder="px"  onChange={handleChange}/>
          <label className="mx-2" htmlFor="margin-right">Right</label>
          <input type="number" min="0" className=" border border-gray-500 rounded w-16 border-gray-600" id="margin-right" name="marginRight" placeholder="px"  onChange={handleChange} />
          <label className="mx-2" htmlFor="margin-bottom">Bottom</label>
          <input type="number" min="0" className=" border border-gray-500 rounded w-16 border-gray-600" id="margin-bottom" name="marginBottom" placeholder="px"  onChange={handleChange} />
          <label className="mx-2" htmlFor="margin-left">Left</label>
          <input type="number" min="0" className=" border border-gray-500 rounded w-16 border-gray-600" id="margin-left" name="marginLeft" placeholder="px"  onChange={handleChange} />
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
    <div  className={`flex items-center w-1/2 ${data.alignment}  animate__animated ${data.animation} ${data.backgroundColor} `}>
      {( data.src?(
        ((data.onClick==="lightbox")?
          <a href={data.src} data-lightbox="img">
            <Img src={data.src} shape={data.shape} className={data.alignment} caption={data.caption}  style={{paddingTop:data.paddingTop,paddingRight:data.paddingRight,paddingBottom:data.paddingBottom,paddingLeft:data.paddingLeft, marginTop:data.marginTop,marginRight:data.marginRight,marginBottom:data.marginBottom,marginLeft:data.marginLeft,width:data.width,height:data.height}}/>
          </a>:null)
        || ((data.onClick==="link")?
          <a href={data.href}>
            <Img src={data.src} shape={data.shape} className={data.alignment} caption={data.caption}  style={{paddingTop:data.paddingTop,paddingRight:data.paddingRight,paddingBottom:data.paddingBottom,paddingLeft:data.paddingLeft, marginTop:data.marginTop,marginRight:data.marginRight,marginBottom:data.marginBottom,marginLeft:data.marginLeft,width:data.width,height:data.height}}/>
          </a>:null) 
        ||  <Img src={data.src} shape={data.shape} className={data.alignment} caption={data.caption}  style={{paddingTop:data.paddingTop,paddingRight:data.paddingRight,paddingBottom:data.paddingBottom,paddingLeft:data.paddingLeft, marginTop:data.marginTop,marginRight:data.marginRight,marginBottom:data.marginBottom,marginLeft:data.marginLeft,width:data.width,height:data.height}}/>
      ):null)}
    </div>
  </div>
  );
}
export default App;
