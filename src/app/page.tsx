'use client';
import React from 'react'
import Image from 'next/image'
import Projects from './Projects'
import About from './About';

export default function Home() {
  const [page,setPage] = React.useState('projects');

  const handleTabChange = (event: React.MouseEvent<HTMLButtonElement>) => {
     const pageName = event.currentTarget.dataset.tab;
     if(pageName){
        setPage(pageName);
     }   
  }

  const renderComponent =() =>{
    switch(page){
      case 'projects':
        return <Projects/>
      case 'about':
        return <About/>
      default:
        return null;
    }
  }

  return (
    <main className="flex min-h-screen flex-row items-center justify-center p-10">
      <div className='w-2/5 h-screen border-2 border-white border-solid'>
        <div className='w-full h-3/5'>
        <Image
         src="/Background.jpg"
         width={528}
         height={50}
         alt="header"
        />
        </div>
        <div className='flex justify-between'>
        <div className='profile ml-10 border-2 border-black -translate-y-20'>
           <Image
           src='/Profile.jpg'
           width={100}
           height={100}
           className='profile-image'
           alt='Profile'
           />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 h-10 text-white font-bold py-2 px-4 mr-7 rounded-full -translate-y-5">
         Follow
        </button>
        </div>
        <div className='flex flex-col ml-7 text-left -translate-y-10'>
        <strong className='text-2xl'>Subhrodeep Basu</strong>
        <p className='text-slate-600'>@HelloToTheWorld</p>
        </div>
        <div className='ml-7'>
          <p>Builder.Enthusiast.Problem Solver</p>
          <p>I like building interesting things 🚀</p>
          <p>FullStack Developer. IEMK&apos;23</p>
        </div>
        <div className='flex justify-around mt-10'>
          <button className='hover:border-b-2 hover:border-white' data-tab="projects" onClick={handleTabChange}>Projects</button>
          <button className='hover:border-b-2 hover:border-white' data-tab="about" onClick={handleTabChange}>About</button>
          <button className='hover:border-b-2 hover:border-white'>Links</button>
          <button className='hover:border-b-2 hover:border-white'>Contact</button>
        </div>
        {renderComponent()}
      </div>
    </main>
  )
}
