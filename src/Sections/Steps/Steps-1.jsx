import React from 'react'

import FirstStep from './FirstStep/FirstStep'
import SecondStep from './SecondStep/SecondStep'

const Steps = () => {
  return (
    <div className='md:p-30 flex flex-col gap-20 p-15'>
        <div className='text-center my-10'>
            <h2 className='text-sm font-bold'>STEP 1</h2>
            <h1 className='text-4xl font-semibold'>Choose your product</h1>
        </div>
        <FirstStep />
        <SecondStep />
    </div>
  )
}

export default Steps