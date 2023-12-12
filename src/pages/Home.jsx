import React from 'react'
import doctorImage from '../assets/doctor.png';

const Home = () => {
  return (
    
    <div className='max-w-[1400px] w-screen mx-auto'>
        <div className='flex flex-col h-[85vh] justify-between'>
            {/* upper div */}
            <div className='flex justify-between h-[40%]'>
                {/* left div */}
                <div className='w-[55%]'>
                  <h1 className='text-8xl font-semibold'>HEALTH <div className='inline-block bg-lightPink rounded-full min-h-[4.5rem] min-w-[4.5rem]'></div> INFO <i>IN ONE APP</i></h1>
                </div>
                {/* right div  */}
                <div className='flex flex-col gap-4 w-[35%] px-7'>
                  <p className='text-2xl'>Doctors, medicine, lab tests — all in one
                   service 24/7 availability...See details
                  </p>
                  <p className='font-semibold'>See details ➡️</p>
                </div>
            </div>
            {/* lower div */}
            <div className='flex h-full items-end gap-4'>
                {/* 1st card */}
                <div className='flex flex-col justify-center h-[50%] w-[30%] bg-lightPink rounded-[25px] px-14 gap-7'>
                      <div>
                          <p className='text-2xl text-center'>There is a little fatigue,but in general I feel good</p>
                      </div>
                      <div className='flex justify-center gap-2'>
                            <div className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl'>😄</div>
                            <div className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl'>☹️</div>
                            <div className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl'>😊</div>
                      </div>
                </div>
                {/* 2nd card */}
                <div className='h-full w-[40%] bg-primaryBlue rounded-[25px] p-10 relative'>
                    <p className='text-xl font-semibold'>Everything at One Place</p>
                    <p className='text-xl font-semibold'>Doctors, Prescription, lab reports</p>
                    <img className="w-[inherit] absolute bottom-4 right-0 " src={doctorImage} alt="doctor-image"/>
                    <div className='flex flex-col absolute -bottom-10 -right-4 rounded-[25px] w-[80%] h-[35%] bg-white px-8 py-4 gap-6 shadow-lg shadow-blue-300'>
                      <div className='flex gap-2 justify-center'>
                          <div className='bg-[#dfdefb] h-3 w-3 rounded-full'></div>
                          <div className='bg-[#dfdefb] h-3 w-3 rounded-full'></div>
                          <div className='bg-[#dfdefb] h-3 w-3 rounded-full'></div>
                          <div className='bg-[#6c69fc] h-3 w-3 rounded-full'></div>
                      </div>
                      <div>
                        <p className='text-center text-2xl font-semibold'>No problem of report lost</p>
                      </div>
                    </div>
                </div>
                {/* 3rd card */}
                <div className='h-full w-[30%] flex items-end relative'>
                    <div className='p-6 h-[50%] w-[70%] my-auto bg-black rounded-[25px] relative'>
                      <p className='text-white'>Don't worry about keeping all the lab reports or medical prescription, this is the place where you can keep all the records safe in single digital vault.</p>
                      <div className='absolute -top-5 text-3xl rotate-12'>⭐ <div></div></div>
                      <div className='absolute -right-9 -bottom-4 text-6xl rotate-12'>🌟</div>
                      <div className='absolute -top-5 right-0 text-4xl rotate-12'>⭐</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home