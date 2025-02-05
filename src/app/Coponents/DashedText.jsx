'use client'
import React from 'react'
import { RiShoppingCart2Fill } from "react-icons/ri";
import { usePathname } from 'next/navigation'

// Dashed Text accept two parameters-
// 1- Text
// 2- Styles (if it is not passed, it will falllback to default)

const DashedText = ({text,styles}) => {
    const pathName = usePathname()
  return (
    <h4 className={ styles || `sm:before:content-[""] sm:before:h-[1px] sm:before:w-6 sm:before:bg-black sm:before:absolute sm:before:left-0 sm:before:top-[50%] sm:before:translate-x-[-140%] sm:before:translate-y-[-50%] ${pathName==='/aasai'?'sm:before:bg-white':'sm:before:bg-black'}

  sm:after:content-[""] sm:after:h-[1px] sm:after:w-6 sm:after:bg-black sm:after:absolute sm:after:right-0 sm:after:top-[50%] sm:after:translate-x-[140%] sm:after:translate-y-[-50%] ${pathName==='/aasai'?'sm:after:bg-white':'sm:after:bg-black'}

  relative ${pathName==='/aasai'?'text-white':'text-black'} text-gray-700 capitalize text-center text-3xl tracking-wider md:max-w-[80%]
  md:before:w-14 md:after:w-14`}>{text} </h4>
  )
}

export default DashedText

