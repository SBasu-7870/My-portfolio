import ProgressBar from "./ProgressBar";

type Data = {
  status: string;
  message: string;
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
  submissionCalendar: object;
};

interface LeetcodeComponentProps {
  data: Data;
}

const LeetcodeComponent: React.FC<LeetcodeComponentProps> = ({ data }) => {
  return (
    <div>
      Leetcode:
      {/* https://leetcode-stats-api.herokuapp.com/Subhrodeep_25 */}
      <div className="w-full p-10 border-2 border-white">
        <span>Solved Problems</span>
        <div className="flex flex-row gap-x-11 justify-between mt-5">
          <div className="flex justify-center items-center w-28 h-28 rounded-full border-4 border-amber-600">
            {data.totalSolved}
          </div>
          <div className="flex flex-col grow mx-5 -translate-y-5">
            <div className="flex justify-between mb-2">
              <h1 className="text-slate-300">Easy</h1>
              <span className="text-slate-500">{`${data.easySolved}/${data.totalEasy}`}</span>
            </div>
            <ProgressBar
                bgcolor="green"
                backgroundColor="#0c571a"
                borderRadius={6}
                progress={30}
                height={10}
              />
            <div className="flex justify-between my-2">
              <h1 className="text-slate-300">Medium</h1>
              <span className="text-slate-500">{`${data.mediumSolved}/${data.totalMedium}`}</span>
            </div>
            <ProgressBar
                bgcolor="orange"
                backgroundColor="#b5850d"
                borderRadius={5}
                progress={30}
                height={10}
              />
            <div className="flex justify-between my-2">
              <h1 className="text-slate-300">Hard</h1>
              <span className="text-slate-500">{`${data.hardSolved}/${data.totalHard}`}</span>
            </div>
            <ProgressBar
                bgcolor="red"
                backgroundColor="#690606"
                borderRadius={5}
                progress={30}
                height={10}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeetcodeComponent;
