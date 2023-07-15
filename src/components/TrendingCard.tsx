import React from 'react'
import Image, { StaticImageData } from 'next/image'

const TrendingCard = (props: {
  id: number;
  banner: string;
  NFtName: string;
  ownerName: string;
  ownerPfp: string;
  price: number
}) => {
  return (

    <div className="flex items-center justify-start">
      <div className="my-10 w-72 bg-black p-5 rounded-2xl border-4 border-purple-600 hover:scale-110 duration-300 cursor-pointer">
        <img src={props.banner} className='rounded-2xl' alt="BAYC Ape" />
        <h2 className="text-md font-bold mt-3"></h2>
        <p className="text-white text-sm mb-2">{props.NFtName}</p>
        <div className="flex justify-between items-center text-sm">
          <p className="text-purple-400 flex  items-center justify-center font-bold">
            <img className='mr-1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/1396px-Ethereum_logo_translucent.svg.png" width={20} /> {props.price} ETH
          </p>
          <p className="text-white px-2">
            {props.id} days left
          </p>
        </div>
        <p className="bg-purple-600 h-[0.5px] w-full my-2"></p>
        <div className="flex items-center">
          <img src={props.ownerPfp} alt="BAYC" className="h-12  border border-white rounded mr-2" />
          <p className="text-purple-400 text-[12px]">
            Owned by <a href="/"
              className="text-white font-bold">{props.ownerName}</a>
          </p>
        </div>
      </div>
    </div>

  )
}

export default TrendingCard