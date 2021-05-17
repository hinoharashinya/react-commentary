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
      <Link to="page2/999?name=hogehoge">Query Parameter</Link>
      <h2>Page2</h2>
    </>
  );
}
