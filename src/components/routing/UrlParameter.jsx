import {useParams, useLocation} from "react-router-dom";

export const UrlParameter = () => {
  const {id} = useParams();
  const {search} = useLocation();
  const query = new URLSearchParams(search);
  return(
    <>
      <h2>UrlParameter</h2>
      <p>{id}</p>
      <p>{query.get("name")}</p>
    </>
  );
}
