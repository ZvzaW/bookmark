import { useCountdown } from "../../hooks/useCountdown";

const START_COUNT = 35000;
const DURATION_MS = 20000;

const JoinedCounter = ({ className }) => {
  const count = useCountdown(START_COUNT, DURATION_MS);

  return (
    <p className={className}>{count.toLocaleString("en-US")}+ already joined</p>
  );
};

export default JoinedCounter;
