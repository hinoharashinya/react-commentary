import {Link} from "react-router-dom";

export const Page2 = () => {
  const ids = ["0","100","1000"];
  return(
    <>
      {ids.map((id) => (
        <>
          <Link to={`/page2/${id}`}>UrlParameter{id}</Link>
          <br />
        </>
      ))}
      <h2>Page2</h2>
    </>
  );
}
