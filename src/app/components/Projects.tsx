import Image from 'next/image'

export default function Projects() {
    return(
      <div className='w-full border-2 border-white hover:bg-gray-900'>
        <div className='flex mt-5 text-white'>
           <Image
           src='/Profile.jpg'
           width={60}
           height={60}
           className='profile-image pl-2'
           alt="ProfileImg"
          /> 
          <div className='flex flex-col justify-start ml-5'>
          <p className='mr-3'>Subhrodeep Basu</p>
          <p className='bg-slate-500 rounded-2xl  px-3'>🚀 Feeling Experimental</p>
          </div>
        </div>
        <div className='mt-5 ml-10 pl-10 mb-4 pr-2'>
        <h1 className='text-2xl cursor-pointer'><a href='https://github.com/SBasu-7870/BlockCertify'target="_blank">BlockCertify</a></h1>
        <p className='mt-2'>BlockCertify is a certificate verification app that leverages the power of blockchain technology to ensure the immutability and transparency of certificates. It utilizes Firebase for storing certificate data in a Merkle Tree data structure and stores the root hash on the Polygon Blockchain for verification purposes.</p>
        </div>
        <a href="https://block-certify.vercel.app" target="_blank">
        <Image
        src='/BlockCertify.png'
        width={400}
        height={300}
        className='project-img'
        alt="project-1"
        />
        </a> 
      </div>  
    )
}