import React from 'react'
import Image, { StaticImageData } from 'next/image'

const TrendingCard = (props:{
    id: number;
    banner: StaticImageData | string;
    NFtName: string;
    ownerName: string;
    ownerPfp: StaticImageData | string;
    price:number
}) => {
  return (
    <div className='text-white'>
        <div>
            <div>
                <Image src={props.banner} alt={props.NFtName} width={200} height={200} />
                <Image src={props.ownerPfp} alt={props.ownerName} width={200} height={200} />
                <p>{props.NFtName}</p>
                <p>{props.price}</p>
                <p>{props.id}</p>
            </div>
        </div>
    </div>
  )
}

export default TrendingCard