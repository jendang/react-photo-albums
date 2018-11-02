import * as React from 'react'
import { Link } from 'react-router-dom'

export default function PhotoPage(props) {
    const {albumId} = props
  return (<div>
    <h1>Photos in this album {albumId} </h1>

    <Link to="/">Go back to the index</Link>
    <div>
       {!props.photos && "Loading ...:((("}

        {/* {!props.photos && "Loading..."} */}
        {/* {props.photos.map(photo => <p>{photo.title}</p>)} */}
        {/* adding url for every photos */}
        {props.photos && props.photos.map(photo => <img key={photo.id} src={photo.url} alt="photos-album"/>)}

    </div>
  </div>)
}