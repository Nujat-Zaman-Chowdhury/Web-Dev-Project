"use client"
import React from 'react'
export default function Button({text,borderColor,textColor,onClick}) {
  return (
    <button className={`py-[14px] pr-5 pl-6 border rounded-full flex justify-center items-center `}
    style={{borderColor,
        color:textColor
    }}
    onClick={onClick}
    >{text}</button>
  )
}
