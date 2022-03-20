import { usePromiseTracker } from "react-promise-tracker";
import { BallTriangle, Rings } from  'react-loader-spinner';


const Loading = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress && <BallTriangle color="#fad257" height={30} width={30} />;
};

export default Loading;
