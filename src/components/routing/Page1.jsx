import {Link, useHistory} from "react-router-dom";

export const Page1 = () => {
  const stateA = "state";
  const history = useHistory();

  const onClickButton = () => {
    //history.push("/page1/detailA")
    history.push({
      pathname: "/page1/detailA",
      state: stateA
    })
  }
  return(
    <>
      <Link to={{pathname: "/page1/detailA", state: stateA}}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <h2>Page1</h2>
      <br />
      <button onClick={onClickButton}>Jump to DetailA</button>
    </>
  );
}
