import Earth from '@/components/Earth'
import Rocket from '@/components/Rocket'
import Space from '@/components/Space'
import React from 'react'

const page = () => {
  return (
    // <div className='h-screen w-full flex justify-center flex-col items-center p-10'>
    //   <h1 className='text-6xl font-bold'>Planet Earth</h1>
    //   <p className='max-w-xl text-center text-sm mt-10 mb-10'>Earth is a rocky, terrestrial planet that is the third-closest planet to the sun and the fifth-largest in our solar system. It has a solid surface with mountains, valleys, canyons, and plains, and is covered by 70% water, making it an ocean planet. Earth&apos;s atmosphere is made up of mostly nitrogen and oxygen, with trace amounts of other gases like carbon dioxide and water vapor.</p>
    //   <Earth />
    // </div>
    <div className='relative'>
      <div><Space /></div>
      <div className='absolute top-0'><Rocket /></div>
    </div>
  )
}

export default page
