import { Search } from 'lucide-react'
import React from 'react'

export default function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-r from-blue-950 to-black flex flex-col justify-center items-center text-white'>
        <h2 className='text-3xl font-bold '>
            Browse all templates
        </h2>
        <p>What will you like to craete today</p>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 items-center border rounded-md bg-white my-5 w-[50%]'>
                <Search className='text-primary'/>
                <input type = "text" placeholder='Search' onChange ={(event)=>onSearchInput(event.target.value)}className='bg-transparent w-full outline-none text-black'/>
            </div>
        </div>
    </div>
  )
}
