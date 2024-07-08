import React from 'react'
import foot from '../../assets/footBlack.png';
import foot1 from '../../assets/footOrange.png';
import foot2 from '../../assets/footWhite.png';

const Footer = () => {
  return (
    <>
      <div className=' w-full'>
                    <div className='absolute bottom-0 w-full'>
                        <img className='w-full h-26 sm:h-32 md:h-38 lg:h-38' src={foot} alt="foot" />
                    </div>
                    <div className='absolute bottom-0 w-full'>
                        <img className='w-full h-22 sm:h-24 md:h-26 lg:h-34' src={foot1} alt="foot1" />
                    </div>
                    <div className='absolute bottom-0 w-full'>
                        <img className='w-full h-18 sm:h-16 md:h-16 lg:h-30' src={foot2} alt="foot2" />
                    </div>
                </div>
    </>
  )
}

export default Footer
