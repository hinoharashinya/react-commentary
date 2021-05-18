import {Link} from "react-router-dom";

export const Page1 = () => {
  const stateA = "state";
  return(
    <>
      <Link to={{pathname: "/page1/detailA", state: stateA}}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <h2>Page1</h2>
    </>
  );
}
