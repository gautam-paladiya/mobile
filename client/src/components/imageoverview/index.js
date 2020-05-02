import './style.scss'
import React from 'react'

import Img from 'react-image'
import { GridLoader } from 'react-spinners'

export default function ImageOverView (props) {
  return (
    <div>
      <div className='card border-red'>
        <Img
          className='img-preview card-img'
          src={
            process.env.PUBLIC_URL +
            `/api/${props.item.types}/` +
            props.item.fileName
          }
          loader={<GridLoader size={20} margin={10} />}
          unloader={<GridLoader size={20} margin={10} />}
        />
      </div>
    </div>
  )
}
