import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { GrAttachment } from "react-icons/gr";
import { GoHash } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import './App.css'

function App() {

  return (
    <div className="w-full h-screen py-7 px-10 bg-gray-100">
      <h1 class="text-3xl font-bold py-10 ">   Todo List Application </h1>

      <div className='w-full h-auto flex gap-5'>
        <div className='w-2xl h-auto p-4 rounded-sm bg-gray-300'>
          <div className='text-xl font-[600]'>New</div>
          <div className='w-full h-auto mt-4 p-3 rounded-sm bg-white'>
            <div className='text-[18px]'>Admin Panel Test Case</div>
            <div className='flex items-center gap-x-10 mt-2'>
              <HiOutlineMenuAlt2 className=' cursor-pointer ' />
              <div className='flex items-center gap-x-2'>
                <GrAttachment className='cursor-pointer' />2
              </div>
              <div className='flex items-center gap-x-2'>
                <GoHash className='cursor-pointer' />24
              </div>
            </div>
          </div>
          <div className='w-full h-auto flex items-center gap-x-3 mt-5 cursor-pointer text-[18px]'><FiPlus /> Add a card</div>
        </div>

        <div className='w-2xl h-auto p-4 rounded-sm bg-gray-300'>
          <div className='text-xl font-[600]'>Ongoing</div>
          <div className='w-full h-auto mt-4 p-3 rounded-sm bg-white'>
            <div className='text-[18px]'>Admin Panel Test Case</div>
            <div className='flex items-center gap-x-10 mt-2'>
              <HiOutlineMenuAlt2 className=' cursor-pointer ' />
              <div className='flex items-center gap-x-2'>
                <GrAttachment className='cursor-pointer' />2
              </div>
              <div className='flex items-center gap-x-2'>
                <GoHash className='cursor-pointer' />24
              </div>
            </div>
          </div>
          <div className='w-full h-auto flex items-center gap-x-3 mt-5 cursor-pointer text-[18px]'><FiPlus /> Add a card</div>
        </div>

        <div className='w-2xl h-auto p-4 rounded-sm bg-gray-300'>
          <div className='text-xl font-[600]'>Done</div>
          <div className='w-full h-auto mt-4 p-3 rounded-sm bg-white'>
            <div className='text-[18px]'>Admin Panel Test Case</div>
            <div className='flex items-center gap-x-10 mt-2'>
              <HiOutlineMenuAlt2 className=' cursor-pointer ' />
              <div className='flex items-center gap-x-2'>
                <GrAttachment className='cursor-pointer' />2
              </div>
              <div className='flex items-center gap-x-2'>
                <GoHash className='cursor-pointer' />24
              </div>
            </div>
          </div>
          <div className='w-full h-auto flex items-center gap-x-3 mt-5 cursor-pointer text-[18px]'><FiPlus /> Add a card</div>
        </div>



      </div>
    </div>
  )
}

export default App
