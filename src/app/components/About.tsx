import { motion } from "framer-motion";

export default function About() {
    return(
        <motion.div animate={{x: 5}} className="flex flex-col items-start w-full p-4 hover:bg-gray-900">
            <h1 className="text-2xl">Hi! 👋 I&apos;m Subhrodeep Basu</h1>
            <p className="mt-5">I&apos;m a 2023 gradute in Bachelor&apos;s in Information Technology.</p>
            <p>I am a developer who likes around playing with all things web.</p>
            <p>Currently I&apos;m exploring React in depth to learn more about optimisations, advanced animations and also trying to dip my feet into ThreeJS.</p>
            <p className="mt-5">I&apos;m into open source and looking to collaborate with my fellow developers. 🖐️ </p>
            <p className="mt-2">I&apos;m learning more about cloud technologies looking to become more proficient in Backend development as well.</p>

            <div className="mt-10">
               <h1 className="text-xl">Education</h1>
               <div className="flex flex-col items-start ml-5 md:ml-10 mt-5 p-5 bg-gray-700 rounded-md">
                <span>Institute of Engineering And Management Kolkata</span>
                <span>B.Tech in Information Technology</span>
                <span>2019-2023</span>
                <span>CGPA:- 9.22</span>
               </div>
            </div>
        </motion.div>
    )
}