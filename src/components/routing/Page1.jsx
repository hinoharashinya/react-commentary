import {Link} from "react-router-dom";

export const Page1 = () => {
  return(
    <>
      <Link to="/page1/detailA">DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <h2>Page1</h2>
    </>
  );
}
