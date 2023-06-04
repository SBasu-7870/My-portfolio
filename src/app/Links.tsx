import useSWR from 'swr';
import LeetcodeComponent from "./components/LeetcodeComponent";
import GithubComponent from './components/GithubComponent';


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
  if (!data) return <div>Loading...</div>;


  return (
    <div>
      <LeetcodeComponent data={data}/>
      <GithubComponent/>
    </div>
  );
}
