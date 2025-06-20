import React from 'react'
import CARD_1 from "../../assets/Images/card2.png"
import {LuTrendingUpDown} from "react-icons/lu"

const AuthLayout = ({children}) => {
  return (
    <div className='flex bg-text-teal-400'>
      <div className='w-screen h-screen md:w-[60vw] px-18 pt-7 pb-12'>
        <h2 className='text-lg font-semibold text-black'>Expensia</h2>
        {children}
      </div>

      <div className='hidden md:block w-[40vw] h-screen bg-teal-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative'>

        <div className='grid grid-cols-1 z-20'>
          <StatsInfoCard icon={<LuTrendingUpDown />} label="Track your income and expenses" value="360,000" color="bg-primary" />

        </div>

        <img src={CARD_1} alt="stat_card" className='w-40 h-72 rounded-2xl bottom-56 lg:w-[90%] absolute  shadow-lg shadow-teal-400' />
      </div>
      
    </div>
  )
}

export default AuthLayout

const StatsInfoCard = ({icon, label, value, color}) =>{
  return (
    <div className='flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-teal-400/10 border border-gray-200/50 z-10'>
      <div className='w-12 h-12 flex items-center justify-center text-[26px] text-white bg-teal-600 rounded-full drop-shadow-xl'>
        {icon}
      </div>
      <div>
        <h6 className='text-xs text-gray-500 mb-1'>{label}</h6>
        <span className='text-[20px]'>${value}</span>
      </div>
    </div>
  )
}
