import React from 'react'
import Statistics from '@/components/Statistics'
import OurMenu1 from '@/components/ourMenu/ourMenu1'
import OurMenu2 from '@/components/ourMenu/ourMenu2'
import OurMenu3 from '@/components/ourMenu/ourMenu3'

export default function MainMenu() {
  return (
    <>
    <OurMenu1 />
      <div className='mt-0 md:mt-[800px] mb-[50px] md:mb-[80px]'>
        <Statistics />
      </div>
    <OurMenu2 />
    <OurMenu3 />
    </>
  )
}
