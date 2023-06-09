import Image from "next/image"


export default function LinkedInComponent(){
  return(
    <div className="flex justify-center items-center mt-10">
      <a className="flex items-center" href="https://www.linkedin.com/in/basusubhrodeep/" target="_blank">
      <h1 className="text-2xl font-bold mr-2">My</h1>
      <Image
       src='/linkedin.svg'
       width={100}
       height={50}
       alt="linkedInlogo"
      />
      </a>
    </div>
  )
}