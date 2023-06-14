import useSWR from 'swr';
import LeetcodeComponent from "./components/LeetcodeComponent";
import GithubComponent from './components/GithubComponent';
import Image from 'next/image';
import LinkedInComponent from './components/LinkedInComponent';
import { motion } from "framer-motion";


type Data ={
  status: string,
  message: string,
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
  submissionCalendar: object
}

const fetcher =(args : string) => fetch(args).then((res) => res.json());


export default function Links() {
   
  const {data, error} = useSWR('https://leetcode-stats-api.herokuapp.com/Subhrodeep_25',fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div className='flex justify-center'>
    <Image
     src="/Pulse.svg"
     width={50}
     height={50}
     className='bg-tranparent'
     alt="loading"
    />
  </div>;

  
  return (
    <motion.div animate={{x: 5}}>
      <LeetcodeComponent data={data}/>
      <GithubComponent/>
      <LinkedInComponent/>
    </motion.div>
  );
}
