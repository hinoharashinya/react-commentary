import {useLocation, useHistory} from "react-router-dom";

export const DetailA = () => {
  const history = useHistory();
  const {state} = useLocation();

  const onClickBack = () => {
    history.goBack();
  }
  return(
    <>
      <h2>DetailA</h2>
      <p>{state}</p>
      <button onClick={onClickBack}>back</button>
    </>
  );
}
