import React from "react"

function Img(props) {
    return<div style={props.style} className={props.className}>
    <img  src={ props.src } className={props.shape}  alt={ props.alt } />
    <figcaption className="mt-5 text-center" >{props.caption}</figcaption>
    </div>
}
export default Img