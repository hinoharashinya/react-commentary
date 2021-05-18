import {useLocation} from "react-router-dom";

export const DetailA = () => {
  const {state} = useLocation();
  return(
    <>
      <h2>DetailA</h2>
      <p>{state}</p>
    </>
  );
}
